"use client";

import { ArrowUp, Search } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { guideAnswers, guideFallback, type GuideAnswer } from "@/data/guide";

type Message = {
  id: number;
  role: "visitor" | "guide";
  text: string;
  link?: GuideAnswer["link"];
};

function findAnswer(input: string) {
  const normalized = input.trim().toLowerCase();
  if (!normalized) return undefined;

  return guideAnswers
    .map((item) => ({
      item,
      score: item.keywords.reduce((total, keyword) => total + (normalized.includes(keyword.toLowerCase()) ? keyword.length : 0), 0),
    }))
    .sort((a, b) => b.score - a.score)[0];
}

export function PortfolioGuide() {
  const reduceMotion = useReducedMotion();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "guide",
      text: "可以直接问项目。我只引用这份作品集里的经历，不替空白补答案。",
    },
  ]);
  const [typingText, setTypingText] = useState("");
  const [pending, setPending] = useState<{ text: string; link?: GuideAnswer["link"] }>();
  const idRef = useRef(2);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pending) return;
    if (reduceMotion) {
      setMessages((current) => [...current, { id: idRef.current++, role: "guide", ...pending }]);
      setPending(undefined);
      return;
    }

    let index = 0;
    setTypingText("");
    const timer = window.setInterval(() => {
      index += 1;
      setTypingText(pending.text.slice(0, index));
      if (index >= pending.text.length) {
        window.clearInterval(timer);
        setMessages((current) => [...current, { id: idRef.current++, role: "guide", ...pending }]);
        setTypingText("");
        setPending(undefined);
      }
    }, 16);

    return () => window.clearInterval(timer);
  }, [pending, reduceMotion]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: reduceMotion ? "auto" : "smooth" });
  }, [messages, typingText, reduceMotion]);

  const suggestions = useMemo(() => guideAnswers.slice(0, 5), []);

  function ask(question: string) {
    if (pending) return;
    const match = findAnswer(question);
    const answer = match && match.score > 0 ? match.item : undefined;
    setMessages((current) => [...current, { id: idRef.current++, role: "visitor", text: question }]);
    setPending({ text: answer?.answer ?? guideFallback, link: answer?.link });
    setInput("");
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (input.trim()) ask(input.trim());
  }

  return (
    <div className="guide-shell">
      <div className="guide-topbar">
        <div>
          <span className="status-dot" aria-hidden="true" />
          <strong>项目问答</strong>
        </div>
        <span>只引用本页经历</span>
      </div>

      <div className="guide-grid">
        <div className="guide-suggestions" aria-label="推荐问题">
          <div className="guide-suggestion-heading">
            <p>你可以这样问</p>
          </div>
          {suggestions.map((item) => (
            <button key={item.id} type="button" onClick={() => ask(item.question)} disabled={Boolean(pending)}>
              {item.question}
            </button>
          ))}
          <div className="guide-source-note">
            <Search size={16} aria-hidden="true" />
            没有材料支撑的问题，我会直接说不知道。
          </div>
        </div>

        <div className="guide-chat">
          <div className="guide-messages" ref={scrollRef} aria-live="polite" aria-label="向导对话">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.role}`}>
                <span>{message.role === "guide" ? "向导" : "访客"}</span>
                <p>{message.text}</p>
                {message.link ? <a href={message.link.href}>{message.link.label} →</a> : null}
              </div>
            ))}
            {pending ? (
              <div className="message guide is-typing">
                <span>向导</span>
                <p>{typingText || "正在翻项目记录…"}</p>
              </div>
            ) : null}
          </div>

          <form className="guide-input" onSubmit={submit}>
            <label className="sr-only" htmlFor="guide-question">
              输入想了解的问题
            </label>
            <input
              id="guide-question"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="输入关键词，例如：你如何用数据做决策？"
              maxLength={80}
              disabled={Boolean(pending)}
            />
            <button type="submit" aria-label="发送问题" disabled={!input.trim() || Boolean(pending)}>
              <ArrowUp size={18} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
