"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Download,
  Menu,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";
import { workCases, type WorkCase } from "@/data/portfolio";
import { Companion } from "@/components/companions";
import { ContactCard } from "@/components/contact-card";
import { EnergyDesk } from "@/components/energy-desk";
import { Reveal } from "@/components/reveal";

const navItems = [
  { id: "about", label: "关于我" },
  { id: "experience", label: "工作经历" },
  { id: "education", label: "教育背景" },
  { id: "skills", label: "技能与爱好" },
  { id: "contact", label: "联系我" },
] as const;

const companyLogos = {
  "baidu-wenxin": { src: "/assets/logo-baidu.svg", alt: "百度 Logo" },
  "douyin-live": { src: "/assets/logo-douyin.svg", alt: "抖音 Logo" },
  "meituan-commercialization": { src: "/assets/logo-meituan.svg", alt: "美团 Logo" },
} as const;

function SectionHeading({
  eyebrow,
  title,
  note,
  id,
  className = "",
}: {
  eyebrow: string;
  title: string;
  note?: string;
  id?: string;
  className?: string;
}) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      <span>{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {note ? <p>{note}</p> : null}
    </div>
  );
}

function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 1000 : 170,
    damping: reduceMotion ? 100 : 32,
    mass: 0.22,
  });

  return (
    <div className="reading-progress" aria-hidden="true">
      <motion.span style={{ scaleX }} />
    </div>
  );
}

const internshipTags: Record<WorkCase["slug"], string[]> = {
  "baidu-wenxin": ["AI 讲题产品", "评估体系", "体验优化"],
  "douyin-live": ["本地生活直播", "C 端转化", "交易链路"],
  "meituan-commercialization": ["医美商业化", "0—1 产品", "广告系统"],
};

function InternshipOverview() {
  return (
    <div className="internship-overview" aria-label="实习总览">
      <div className="internship-overview-head">
        <span>INTERNSHIP OVERVIEW / 实习总览</span>
        <p>从行业研究到产品实习，我逐步确认自己更适合快速迭代、持续验证的工作方式。</p>
      </div>

      <div className="internship-timeline">
        {workCases.map((item) => (
          <a className={`internship-row internship-row-${item.accent}`} href={`#case-${item.slug}`} key={item.slug}>
            <span className={`internship-logo company-logo-${item.slug}`}>
              <Image src={companyLogos[item.slug].src} alt="" width={34} height={34} />
            </span>
            <span className="internship-identity">
              <strong>{item.company}</strong>
              <small>{item.team} · {item.role}</small>
            </span>
            <span className="internship-tags" aria-label={`${item.company}经历关键词`}>
              {internshipTags[item.slug].map((tag) => <i key={tag}>{tag}</i>)}
            </span>
            <span className="internship-row-meta">
              <time>{item.period}</time>
              <ArrowUpRight className="internship-arrow" size={18} aria-hidden="true" />
            </span>
          </a>
        ))}

        <div className="internship-row internship-pivot">
          <span className="pivot-mark" aria-hidden="true">转</span>
          <span className="internship-identity">
            <strong>券商行业研究</strong>
            <small>本科阶段 · 一段行业研究经历</small>
          </span>
          <p>
            金融行业的长周期反馈与我的性格并不匹配。我更希望在快速迭代中验证判断、获得自我实现感，因此主动补齐产品方法、数据分析与原型能力，转向互联网产品。
          </p>
          <span className="pivot-label">职业方向校准</span>
        </div>
      </div>
    </div>
  );
}

function WorkCard({ item, featured = false }: { item: WorkCase; featured?: boolean }) {
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const steps = [
    ["背景", item.cardBackground],
    ["目标", item.cardGoal],
    ["动作", item.cardAction],
    ["结果", item.cardResult],
  ];

  return (
    <motion.article
      id={`case-${item.slug}`}
      className={`work-card work-${item.accent} ${featured ? "work-card-featured" : ""}`}
      initial={false}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="work-card-copy">
        <div className="work-meta">
          <span className={`company-logo-slot company-logo-${item.slug}`} data-company-logo-slot={item.company}>
            <Image
              src={companyLogos[item.slug].src}
              alt={companyLogos[item.slug].alt}
              width={36}
              height={36}
            />
          </span>
          <span>{item.period}</span>
        </div>
        <p className="work-team">{item.team} · {item.role}</p>
        <h3>{item.title}</h3>

        <button
          className="work-expand"
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "收起项目过程" : "展开项目过程"}
          <ChevronDown size={17} aria-hidden="true" />
        </button>

        <div className={`work-process ${expanded ? "is-expanded" : ""}`}>
          {steps.map(([label, value], index) => (
            <div key={label}>
              <span>{String(index + 1).padStart(2, "0")} · {label}</span>
              <p>{value}</p>
            </div>
          ))}
        </div>

        <a className="case-link" href={`/work/${item.slug}`}>
          查看完整项目 <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      <div className="work-card-companion">
        <Companion
          type={item.companion}
          label={item.companion === "bear" ? "百度熊" : item.companion === "note" ? "抖音项目音符陪伴角色" : "美团吉祥物袋鼠团团"}
        />
        <span>{item.companion === "bear" ? "把体验问题拉回同一套指标" : item.companion === "note" ? "少一次跳转，多一分确定" : "6 周上线 MVP"}</span>
      </div>
    </motion.article>
  );
}

export function PortfolioHome() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const observers = navItems.map(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return undefined;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-28% 0px -58% 0px", threshold: 0.01 },
      );
      observer.observe(element);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  function goTo(id: string) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <main className="home-scroll">
      <ScrollProgress />
      <a className="skip-link" href="#about">跳到主要内容</a>

      <header className="floating-nav-wrap">
        <nav className="floating-nav" aria-label="页面导航">
          <button className="brand-mark" type="button" onClick={() => goTo("about")} aria-label="返回关于我">
            <span>B</span>
            <strong>BAI JUNNAN</strong>
          </button>
          <div className="nav-tabs">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => goTo(item.id)} className={activeSection === item.id ? "active" : ""}>
                {activeSection === item.id ? <motion.span className="active-pill" layoutId="active-nav" /> : null}
                <span className="nav-label">{item.label}</span>
              </button>
            ))}
          </div>
          <a className="resume-nav" href="/docs/resume.pdf" download="柏俊男-产品经理简历.pdf">
            简历 PDF <Download size={15} aria-hidden="true" />
          </a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "关闭导航菜单" : "打开导航菜单"}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div className="mobile-menu" initial={false} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
              {navItems.map((item) => (
                <button key={item.id} type="button" onClick={() => goTo(item.id)} className={activeSection === item.id ? "active" : ""}>
                  {item.label}
                </button>
              ))}
              <a href="/docs/resume.pdf" download="柏俊男-产品经理简历.pdf">下载简历 PDF</a>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <section className="hero-section snap-page" id="about" aria-labelledby="hero-title">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-aura hero-aura-one" aria-hidden="true" />
        <div className="hero-aura hero-aura-two" aria-hidden="true" />
        <div className="hero-copy">
          <h1 id="hero-title">
            <span className="hero-name-line">
              <span className="hero-greeting">Hi,</span>
              <span className="hero-name-copy">我是柏俊男。</span>
            </span>
            <em>
              <span className="hero-persona-line">
                <span className="hero-persona-copy">对人保持敏感，</span>
                <span className="hero-persona-copy">对新鲜事保持好奇。</span>
              </span>
            </em>
          </h1>
          <p className="hero-role">用产品思维把复杂问题拆解成可落地结果，关注模型效果、用户体验和渗透留存。</p>
          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={() => goTo("experience")}>
              先看代表项目 <ArrowRight size={18} aria-hidden="true" />
            </button>
            <a className="secondary-button" href="/docs/resume.pdf" download="柏俊男-产品经理简历.pdf">
              下载简历 <Download size={17} aria-hidden="true" />
            </a>
            <button className="text-button" type="button" onClick={() => goTo("contact")}>联系我</button>
          </div>
        </div>

        <motion.div className="hero-visual" initial={false} whileHover={reduceMotion ? undefined : { y: -4, rotate: -0.25 }}>
          <div className="hero-photo-frame">
            <Image src="/assets/ruc-night-portrait.jpg" alt="柏俊男在中国人民大学校园留影" fill priority sizes="(max-width: 760px) 94vw, 48vw" />
            <div className="photo-wash" aria-hidden="true" />
          </div>
          <div className="photo-index" aria-hidden="true"><strong>CAMPUS NOTE</strong><small>RUC · BEIJING</small></div>
          <aside className="photo-note">
            <strong>百度 · 字节 · 美团</strong>
            <p>金融 × 产品 × AI</p>
          </aside>
          <div className="photo-stamp">校园一刻</div>
        </motion.div>

        <button className="scroll-cue" type="button" onClick={() => goTo("experience")} aria-label="继续浏览工作经历">
          <span>从代表项目开始</span>
          <ArrowDown size={17} aria-hidden="true" />
        </button>
      </section>

      <section className="section experience-section" id="experience" aria-labelledby="experience-title">
        <h2 className="sr-only" id="experience-title">工作经历</h2>
        <Reveal className="experience-panel experience-overview-page"><InternshipOverview /></Reveal>
        <div className="experience-stack">
          {workCases.map((item, index) => (
            <Reveal className="experience-panel experience-featured-page" key={item.slug}>
              <WorkCard item={item} featured={index === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section education-section soft-snap" id="education" aria-labelledby="education-title">
        <Reveal>
          <SectionHeading id="education-title" eyebrow="LEARNING / 教育背景" title="金融，是我理解数据与用户的起点。" />
        </Reveal>
        <Reveal className="education-paper">
          <div className="campus-image">
            <Image src="/assets/ruc-campus.webp" alt="中国人民大学校园明德楼" fill sizes="(max-width: 760px) 92vw, 45vw" />
          </div>
          <div className="education-copy">
            <span>RENMIN UNIVERSITY OF CHINA</span>
            <h3>中国人民大学</h3>
            <p>金融学硕士</p>
            <strong>2025.09—2027.06</strong>
            <div className="education-note">
              <i aria-hidden="true" />
              金融给我带来了对数据和用户的敏感度，也给了我向其他行业迁移的底层逻辑。
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section skills-section soft-snap" id="skills" aria-labelledby="skills-title">
        <Reveal>
          <SectionHeading id="skills-title" className="skills-heading" eyebrow="ENERGY DESK / 技能与爱好" title="工作之外，我靠这些事回血。" note="Codex 和 Figma 用来做东西；运动、游戏和朋友让我保持在场。" />
        </Reveal>
        <Reveal><EnergyDesk /></Reveal>
        <div className="skill-ribbon" aria-label="产品能力">
          {["AI 策略", "需求拆解", "数据分析", "原型验证", "跨团队推进", "商业化系统"].map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="section contact-section soft-snap" id="contact" aria-labelledby="contact-title">
        <Reveal>
          <SectionHeading id="contact-title" eyebrow="CONTACT / 联系我" title="想继续聊，就从一个项目开始。" note="如果你对某个判断、指标或推进过程好奇，欢迎直接联系我。" />
        </Reveal>
        <Reveal><ContactCard /></Reveal>
        <footer>
          <span>柏俊男 · AI 策略产品经理</span>
          <span>内容来自真实经历 · 2026</span>
          <button type="button" onClick={() => goTo("about")}>回到顶部 ↑</button>
        </footer>
      </section>
    </main>
  );
}
