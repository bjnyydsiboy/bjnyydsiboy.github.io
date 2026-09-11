import { sitePath } from "@/lib/site-path";
import Image from "next/image";

type CompanionProps = {
  type: "bear" | "kangaroo";
  className?: string;
  label?: string;
};

function Bear({ label }: { label?: string }) {
  return (
    <div className="mascot-stage mascot-stage-baidu">
      <div className="mascot-aura" aria-hidden="true" />
      <Image
        className="baidu-bear-scene"
        src={sitePath("/assets/baidu-bear-scene.png")}
        alt={label ?? "驾驶飞船的百度熊"}
        width={352}
        height={260}
        sizes="(max-width: 860px) 150px, 240px"
      />
    </div>
  );
}

function Kangaroo({ label }: { label?: string }) {
  return (
    <div className="mascot-stage mascot-stage-meituan">
      <div className="mascot-aura" aria-hidden="true" />
      <Image
        className="meituan-tuantu"
        src={sitePath("/assets/meituan-tuantu-flat.png")}
        alt={label ?? "美团吉祥物袋鼠团团"}
        width={1145}
        height={1374}
        sizes="(max-width: 860px) 150px, 240px"
      />
    </div>
  );
}

export function Companion({ type, className = "", label }: CompanionProps) {
  return (
    <div className={`companion companion-${type} ${className}`.trim()}>
      {type === "bear" ? <Bear label={label} /> : null}
      {type === "kangaroo" ? <Kangaroo label={label} /> : null}
    </div>
  );
}
