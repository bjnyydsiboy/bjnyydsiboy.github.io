"use client";

import { Check, Copy, Download, Eye, EyeOff, Mail, Phone } from "lucide-react";
import { useRef, useState } from "react";

async function copyWithFallback(value: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const area = document.createElement("textarea");
  area.value = value;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  const copied = document.execCommand("copy");
  area.remove();
  if (!copied) throw new Error("copy failed");
}

export function ContactCard() {
  const phone = "17352322027";
  const [toast, setToast] = useState("");
  const [phoneVisible, setPhoneVisible] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  async function copy(value: string, message: string) {
    try {
      await copyWithFallback(value);
      setToast(message);
    } catch {
      setToast("复制未成功，请手动选择文字。");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(""), 2600);
  }

  return (
    <div className="contact-panel">
      <div className="contact-intro">
        <span>LET&apos;S TALK</span>
        <h3>如果你也在找一个<br />会把事情推到落地的人。</h3>
        <p>欢迎从一个具体项目聊起。我会认真回复。</p>
        <a className="primary-button" href="/docs/resume.pdf" download="柏俊男-产品经理简历.pdf">
          <Download size={18} aria-hidden="true" /> 下载简历
        </a>
      </div>

      <div className="contact-list">
        <div className="contact-row">
          <div>
            <Mail size={19} aria-hidden="true" />
            <span>邮箱</span>
            <a href="mailto:2025104485@ruc.edu.cn">2025104485@ruc.edu.cn</a>
          </div>
          <button type="button" onClick={() => copy("2025104485@ruc.edu.cn", "邮箱已复制，等你来聊。") } aria-label="复制邮箱">
            <Copy size={18} aria-hidden="true" /> 复制
          </button>
        </div>
        <div className="contact-row contact-phone-row">
          <div>
            <Phone size={19} aria-hidden="true" />
            <span>手机</span>
            {phoneVisible ? (
              <a href={`tel:${phone}`}>{phone}</a>
            ) : (
              <strong className="phone-masked" aria-label="手机号已隐藏">••• •••• ••••</strong>
            )}
          </div>
          <button
            className="phone-visibility-button"
            type="button"
            aria-pressed={phoneVisible}
            onClick={() => setPhoneVisible((visible) => !visible)}
          >
            {phoneVisible ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
            {phoneVisible ? "隐藏" : "查看"}
          </button>
        </div>
      </div>

      <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">
        <Check size={16} aria-hidden="true" /> {toast}
      </div>
    </div>
  );
}
