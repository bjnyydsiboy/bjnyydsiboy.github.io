import { sitePath } from "@/lib/site-path";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Download,
  Gauge,
  MousePointerClick,
  Network,
  Search,
  SlidersHorizontal,
  Store,
  Target,
} from "lucide-react";
import { Companion } from "@/components/companions";
import { Reveal } from "@/components/reveal";
import type { WorkCase } from "@/data/portfolio";

type CommerceSlug = Exclude<WorkCase["slug"], "baidu-wenxin">;

type ActionMedia = {
  layout: "comparison" | "single" | "gallery";
  items: Array<{
    src: string;
    alt: string;
    label: string;
    note?: string;
    kind: "phone" | "diagram";
    featured?: boolean;
  }>;
};

type CommerceCaseConfig = {
  className: string;
  navLabel: string;
  heroCaption: string;
  product: {
    label: string;
    title: string;
    note: string;
    intro: string;
    steps: Array<{ label: string; text: string }>;
  };
  background: {
    title: string;
    note: string;
    evidence: Array<{ label: string; value: string; title: string; text: string }>;
  };
  goal: {
    title: string;
    priorities: Array<{ word: string; title: string; text: string }>;
  };
  roleTitle: string;
  responsibilities: Array<{ icon: typeof Search; label: string; text: string }>;
  actionsTitle: string;
  actions: Array<{
    label: string;
    title: string;
    text: string;
    tags: string[];
    media?: ActionMedia;
  }>;
  resultsTitle: string;
  resultNote: string;
  resultLabels: [string, string];
  comparisons: Array<{
    label: string;
    before: string;
    after: string;
    beforeWidth: string;
    afterWidth: string;
    direction: string;
  }>;
  summary: Array<{ icon: typeof Gauge; label: string; value: string }>;
};

const commerceConfigs: Record<CommerceSlug, CommerceCaseConfig> = {
  "meituan-commercialization": {
    className: "meituan-structured-page",
    navLabel: "BJ / MEITUAN CASE",
    heroCaption: "把厂商预算接进平台交易系统",
    product: {
      label: "业务系统",
      title: "推广通（厂商版），让品牌厂商可以按商品给全国门店加热。",
      note: "厂商表达商品和预算，系统完成门店分配、召回、排序、计费与效果回收。",
      intro: "这不是复制门店投放入口，而是新增一种预算主体：同一件商品关联大量门店，厂商与门店还可能共同出资，整条广告链路必须保持一致。",
      steps: [
        { label: "厂商建计划", text: "选择商品、门店和日预算" },
        { label: "系统分预算", text: "按门店质量动态分配" },
        { label: "搜索竞价", text: "相关召回并参与 eCPM 排序" },
        { label: "计费归因", text: "厂商与门店分别回收效果" },
      ],
    },
    background: {
      title: "厂商有预算，平台却只有门店投放能力。",
      note: "行业调研、商户反馈与平台数据共同指向同一个机会：把站外预算转成可在站内表达、消耗和回收的结构性供给。",
      evidence: [
        { label: "预算结构", value: "<1%", title: "厂商预算占比不足", text: "平台广告预算超过 95% 来自门店，品牌新品预算大量流向小红书、抖音等站外渠道。" },
        { label: "厂商意愿", value: "62%", title: "愿意尝试站内投放", text: "前提是平台提供从选品、定向、投放到效果回收的完整路径，而不是一次性品牌曝光。" },
        { label: "冷启动", value: "<30%", title: "新品冷启动成功率偏低", text: "多数新品依赖头部门店获得曝光，厂商无法规模化推动全国门店共同销售。" },
      ],
    },
    goal: {
      title: "让厂商预算能表达、能花好，也能算清效果。",
      priorities: [
        { word: "投", title: "能自主建计划", text: "支持多商品、关联门店与计划日预算，形成完整投放入口。" },
        { word: "配", title: "预算分得合理", text: "兼顾转化效率、门店公平性与预算消耗，避免向头部过度集中。" },
        { word: "算", title: "计费归因一致", text: "厂商与门店共同出资时，点击、订单与消耗都能准确拆分。" },
      ],
    },
    roleTitle: "把一个商业机会，拆成可以在六周内协同上线的完整系统。",
    responsibilities: [
      { icon: Target, label: "定义模式", text: "结合行业、商户与平台数据，确定厂商级商品加热的预算主体和收益目标。" },
      { icon: Store, label: "搭建 MVP", text: "设计多选商品、关联门店与计划日预算，跑通厂商侧投放主链路。" },
      { icon: SlidersHorizontal, label: "拆解规则", text: "定义商品池、预算分配、召回、eCPM 排序、双计费和效果归因。" },
      { icon: Network, label: "推进交付", text: "将商业化、搜索、算法、研发、数据、设计与运营拆成并行里程碑，六周完成上线。" },
    ],
    actionsTitle: "从投放入口到计费归因，把厂商预算接进原有广告系统。",
    actions: [
      {
        label: "动作 01 · 投放 MVP",
        title: "让厂商用商品而不是门店来表达投放意图。",
        text: "在开店宝支持多商品、全国关联门店和计划日预算；厂商只表达主推商品与预算，复杂的门店切分交给系统。",
        tags: ["多商品", "关联门店", "计划日预算", "六周 MVP"],
      },
      {
        label: "动作 02 · 商品池与预算",
        title: "建立可投商品白名单，再用上下界控制预算分布。",
        text: "按品类、品牌、上新状态、销售势能和标品状态建立 SPU 商品池；用历史消耗与竞对水平计算门店权重，通过预算上下界兼顾效率与公平。",
        tags: ["SPU 品池", "初始权重", "预算上界", "长尾下界"],
      },
      {
        label: "动作 03 · 召回、排序与双计费",
        title: "高出价不能强插，命中相关需求后才获得溢价。",
        text: "新增厂商溢价召回通路，在 query 相关时透传主推商品；通过 NoBid 与 eCPM 参与排序，并按双方出资比例拆分消耗、点击单价和订单归因。",
        tags: ["相关性召回", "NoBid", "eCPM", "双计费", "归因"],
      },
    ],
    resultsTitle: "六周上线，一周后收入与订单同时增长。",
    resultNote: "A 组为空白对照，B 组启用厂商与门店联合投放。",
    resultLabels: ["A 组", "B 组"],
    comparisons: [
      { label: "广告收入", before: "2,614,837", after: "3,001,189", beforeWidth: "87%", afterWidth: "100%", direction: "提升 14.78%" },
      { label: "订单量", before: "24,031", after: "29,441", beforeWidth: "82%", afterWidth: "100%", direction: "提升 22.51%" },
      { label: "ACP", before: "10.62", after: "11.57", beforeWidth: "92%", afterWidth: "100%", direction: "提升 8.95%" },
    ],
    summary: [
      { icon: BarChart3, label: "曝光 UV", value: "+4.16%" },
      { icon: MousePointerClick, label: "点击 UV", value: "+5.35%" },
      { icon: Gauge, label: "CVR", value: "+16.29%" },
      { icon: CheckCircle2, label: "上线周期", value: "6 周" },
    ],
  },
};

function StructuredSectionTitle({ english, chinese, title, note }: { english: string; chinese: string; title: string; note?: string }) {
  return (
    <Reveal className="structured-section-title">
      <div className="structured-section-marker"><span>{english}</span><strong>{chinese}</strong></div>
      <h2>{title}</h2>
      {note ? <p>{note}</p> : null}
    </Reveal>
  );
}

function ResultComparison({ comparison, labels }: {
  comparison: CommerceCaseConfig["comparisons"][number];
  labels: [string, string];
}) {
  return (
    <div className="structured-compare-row">
      <div className="structured-compare-heading"><strong>{comparison.label}</strong><span>{comparison.direction}</span></div>
      <div className="structured-bar-pair">
        <div><span>{labels[0]}</span><i style={{ width: comparison.beforeWidth }} /><strong>{comparison.before}</strong></div>
        <div><span>{labels[1]}</span><i style={{ width: comparison.afterWidth }} /><strong>{comparison.after}</strong></div>
      </div>
    </div>
  );
}

function ActionMediaBlock({ media }: { media: ActionMedia }) {
  return (
    <div className={`structured-action-media structured-media-${media.layout}`}>
      {media.items.map((mediaItem) => (
        <figure className={`structured-media-card structured-media-card-${mediaItem.kind} ${mediaItem.featured ? "is-featured" : ""}`} key={mediaItem.src}>
          <figcaption>
            <strong>{mediaItem.label}</strong>
            {mediaItem.note ? <span>{mediaItem.note}</span> : null}
          </figcaption>
          <div className={`structured-media-frame structured-media-${mediaItem.kind}`}>
            <Image src={mediaItem.src} alt={mediaItem.alt} fill sizes={media.layout === "single" ? "(max-width: 760px) 88vw, 620px" : "(max-width: 760px) 44vw, 32vw"} />
          </div>
        </figure>
      ))}
    </div>
  );
}

export function StructuredCommerceCaseStudy({ item, nextCase }: { item: WorkCase; nextCase: WorkCase }) {
  if (item.slug === "baidu-wenxin") return null;
  const config = commerceConfigs[item.slug];

  return (
    <main className={`case-page structured-case-page ${config.className}`}>
      <header className="case-nav">
        {/* Native navigation avoids the vinext client-router failure in production. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href={sitePath("/#experience")}><ArrowLeft size={17} aria-hidden="true" /> 返回工作经历</a>
        <span>{config.navLabel}</span>
        <a href={sitePath("/docs/resume.pdf")} download="柏俊男-产品经理简历.pdf">简历 PDF <Download size={15} aria-hidden="true" /></a>
      </header>

      <section className="case-hero structured-case-hero">
        <div className="case-hero-copy">
          <p>{item.company} · {item.role}</p>
          <h1>{item.title}</h1>
          <span>{item.oneLine}</span>
          <div className="case-meta-line"><strong>{item.team}</strong><strong>{item.period}</strong></div>
        </div>
        <div className="case-hero-companion">
          <Companion type={item.companion} label="美团袋鼠团团" />
          <span>{config.heroCaption}</span>
        </div>
      </section>

      <section className="structured-product-section">
        <StructuredSectionTitle english="PRODUCT" chinese={config.product.label} title={config.product.title} note={config.product.note} />
        <Reveal className="structured-product-board">
          <p>{config.product.intro}</p>
          <div className="structured-product-flow">
            {config.product.steps.map((step, index) => (
              <div key={step.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.label}</strong>
                <p>{step.text}</p>
                {index < config.product.steps.length - 1 ? <ArrowRight aria-hidden="true" /> : null}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="structured-background-section">
        <StructuredSectionTitle english="BACKGROUND" chinese="项目背景" title={config.background.title} note={config.background.note} />
        <div className="structured-evidence-grid">
          {config.background.evidence.map((evidence, index) => (
            <Reveal key={evidence.label} className="structured-evidence-card" delay={index * .05}>
              <span>{evidence.label}</span><strong>{evidence.value}</strong><h3>{evidence.title}</h3><p>{evidence.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="structured-goal-section">
        <StructuredSectionTitle english="GOAL" chinese="项目目标" title={config.goal.title} />
        <div className="structured-priority-line">
          {config.goal.priorities.map((priority, index) => (
            <Reveal key={priority.word} delay={index * .05}>
              <span>{String(index + 1).padStart(2, "0")}</span><strong>{priority.word}</strong><h3>{priority.title}</h3><p>{priority.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="structured-role-section">
        <StructuredSectionTitle english="MY VALUE" chinese="我的职责" title={config.roleTitle} />
        <div className="structured-role-flow">
          {config.responsibilities.map(({ icon: Icon, label, text }, index) => (
            <Reveal key={label} delay={index * .05}>
              <div className="structured-role-icon"><Icon size={19} aria-hidden="true" /></div>
              <span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="structured-actions-section">
        <StructuredSectionTitle english="ACTIONS" chinese="项目动作" title={config.actionsTitle} />
        <div className="structured-action-list">
          {config.actions.map((action, index) => (
            <Reveal className={`structured-action ${action.media ? "structured-action-has-media" : "structured-action-text"}`} key={action.label} delay={index * .04}>
              <div className="structured-action-copy">
                <span>{action.label}</span><h3>{action.title}</h3><p>{action.text}</p>
                <div className="structured-action-tags">{action.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              {action.media ? <ActionMediaBlock media={action.media} /> : null}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="structured-results-section">
        <StructuredSectionTitle english="RESULTS" chinese="项目结果" title={config.resultsTitle} note={config.resultNote} />
        <div className="structured-compare-board">
          {config.comparisons.map((comparison) => <ResultComparison key={comparison.label} comparison={comparison} labels={config.resultLabels} />)}
        </div>
        <div className="structured-result-summary">
          {config.summary.map(({ icon: Icon, label, value }) => <div key={label}><Icon size={20} aria-hidden="true" /><span>{label}</span><strong>{value}</strong></div>)}
        </div>
      </section>

      <section className="next-case">
        {/* Native navigation avoids the vinext client-router failure in production. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href={sitePath("/#experience")}><ArrowLeft aria-hidden="true" /> 返回工作经历</a>
        <a href={sitePath(`/work/${nextCase.slug}`)}><span>下一个案例 · {nextCase.company}</span><strong>{nextCase.title}</strong><ArrowRight aria-hidden="true" /></a>
      </section>
    </main>
  );
}
