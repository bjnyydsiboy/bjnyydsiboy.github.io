export type Metric = {
  value: string;
  label: string;
  note?: string;
};

export type WorkCase = {
  slug: "baidu-wenxin" | "douyin-live" | "meituan-commercialization";
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
  accent: "blue" | "ink" | "yellow";
  companion: "bear" | "note" | "kangaroo";
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
        src: "/assets/hero-alt.webp",
        alt: "柏俊男在百度 AI Day 向媒体介绍文心老师",
        caption: "百度 AI Day · 向媒体演示产品",
      },
      {
        type: "image",
        src: "/assets/baidu-booth.webp",
        alt: "百度 AI Day 文心老师体验展台",
        caption: "文心老师线下体验展台",
      },
      {
        type: "video",
        src: "/assets/wenxin-demo.m4v",
        poster: "/assets/baidu-booth.webp",
        alt: "文心老师产品演示视频",
        caption: "产品演示 · 点击播放",
      },
    ],
  },
  {
    slug: "douyin-live",
    company: "字节跳动",
    team: "抖音直播 · 用户产品组",
    role: "C 端产品经理",
    period: "2025.07—2025.10",
    title: "抖音本地生活直播：从精准导流到商详下单的交易链路优化",
    oneLine: "重构直播导流、缩短关键链路并升级商详，让本地生活交易更精准、更高效。",
    cardBackground: "抖音直播页面存在用户决策成本高、信息获取低效、库存及时空敏感等问题；数据排查发现导流、商详加载与下单支付链路均有明显转化短板。",
    cardGoal: "降低用户的决策与页面调用成本，提升精准用户进入、商详承接和下单支付效率，最终扩大直播交易规模。",
    cardAction: "重做导流页，前置距离、价格和库存等信息，减少无效进房；用半屏商详替代二级跳转，降低调用失败并保留直播上下文；按无图、有图、多图拆分商详，突出优惠、服务和购买入口，降低选择与下单成本。",
    cardResult: "导流页点击率由 18.92% 提升至 27.99%，商详至下单转化由 21.37% 提升至 29.71%，直播间 GMV 增长 4.12%。",
    context: "本地生活直播的购买决策受距离、库存、时间与服务非标影响。原有导流和商详承载不足，用户需要反复探索，核心漏斗出现明显断点。",
    problem: [
      "导流信息不精准，用户进直播间后才发现距离、库存或场次不合适。",
      "二级页面调用成本高，加载失败与链路长度共同放大跳出。",
      "商详结构未适配不同商品形态，优惠、服务保障和操作入口不够突出。",
    ],
    responsibility: [
      "排查核心漏斗与用户链路，确定导流页、链路缩短和商详页三个抓手。",
      "设计导流信息结构与赛马机制，前置 LBS、价格、销量、库存等决策信息。",
      "设计半屏弹窗链路和三类商详形态，推动埋点、A/B 测试与全量。",
      "协同算法、前后端、设计与运营完成方案评审和效果回收。",
    ],
    insight: [
      "本地生活直播的关键不是制造更多点击，而是让合适的人在点击前获得足够信息。",
      "链路每多一次跳转，既增加操作成本，也叠加一次加载与返回失败风险。",
    ],
    decisions: [
      "下线传统主播预览式导流，把关键决策信息前置，用标签赛马筛出更有吸引力的内容。",
      "将二级商详改为半屏弹窗，保留直播上下文并降低页面调用成本。",
      "按无图、有图、多图拆分商详形态，并通过连续 20+ 天多组 A/B 测试选择方案。",
    ],
    solution: [
      "新增精准导流页，展示定位、折扣、销量、库存与直播状态。",
      "用半屏商详替代二级跳转，补足回流入口并强化信息透出。",
      "重组价格优惠、服务保障和预约信息，固定关键操作按钮。",
      "建立新增埋点与 20/20 切量实验，持续校验漏斗变化。",
    ],
    metrics: [
      { value: "18.92% → 27.99%", label: "导流页点击率", note: "精准信息前置" },
      { value: "21.37% → 29.71%", label: "商详至下单转化", note: "结构与操作路径优化" },
      { value: "+4.12%", label: "直播间 GMV", note: "由项目驱动的交易增长" },
    ],
    moreMetrics: [
      { value: "77.13% → 59.04%", label: "商详页跳出率" },
      { value: "35.92% → 40.12%", label: "小房车至商详转化" },
      { value: "12.92% → 15.78%", label: "商详至支付转化" },
      { value: "20.43% → 23.78%", label: "直播间整体点击率" },
    ],
    reflection: [
      "商详停留时间下降并不天然代表体验变差，需要结合转化与任务完成效率解释。",
      "后续可细分商品类型、距离与库存状态，观察哪些信息对不同用户最有帮助。",
      "A/B 实验之外，还需跟踪退货与投诉等长期质量指标，避免只优化前链路。",
    ],
    accent: "ink",
    companion: "note",
    media: [
      { type: "image", src: "/assets/douyin-guide-new.png", alt: "改版后前置交易信息的精准导流卡片", caption: "精准导流：点击前完成距离、价格与库存判断" },
      { type: "image", src: "/assets/douyin-half-screen.png", alt: "直播间内打开商品列表的半屏承接样式", caption: "链路缩短：在直播上下文内完成商品浏览" },
      { type: "image", src: "/assets/douyin-detail-image.png", alt: "图文型商品详情页面", caption: "商详分型：按商品内容重新组织信息" },
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
