import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Download,
  FlaskConical,
  Gauge,
  Layers3,
  MousePointerClick,
  Network,
  Route,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Store,
  Target,
} from "lucide-react";
import { Companion } from "@/components/companions";
import { Reveal } from "@/components/reveal";
import type { WorkCase } from "@/data/portfolio";

type CommerceSlug = "douyin-live" | "meituan-commercialization";

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
  "douyin-live": {
    className: "douyin-structured-page",
    navLabel: "BJ / DOUYIN CASE",
    heroCaption: "把内容兴趣接到交易决定",
    product: {
      label: "业务链路",
      title: "这不是一张商详页，而是一条从内容兴趣到本地履约的交易链路。",
      note: "直播负责激发兴趣，导流卡负责筛选意向，半屏商详负责完成购买判断。",
      intro: "本地生活商品受距离、时间、库存和服务条件影响。用户必须在不中断直播体验的前提下，快速判断“适不适合我、现在能不能买”。",
      steps: [
        { label: "内容推荐", text: "刷到感兴趣的直播内容" },
        { label: "精准导流", text: "先看距离、折扣与库存" },
        { label: "半屏商详", text: "保持直播上下文完成判断" },
        { label: "下单支付", text: "用更短路径完成交易" },
      ],
    },
    background: {
      title: "用户被直播种草，却在距离、库存和跳转里流失。",
      note: "我把用户反馈、关键漏斗与页面结构放在一起看，确认问题并不是“没人感兴趣”，而是购买判断所需的信息来得太晚。",
      evidence: [
        { label: "用户场景", value: "20km", title: "点进去才发现离得太远", text: "游玩、演出票、餐饮套餐和酒店同时受到时间、空间与服务条件约束，简单标题无法完成筛选。" },
        { label: "漏斗断点", value: "77.13%", title: "商详页跳出率过高", text: "小房车到商详转化仅 35.92%，商详到下单仅 21.37%，页面调用和信息组织同时制造流失。" },
        { label: "信息缺口", value: "<3s", title: "用户很快判断页面无效", text: "库存、距离、场次和优惠没有在关键位置前置，用户进入后仍要反复翻找并询问主播。" },
      ],
    },
    goal: {
      title: "让合适的人点进来，并用更少步骤做完购买决定。",
      priorities: [
        { word: "准", title: "导流更精准", text: "点击前就给出距离、价格、销量、库存与直播状态。" },
        { word: "短", title: "链路更短", text: "取消二级页面跳转，用半屏承接并保留直播上下文。" },
        { word: "清", title: "商详更清楚", text: "按商品形态组织优惠、服务保障、预约与购买入口。" },
      ],
    },
    roleTitle: "从漏斗定位问题，把信息、链路和实验一起推进到全量。",
    responsibilities: [
      { icon: Search, label: "定位断点", text: "结合数据漏斗、用户反馈与竞品体验，确定导流、跳转链路和商详是三个核心抓手。" },
      { icon: Layers3, label: "设计方案", text: "重构导流信息，设计半屏商详与无图、有图、多图三类商品详情结构。" },
      { icon: FlaskConical, label: "建立验证", text: "补齐曝光、点击、停留与转化埋点，通过连续 A/B 实验判断真实效果。" },
      { icon: Network, label: "推动上线", text: "协同算法、前后端、设计、运营和测试完成评审、兼容、灰度与全量。" },
    ],
    actionsTitle: "围绕三个断点改：先筛准，再缩链，最后把商详讲清楚。",
    actions: [
      {
        label: "动作 01 · 精准导流",
        title: "把影响本地生活决策的信息，放到点击之前。",
        text: "把只展示主播和入口的预览式导流，升级为可直接判断距离、价格、销量、库存与直播状态的交易卡片；用户在点击前就能确认是否适合自己。",
        tags: ["距离", "折扣", "销量", "库存", "直播状态"],
        media: {
          layout: "comparison",
          items: [
            {
              src: "/assets/douyin-guide-old.png",
              alt: "改版前仅展示主播与进入直播间按钮的预览式导流",
              label: "改版前 · 主播预览",
              note: "只有内容吸引力，缺少交易判断信息",
              kind: "phone",
            },
            {
              src: "/assets/douyin-guide-new.png",
              alt: "改版后前置距离、价格、销量和库存的精准导流卡片",
              label: "改版后 · 交易信息前置",
              note: "进入前即可判断距离、价格与库存",
              kind: "phone",
              featured: true,
            },
          ],
        },
      },
      {
        label: "动作 02 · 链路缩短",
        title: "把二级页面改成直播间内的半屏承接。",
        text: "半屏直接复用直播间状态，减少独立页面再次加载带来的调用失败；用户无需离开直播即可浏览商品、随时收起返回内容，交互更轻、链路也更连贯。",
        tags: ["减少调用失败", "直播上下文", "随时收起"],
        media: {
          layout: "single",
          items: [
            {
              src: "/assets/douyin-half-screen.png",
              alt: "直播间内打开商品列表的半屏承接样式",
              label: "直播间内半屏承接",
              note: "商品浏览与直播内容保持在同一上下文",
              kind: "phone",
            },
          ],
        },
      },
      {
        label: "动作 03 · 商详分型",
        title: "不再用一种页面承接所有商品。",
        text: "按无图、有图、多图拆分商详形态，前置价格优惠、购买须知、服务保障、地址与预约时间，并固定关键操作按钮。",
        tags: ["无图", "有图", "多图", "服务保障", "固定 CTA"],
        media: {
          layout: "gallery",
          items: [
            {
              src: "/assets/douyin-detail-rules.png",
              alt: "以前置购买须知和退款规则为核心的商品详情",
              label: "规则型商详",
              note: "先回答能不能用、怎么退",
              kind: "phone",
            },
            {
              src: "/assets/douyin-detail-image.png",
              alt: "带商品图片、优惠和服务信息的图文商品详情",
              label: "图文型商详",
              note: "图片、优惠与服务信息聚合",
              kind: "phone",
              featured: true,
            },
            {
              src: "/assets/douyin-detail-immersive.png",
              alt: "以大图和预约日期为核心的沉浸式商品详情",
              label: "沉浸型商详",
              note: "大图展示并前置预约决策",
              kind: "phone",
            },
          ],
        },
      },
    ],
    resultsTitle: "点击更精准，购买路径也更短。",
    resultNote: "连续 A/B 实验验证了导流、商详与交易漏斗的改善。",
    resultLabels: ["原方案", "新方案"],
    comparisons: [
      { label: "导流页点击率", before: "18.92%", after: "27.99%", beforeWidth: "68%", afterWidth: "100%", direction: "提升 9.07 个百分点" },
      { label: "商详至下单", before: "21.37%", after: "29.71%", beforeWidth: "72%", afterWidth: "100%", direction: "提升 8.34 个百分点" },
      { label: "商详页跳出率", before: "77.13%", after: "59.04%", beforeWidth: "100%", afterWidth: "76.5%", direction: "降低 18.09 个百分点" },
    ],
    summary: [
      { icon: CircleDollarSign, label: "直播间 GMV", value: "+4.12%" },
      { icon: MousePointerClick, label: "直播间点击率", value: "20.43% → 23.78%" },
      { icon: ShoppingBag, label: "商详至支付", value: "12.92% → 15.78%" },
      { icon: Route, label: "商详平均步骤", value: "3.42 → 2.01" },
    ],
  },
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
        <a href="/#experience"><ArrowLeft size={17} aria-hidden="true" /> 返回工作经历</a>
        <span>{config.navLabel}</span>
        <a href="/docs/resume.pdf" download="柏俊男-产品经理简历.pdf">简历 PDF <Download size={15} aria-hidden="true" /></a>
      </header>

      <section className="case-hero structured-case-hero">
        <div className="case-hero-copy">
          <p>{item.company} · {item.role}</p>
          <h1>{item.title}</h1>
          <span>{item.oneLine}</span>
          <div className="case-meta-line"><strong>{item.team}</strong><strong>{item.period}</strong></div>
        </div>
        <div className="case-hero-companion">
          <Companion type={item.companion} label={item.slug === "douyin-live" ? "抖音音符角色" : "美团袋鼠团团"} />
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
        <a href="/#experience"><ArrowLeft aria-hidden="true" /> 返回工作经历</a>
        <a href={`/work/${nextCase.slug}`}><span>下一个案例 · {nextCase.company}</span><strong>{nextCase.title}</strong><ArrowRight aria-hidden="true" /></a>
      </section>
    </main>
  );
}
