import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Download, Gauge } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { WorkCase } from "@/data/portfolio";

type BaiduCaseStudyProps = { item: WorkCase; nextCase: WorkCase };

function SectionTitle({ label, title, note }: { label: string; title: string; note?: string }) {
  const [englishLabel, chineseLabel] = label.split(" / ");
  return (
    <Reveal className="baidu-section-title">
      <div className="baidu-section-marker"><span>{englishLabel}</span><strong>{chineseLabel ?? englishLabel}</strong></div>
      <h2>{title}</h2>
      {note ? <p>{note}</p> : null}
    </Reveal>
  );
}

function CaseDetails({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="baidu-details">
      <summary><span>{title}</span><ChevronDown size={18} aria-hidden="true" /></summary>
      <div className="baidu-details-content">{children}</div>
    </details>
  );
}

function EvidenceFigure({ src, alt, caption, width, height }: {
  src: string; alt: string; caption: string; width: number; height: number;
}) {
  return (
    <figure className="baidu-source-figure">
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`查看${caption}原图（新标签页）`}>
        <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 760px) 90vw, 560px" unoptimized />
      </a>
      <figcaption><span>{caption}</span><a href={src} target="_blank" rel="noopener noreferrer" aria-label={`查看${caption}原图（新标签页）`}>查看原图 <ArrowRight size={14} aria-hidden="true" /></a></figcaption>
    </figure>
  );
}

function CompareRow({ label, before, after, direction }: {
  label: string; before: string; after: string; direction: string;
}) {
  return (
    <div className="baidu-compare-row">
      <div className="baidu-compare-heading"><strong>{label}</strong><span>{direction}</span></div>
      <div className="baidu-number-pair">
        <div><span>优化前</span><strong>{before}</strong></div>
        <ArrowRight size={20} aria-hidden="true" />
        <div><span>优化后</span><strong>{after}</strong></div>
      </div>
    </div>
  );
}

export function BaiduCaseStudy({ item, nextCase }: BaiduCaseStudyProps) {
  return (
    <main className="case-page case-blue baidu-case-page">
      <header className="case-nav">
        {/* Native navigation avoids the vinext client-router failure in production. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/#experience"><ArrowLeft size={17} aria-hidden="true" /> 返回工作经历</a>
        <span>BJ / BAIDU CASE</span>
        <a href="/docs/resume.pdf" download="柏俊男-产品经理简历.pdf">简历 PDF <Download size={15} aria-hidden="true" /></a>
      </header>

      <section className="case-hero baidu-case-hero" id="case-overview">
        <div className="case-hero-copy">
          <p>{item.company} · {item.role}</p>
          <h1>文心老师：<br />AI 讲题体验优化</h1>
          <span>一款支持在线板书、分层讲解与实时追问的 AI 讲题产品。我围绕解题质量、首轮等待与音画同步，推进评估机制和产品链路优化。</span>
          <div className="case-meta-line"><strong>{item.team}</strong><strong>{item.period}</strong></div>
          <div className="baidu-case-entry"><a href="#case-actions">看核心动作 <ArrowRight size={17} aria-hidden="true" /></a><a href="#case-product">看产品演示</a></div>
        </div>
        <aside className="baidu-project-brief" aria-label="项目目标与我的职责">
          <span>项目目标与我的职责</span>
          <h2>先缩短等待，再提升讲解可信度。</h2>
          <dl>
            <div><dt>定位问题</dt><dd>结合漏斗、用户反馈与竞品评测，确定等待、准确率和音画同步的优化优先级。</dd></div>
            <div><dt>组织评估</dt><dd>建立评分标准，组织教研盲测与复核，用三类样本验证策略收益。</dd></div>
            <div><dt>推进落地</dt><dd>协同模型、OCR、TTS 与前后端团队改造链路，持续回归并验收。</dd></div>
          </dl>
        </aside>
      </section>

      <nav className="baidu-chapter-nav" aria-label="案例章节">
        <div><span>本页内容</span><a href="#case-background">背景</a><a href="#case-actions">动作</a><a href="#case-results">结果</a><a href="#case-product">演示</a><a href="#case-field">现场</a></div>
      </nav>

      <section className="baidu-background-section" id="case-background">
        <SectionTitle label="BACKGROUND / 问题判断" title="等待、讲解错误与播报异常，是主要体验问题。" note="留存与渗透率未达预期，我结合页面漏斗、真实反馈和竞品体验定位问题。" />
        <div className="baidu-diagnosis-grid">
          <Reveal className="baidu-diagnosis-card">
            <div className="baidu-diagnosis-index"><span>01</span><strong>用户在等待中流失</strong></div>
            <p>加载页到讲解页的转化率仅 <strong>27.8%</strong>；等待超过 10 秒后进入持续流失区间，优先处理进入讲解前的耗时。</p>
            <EvidenceFigure src="/assets/baidu-waiting-curve.png" alt="等待时长与转化率关系曲线" caption="等待时长与转化率" width={1024} height={804} />
          </Reveal>
          <Reveal className="baidu-diagnosis-card" delay={.05}>
            <div className="baidu-diagnosis-index"><span>02</span><strong>讲解质量影响体验</strong></div>
            <p>汇总 <strong>25,509</strong> 条反馈与 <strong>455</strong> 条手写评价，集中问题是加载慢、答案与讲解错误、语音不播放。</p>
            <EvidenceFigure src="/assets/baidu-user-feedback.png" alt="文心老师用户评价分类材料" caption="用户反馈分类" width={1656} height={842} />
          </Reveal>
          <Reveal className="baidu-diagnosis-card baidu-competitor-card" delay={.1}>
            <div className="baidu-diagnosis-index"><span>03</span><strong>同题表现存在差距</strong></div>
            <p>同题录屏评测中，文心老师的等待时长和准确率均落后于豆包老师，两项指标纳入优先优化范围。</p>
            <div className="baidu-competitor-table">
              <div><span>指标</span><strong>文心老师</strong><strong>豆包老师</strong></div>
              <div><span>耗时</span><strong>21.2s</strong><em>10.1s</em></div>
              <div><span>同题准确率</span><strong>62.7%</strong><em>89.5%</em></div>
            </div>
            <small>同题竞品样本与内部端到端固定评测集口径不同；内部准确率基线为 68.6%。</small>
          </Reveal>
        </div>
      </section>

      <section className="baidu-actions-section" id="case-actions">
        <SectionTitle label="ACTIONS / 核心动作" title="建立可信评估，推进准确率与耗时优化。" />
        <Reveal className="baidu-action baidu-action-compact baidu-evaluation-action">
          <span>动作 01 · 评估机制</span>
          <h3>教研老师背靠背盲测，第三位老师复核。</h3>
          <p>同一道题由多位教研老师按统一标准独立提交评分、扣分项与判定依据，互不查看对方结果。第三位老师结合标准答案和讲解录屏复核分歧，形成最终结论。</p>
          <div className="baidu-evaluation-review">
            <dl aria-label="三类评估样本集的分工">
              <div><dt>固定样本集</dt><dd>保持基准题目与评分口径一致，对比各轮版本收益。</dd></div>
              <div><dt>回归样本集</dt><dd>复测历史低分案例，检查问题修复、复发与能力退化。</dd></div>
              <div><dt>扩大样本集</dt><dd>补充更多学科、题型和难度的真实新题，检验新场景表现。</dd></div>
            </dl>
            <p>三类样本分别统计，结合老师间的评分一致性，交叉判断收益是否稳定，提高优化结论的可信度。</p>
          </div>
          <CaseDetails title="查看评分标准与评估材料">
            <div className="baidu-evaluation-materials">
              <div className="baidu-action-copy">
                <ul>
                  <li>选取 100 道覆盖各学科、各题型的真实拍搜问题，建立初始固定样本集。</li>
                  <li>补齐画图能力、音画同步等维度，记录题目、标准答案、录屏、设备版本与评分依据。</li>
                  <li>整理解法超纲、推演不合理、过程缺失等典型问题，明确扣分条件，用案例校准判分尺度。</li>
                </ul>
              </div>
              <EvidenceFigure src="/assets/baidu-evaluation-rubric.png" alt="评分标准节选：解法超纲、推演不合理、解法与题干要求不符、只有答案没有过程等扣分项及案例说明" caption="评分标准与判分示例" width={622} height={284} />
            </div>
          </CaseDetails>
        </Reveal>
        <div className="baidu-action-pair">
          <Reveal className="baidu-action baidu-action-compact">
            <span>动作 02 · 准确率优化</span>
            <h3>按错误归因修复，按任务选择模型。</h3>
            <p>将低分案例拆成答案推理、板书渲染和语音播报问题，推动策略与 Prompt 优化。题干复述用轻量模型提速，解题推理用强模型保证质量，追问单独承接。</p>
            <dl className="baidu-model-routing" aria-label="模型任务分工">
              <div><dt>题干复述</dt><dd>豆包 1.6 Flash</dd></div>
              <div><dt>解题推理</dt><dd>豆包 2.0 Pro</dd></div>
              <div><dt>用户追问</dt><dd>豆包 1.6 Pro</dd></div>
            </dl>
            <p>识别链路采用 OCR 双路并行与 PaddleOCR 私有化部署，OCR 可用率达到 99.99%。</p>
            <CaseDetails title="查看模型比较与 OCR 策略">
              <dl className="baidu-action-detail-list">
                <div><dt>拆解低分案例</dt><dd>针对评分低于 2 分的 Badcase，归类答案错误、TTS（语音合成）和板书渲染问题，推动对应策略与 Prompt 优化，再逐轮回归验证。</dd></div>
                <div><dt>比较模型取舍</dt><dd>横向评测 Gemini 3.1 Pro 及豆包 2.0、1.6 系列模型，比较解题效果、响应速度与指令遵循能力，据此确定复述、推理与追问的模型分工。</dd></div>
                <div><dt>提高识别可用性</dt><dd>针对 OCR（文字识别）错误，推动百度云与火山双路并行、优先返回可用结果，并进行 PaddleOCR 独立私有化部署。</dd></div>
              </dl>
            </CaseDetails>
            <div className="baidu-action-outcome">
              <span>阶段验证 · 5 轮迭代</span>
              <strong>62.7% → 83.5% <small>提升 20.8 个百分点</small></strong>
              <p>固定样本集跟踪策略收益。针对剩余的音画不同步与模型能力问题，我引入更难、更贴近真实场景的扩大样本集，准确率为 60%，据此识别能力边界与下一阶段重点。</p>
            </div>
          </Reveal>
          <Reveal className="baidu-action baidu-action-compact baidu-action-latency">
            <span>动作 03 · 耗时优化</span>
            <h3>统一计时口径，缩短模型、语音与加载等待。</h3>
            <p>复核录屏发现计时起止点不一致，我统一以拍完题发起请求为起点，以“你好呀同学”的首句语音开始播放为终点，再定位链路瓶颈。</p>
            <dl className="baidu-action-detail-list">
              <div><dt>模型与语音服务</dt><dd>结合模型择优与任务分工，推动 TTS 扩容、购买 TPM（每分钟 Token 配额）保障包，减少服务等待。</dd></div>
              <div><dt>加载链路</dt><dd>前置加载页跳转至对话页的时机，将加载与预渲染由串行改为并行，减少进入讲解前的阻塞。</dd></div>
            </dl>
            <CaseDetails title="查看异常复测与逐轮耗时">
              <p>对超过 30 秒的案例重新录测，排查办公网络干扰，再开展链路分析，避免将测量环境波动误判为产品耗时。</p>
              <ol className="baidu-latency-progress" aria-label="各轮耗时记录，单位秒">
                {["21.2", "19.62", "17", "15.6", "8.6", "7.3"].map((value, index) => <li key={value}><span>{index === 0 ? "基线" : `迭代 ${index}`}</span><strong>{value}<small> 秒</small></strong></li>)}
              </ol>
            </CaseDetails>
            <div className="baidu-action-outcome">
              <span>阶段验证 · 首轮等待</span>
              <strong>21.2 秒 → 7.3 秒 <small>同口径持续验收</small></strong>
              <p>模型、语音服务与加载链路协同优化后，同阶段加载页折损率由 72.2% 降至 60.7%，反映多项策略落地后的综合表现。</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="baidu-results-section" id="case-results">
        <SectionTitle label="RESULTS / 项目结果" title="响应、准确率与次日留存的前后变化。" />
        <div className="baidu-compare-board">
          <CompareRow label="首轮响应" before="21.2s" after="3.2s" direction="耗时下降 84.9%" />
          <CompareRow label="解题准确率" before="68.6%" after="89.2%" direction="提升 20.6 个百分点" />
          <CompareRow label="次日留存" before="5.3%" after="9.7%" direction="相对提升 83%" />
        </div>
        <div className="baidu-result-summary">
          <div><Gauge size={20} aria-hidden="true" /><span>折损率</span><strong>70.2% → 55.6%</strong></div>
          <div><CheckCircle2 size={20} aria-hidden="true" /><span>DAU</span><strong>突破 7.5 万</strong></div>
          <div><CheckCircle2 size={20} aria-hidden="true" /><span>主动搜索 PV</span><strong>增加 8.3 万</strong></div>
          <div><CheckCircle2 size={20} aria-hidden="true" /><span>使用深度</span><strong>350s+ / 4.8 轮</strong></div>
        </div>
      </section>

      <section className="baidu-product-section" id="case-product">
        <SectionTitle label="PRODUCT / 产品演示" title="看一道题如何讲解，以及如何继续追问。" />
        <Reveal className="baidu-product-lead">
          <div className="baidu-product-video">
            <video controls preload="none" poster="/assets/wenxin-demo-poster.svg" aria-label="文心老师产品演示视频" playsInline>
              <source src="/assets/wenxin-demo.m4v" type="video/mp4" />
              你的浏览器暂不支持视频播放。
            </video>
          </div>
          <div className="baidu-product-copy">
            <ul>
              <li><strong>在线板书</strong><span>逐步展开推演过程，标记关键步骤</span></li>
              <li><strong>分层讲解</strong><span>按知识点、公式与解题步骤组织内容</span></li>
              <li><strong>互动问答</strong><span>学生可基于当前题目继续追问</span></li>
            </ul>
          </div>
        </Reveal>
        <CaseDetails title="查看板书、分层讲解与追问界面">
          <div className="baidu-product-screens">
            {[
              { src: "/assets/baidu-product-board.png", label: "在线板书", alt: "文心老师在线板书界面", width: 904, height: 2192 },
              { src: "/assets/baidu-product-knowledge.png", label: "分层讲解", alt: "文心老师分层讲解界面", width: 904, height: 2192 },
              { src: "/assets/baidu-product-dialogue.png", label: "互动追问", alt: "文心老师互动追问界面", width: 1290, height: 2600 },
            ].map((screen) => <EvidenceFigure key={screen.src} src={screen.src} alt={screen.alt} caption={screen.label} width={screen.width} height={screen.height} />)}
          </div>
        </CaseDetails>
      </section>

      <section className="baidu-field-section" id="case-field">
        <SectionTitle label="FIELD / 现场交流" title="在百度 AI Day 向媒体演示产品。" />
        <div className="baidu-field-grid baidu-field-gallery">
          <Reveal className="baidu-field-card"><div><Image src="/assets/hero-alt.webp" alt="柏俊男在百度 AI Day 向媒体演示文心老师" fill sizes="(max-width: 760px) 90vw, 58vw" /></div><p>现场演示 · 介绍讲题流程，并回应追问</p></Reveal>
          <Reveal className="baidu-field-card" delay={.06}><div><Image src="/assets/baidu-booth.webp" alt="百度 AI Day 文心老师线下体验展台" fill sizes="(max-width: 760px) 90vw, 38vw" /></div><p>体验展台 · 展示板书、讲解与追问能力</p></Reveal>
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
