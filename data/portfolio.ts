import { sitePath } from "@/lib/site-path";
export type Metric = {
  value: string;
  label: string;
  note?: string;
};

export type WorkCase = {
  slug: "baidu-wenxin" | "meituan-commercialization";
  company: string;
  team: string;
  role: string;
  period: string;
  periodNote?: string;
  title: string;
  oneLine: string;
  cardBackground: string;
  cardGoal: string;
  cardAction: string;
  cardResult: string;
  context: string;
  problem: string[];
  responsibility: string[];
  insight: string[];
  decisions: string[];
  solution: string[];
  metrics: Metric[];
  moreMetrics: Metric[];
  reflection: string[];
  accent: "blue" | "yellow";
  companion: "bear" | "kangaroo";
  media: Array<{
    type: "image" | "video";
    src: string;
    alt: string;
    caption: string;
    poster?: string;
  }>;
};

export const workCases: WorkCase[] = [
  {
    slug: "baidu-wenxin",
    company: "百度",
    team: "搜索产品部 · 教育 C 端业务组",
    role: "AI 策略产品经理",
    period: "2026.01起-至今",
    title: "「文心老师」：支持在线板书、分层讲解与实时追问的 AI 深度讲题产品",
    oneLine: "「文心老师」是一款面向学生的 AI 讲题产品，会把一道题拆成能听懂、能跟上的讲解过程。",
    cardBackground:
      "「文心老师」上线后，留存率与渗透率未达预期，需要找到真正影响用户继续使用的体验问题。",
    cardGoal:
      "补齐解题准确率、首轮响应与音画同步三项关键体验，让学生答得准、进得快、跟得上，带动留存与渗透提升。",
    cardAction:
      "建立准确率、首轮响应和音画同步评测口径，推动模型择优、Prompt 与 Badcase 优化，以及 OCR、TTS 和加载链路改造。",
    cardResult:
      "解题准确率由 68.6% 提升至 89.2%，首轮响应由 21.2 秒降至 3.2 秒，次日留存由 5.3% 提升至 9.7%。",
    context:
      "文心老师上线后，留存与渗透率未达预期。页面数据、竞品体验和用户反馈共同指向三个问题：答案不够准、等待时间太长、板书与播报不同步。",
    problem: [
      "端到端解题准确率仅 68.6%，直接损伤用户信任。",
      "首轮响应 21.2 秒，用户在真正看到价值前已大量流失。",
      "音画不同步使讲解难以跟随，AI 的“老师感”无法成立。",
    ],
    responsibility: [
      "拆解留存与渗透率问题，定义准确率、时延和音画同步的评测口径。",
      "推进模型择优、Prompt 优化、Badcase 修复与多轮效果评估。",
      "协同算法、前端、后端、OCR 与 TTS 团队落地性能和链路改造。",
      "推动文心助手、百度搜索与错题本等核心教育场景的入口分发。",
    ],
    insight: [
      "AI 教育产品的留存不是由单一模型指标决定，而是“答得对、等得起、跟得上”三者共同形成的体验闭环。",
      "首轮等待决定用户是否愿意进入讲解，准确率决定是否信任，音画同步决定是否继续听。",
    ],
    decisions: [
      "先处理首轮响应与准确率这两个高折损环节，再通过音画同步评测把“可用”推向“好用”。",
      "不只在模型侧找答案：OCR 私有化、TTS 扩容、加载页跳转机制都被纳入端到端优化。",
      "通过入口原子化分发，让已经验证的能力进入真实教育场景，而不是停留在独立 Demo。",
    ],
    solution: [
      "模型择优 + Prompt 结构化优化 + Badcase 持续回流，形成准确率迭代闭环。",
      "重构加载链路并推进 OCR 私有化部署、TTS 扩容，压缩首轮等待。",
      "搭建音画同步评测体系，透传上屏信号，让板书与播报精准匹配。",
      "在文心助手、搜索与错题本等场景配置轻量入口，承接教育问题流量。",
    ],
    metrics: [
      { value: "21.2s → 3.2s", label: "首轮响应", note: "进入行业第一梯队" },
      { value: "68.6% → 89.2%", label: "解题准确率", note: "多轮模型与 Prompt 迭代" },
      { value: "5.3% → 9.7%", label: "次日留存", note: "体验优化后的真实留存变化" },
    ],
    moreMetrics: [
      { value: "70.2% → 55.6%", label: "折损率" },
      { value: "7.5 万", label: "DAU 突破" },
      { value: "+8.3 万", label: "主动搜索 PV" },
      { value: "350s+ / 4.8 轮", label: "人均时长 / 单用户对话" },
    ],
    reflection: [
      "下一步应继续分学科拆解准确率和信任问题，避免总指标掩盖薄弱题型。",
      "对音画同步建立自动化回归集，把一次性专项变成长期质量护栏。",
      "分发增长与体验指标应联动观察，避免入口扩张稀释核心用户质量。",
    ],
    accent: "blue",
    companion: "bear",
    media: [
      {
        type: "image",
        src: sitePath("/assets/hero-alt.webp"),
        alt: "柏俊男在百度 AI Day 向媒体介绍文心老师",
        caption: "百度 AI Day · 向媒体演示产品",
      },
      {
        type: "image",
        src: sitePath("/assets/baidu-booth.webp"),
        alt: "百度 AI Day 文心老师体验展台",
        caption: "文心老师线下体验展台",
      },
      {
        type: "video",
        src: sitePath("/assets/wenxin-demo.m4v"),
        poster: sitePath("/assets/baidu-booth.webp"),
        alt: "文心老师产品演示视频",
        caption: "产品演示 · 点击播放",
      },
    ],
  },
  {
    slug: "meituan-commercialization",
    company: "美团",
    team: "本地核心商业 · 商业化增值",
    role: "商业化产品经理",
    period: "2025.02—2025.06",
    title: "从 0 到 1 搭建医美厂商商品推广工具",
    oneLine: "将商品池、预算、召回、排序、计费和归因串成完整商业化系统。",
    cardBackground:
      "医美厂商有新品与品牌曝光预算，但平台广告能力主要服务门店侧，厂商预算大量流向站外。",
    cardGoal:
      "承接厂商站内投放预算，打通选品、投放与效果回收，在兼顾门店公平和用户相关性的前提下提升广告收入。",
    cardAction:
      "搭建厂商端推广计划和 SPU 商品池，解决厂商无法自主选品投放的问题；用动态预算上下界平衡头部与中尾部门店；新增溢价召回、eCPM 排序与双计费归因，保证相关商品获得流量，并让厂商、门店分别看清投放效果。",
    cardResult:
      "6 周完成 MVP 上线；上线一周后广告收入提升 14.78%，订单量提升 22.51%，ACP 提升 8.95%。",
    context:
      "医美厂商有新品与品牌曝光预算，但平台广告能力主要服务门店侧，厂商预算大量流向站外。项目需要建立厂商级商品投放能力，实现品效一体。",
    problem: [
      "厂商无法在平台自主表达选品、预算与投放目标。",
      "一款商品关联大量门店，预算既不能集中在头部门店，也不能平均分配。",
      "厂商与门店可能共同出价，召回、排序、计费和效果归因必须保持一致。",
    ],
    responsibility: [
      "设计厂商端投放 MVP，定义多选商品、关联门店与计划日预算。",
      "建立可投放 SPU 商品池、黑盒动态预算分配与上下界约束。",
      "推动新增厂商溢价召回、eCPM 排序与双计费归因。",
      "拆解 6 周里程碑，协同商业化、搜索、算法、研发、数据、设计与运营上线。",
    ],
    insight: [
      "厂商投放不是把门店广告入口复制一份，而是新增一种预算主体与效果视角。",
      "系统设计必须同时平衡预算消耗、转化效率、门店公平性和用户相关性。",
    ],
    decisions: [
      "先以开店宝 MVP 验证“选品—门店—预算”主链路，把复杂能力隐藏在系统分配中。",
      "通过预算上界抑制头部集中、下界保障中尾部门店获得基础点击量。",
      "只在商品与 query 相关时召回，避免高出价破坏用户体验；命中后再通过溢价进入排序。",
    ],
    solution: [
      "构建符合品类、品牌、上新与销售势能条件的 SPU 白名单。",
      "按门店历史消耗和竞对水平计算权重，再用矫正系数控制总预算。",
      "新增厂商溢价召回通路与排序字段，支持追踪和归因。",
      "建立厂商 + 门店共同出资时的双计费报表与消耗切分逻辑。",
    ],
    metrics: [
      { value: "+14.78%", label: "广告收入", note: "上线一周后的日均对比" },
      { value: "+22.51%", label: "订单量", note: "B 组相对 A 组" },
      { value: "+8.95%", label: "ACP", note: "广告点击均价提升" },
    ],
    moreMetrics: [
      { value: "+4.16%", label: "曝光 UV" },
      { value: "+5.35%", label: "点击 UV" },
      { value: "+16.29%", label: "CVR" },
      { value: "6 周", label: "跨团队上线周期" },
    ],
    reflection: [
      "后续可引入最高曝光比与长尾保护，降低头部厂商长期霸榜风险。",
      "商品创意仍复用门店物料，可进一步建立厂商可控创意与自动场景文案。",
      "静态商品池应升级为生命周期模型，随增长阶段动态调整投放优先级。",
    ],
    accent: "yellow",
    companion: "kangaroo",
    media: [],
  },
];

export const workBySlug = Object.fromEntries(workCases.map((item) => [item.slug, item])) as Record<
  WorkCase["slug"],
  WorkCase
>;
