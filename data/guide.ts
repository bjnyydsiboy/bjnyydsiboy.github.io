import { sitePath } from "@/lib/site-path";
export type GuideAnswer = {
  id: string;
  question: string;
  keywords: string[];
  answer: string;
  link?: { label: string; href: string };
};

export const guideAnswers: GuideAnswer[] = [
  {
    id: "ai-fit",
    question: "为什么你适合 AI 产品？",
    keywords: ["ai", "人工智能", "模型", "prompt", "适合"],
    answer:
      "我做 AI 产品时，会把模型效果放回完整的用户体验里看。在百度，我用准确率、首轮响应和音画同步拆解留存问题，推动解题准确率从 68.6% 提升到 89.2%，首轮响应从 21.2 秒降到 3.2 秒。",
    link: { label: "查看百度案例", href: sitePath("/work/baidu-wenxin") },
  },
  {
    id: "signature",
    question: "你最有代表性的项目是什么？",
    keywords: ["代表", "项目", "文心", "百度", "作品"],
    answer:
      "最能代表我的是百度「文心老师」。这个项目让我同时处理模型效果、用户信任和端到端链路。我既做模型择优、Prompt 优化和 Badcase 修复，也推动 OCR、TTS 与加载机制改造，再把能力接进搜索、文心助手和错题本。",
    link: { label: "查看完整项目", href: sitePath("/work/baidu-wenxin") },
  },
  {
    id: "data",
    question: "你如何通过数据做决策？",
    keywords: ["数据", "指标", "ab", "a/b", "决策", "实验", "漏斗"],
    answer:
      "我会先用数据定位影响目标的关键环节，再让每个方案对应一个指标。百度「文心老师」项目里，我结合页面数据、竞品体验和用户反馈，用准确率、首轮响应和音画同步拆解留存问题，推动模型与链路优化。解题准确率从 68.6% 提升到 89.2%，首轮响应从 21.2 秒降到 3.2 秒，次日留存从 5.3% 提升到 9.7%。",
    link: { label: "查看百度案例", href: sitePath("/work/baidu-wenxin") },
  },
  {
    id: "collaboration",
    question: "你如何推进复杂跨团队项目？",
    keywords: ["团队", "协作", "推进", "复杂", "沟通", "跨团队", "落地"],
    answer:
      "我会先把复杂系统拆成接口、负责人和里程碑。美团厂商广告项目牵涉商业化、搜索、算法、研发、数据、设计和运营。我按商品池、预算、召回、排序、计费与归因拆解依赖，跟进研发站会，最后在 6 周内推进上线。",
    link: { label: "查看美团案例", href: sitePath("/work/meituan-commercialization") },
  },
  {
    id: "difference",
    question: "你和其他产品候选人有什么不同？",
    keywords: ["不同", "优势", "特点", "区别", "候选人", "vibe", "coding"],
    answer:
      "我能在不同问题之间迁移方法：百度看 AI 效果和体验，美团看复杂商业系统。我也会用 Codex 和 Figma 快速做出可交互版本，尽早让团队围绕真实东西讨论。沟通上，我是个愿意把气氛和节奏带起来的人。",
  },
];

export const guideFallback =
  "这份材料里没有足够信息回答这个问题，我不会补写经历。你可以点一个推荐问题，或输入“百度项目”“数据决策”“跨团队推进”等关键词。";
