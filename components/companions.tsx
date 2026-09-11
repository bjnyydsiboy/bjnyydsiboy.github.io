import Image from "next/image";

type CompanionProps = {
  type: "bear" | "note" | "kangaroo";
  className?: string;
  label?: string;
};

function Bear({ label }: { label?: string }) {
  return (
    <div className="mascot-stage mascot-stage-baidu">
      <div className="mascot-aura" aria-hidden="true" />
      <Image
        className="baidu-bear-scene"
        src="/assets/baidu-bear-scene.png"
        alt={label ?? "驾驶飞船的百度熊"}
        width={352}
        height={260}
        sizes="(max-width: 860px) 150px, 240px"
      />
    </div>
  );
}

function NoteSprite({ label }: { label?: string }) {
  return (
    <svg viewBox="0 0 220 220" role="img" aria-label={label ?? "原创音符精灵引导查看项目"}>
      <g opacity=".78" transform="translate(-8 5)" fill="#43e3db">
        <path d="M95 38c28 10 51 13 70 11v73c0 31-20 55-48 55-24 0-42-15-42-35 0-19 16-34 37-34 8 0 15 2 21 6V74c-14-2-26-5-38-10v-26Z" />
      </g>
      <g opacity=".68" transform="translate(9 -3)" fill="#ff5b91">
        <path d="M95 38c28 10 51 13 70 11v73c0 31-20 55-48 55-24 0-42-15-42-35 0-19 16-34 37-34 8 0 15 2 21 6V74c-14-2-26-5-38-10v-26Z" />
      </g>
      <g className="companion-body">
        <path d="M95 38c28 10 51 13 70 11v73c0 31-20 55-48 55-24 0-42-15-42-35 0-19 16-34 37-34 8 0 15 2 21 6V74c-14-2-26-5-38-10v-26Z" fill="#242126" stroke="#0d0c0f" strokeWidth="4" />
        <circle cx="103" cy="140" r="5" fill="#fff" />
        <circle cx="130" cy="140" r="5" fill="#fff" />
        <path d="M110 153c5 4 11 4 16 0" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      </g>
      <path className="companion-arrow" d="M52 83c-21 7-29 23-27 41m0 0-9-10m9 10 12-6" fill="none" stroke="#242126" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Kangaroo({ label }: { label?: string }) {
  return (
    <div className="mascot-stage mascot-stage-meituan">
      <div className="mascot-aura" aria-hidden="true" />
      <Image
        className="meituan-tuantu"
        src="/assets/meituan-tuantu-flat.png"
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
      {type === "note" ? <NoteSprite label={label} /> : null}
      {type === "kangaroo" ? <Kangaroo label={label} /> : null}
    </div>
  );
}
