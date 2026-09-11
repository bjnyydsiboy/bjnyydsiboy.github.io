"use client";

import { Dumbbell, Layers3 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function EnergyDesk() {
  const reduce = useReducedMotion();
  const hover = reduce ? undefined : { y: -6, rotate: -1 };

  return (
    <div className="energy-desk">
      <div className="desk-topline">
        <span>PERSONAL ENERGY DESK</span>
        <span>产品之外，也保持有趣。</span>
      </div>

      <div className="tool-flow" aria-label="Vibe Coding 工作流">
        <motion.div className="tool-card codex-card" whileHover={hover}>
          <span>TOOL A</span>
          <strong>Codex</strong>
          <p>把想法快速做成可运行版本</p>
          <div className="code-lines" aria-hidden="true"><i /><i /><i /></div>
        </motion.div>
        <div className="flow-connector" aria-label="Vibe Coding 连接工作流">
          <span>Vibe Coding</span>
          <i />
        </div>
        <motion.div className="tool-card figma-card" whileHover={reduce ? undefined : { y: -6, rotate: 1 }}>
          <span>TOOL B</span>
          <strong>Figma</strong>
          <p>梳理体验、原型与表达结构</p>
          <div className="figma-shapes" aria-hidden="true"><i /><i /><i /><i /></div>
        </motion.div>
      </div>

      <div className="personality-stickers" aria-label="性格关键词">
        <span>ENFJ</span>
        <span>温柔的极度 E 人</span>
        <span>氛围发动机</span>
      </div>

      <div className="hobby-grid">
        <motion.div className="hobby-card valorant" whileHover={reduce ? undefined : { scale: 1.025 }}>
          <div className="crosshair" aria-hidden="true"><i /><i /></div>
          <strong>打瓦</strong>
          <span>VALORANT · 团队配合</span>
        </motion.div>
        <motion.div className="hobby-card boardgame" whileHover={reduce ? undefined : { scale: 1.025 }}>
          <Layers3 aria-hidden="true" />
          <strong>剧本杀 / 桌游</strong>
          <span>推理，也喜欢观察人</span>
        </motion.div>
        <motion.div className="hobby-card fitness" whileHover={reduce ? undefined : { scale: 1.025 }}>
          <Dumbbell aria-hidden="true" />
          <strong>健身</strong>
          <span>稳定的精力管理</span>
        </motion.div>
        <motion.div className="hobby-card badminton" whileHover={reduce ? undefined : { scale: 1.025 }}>
          <div className="shuttle" aria-hidden="true"><i /><i /></div>
          <strong>羽毛球</strong>
          <span>轻快，保持在场</span>
        </motion.div>
      </div>
    </div>
  );
}
