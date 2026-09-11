import { sitePath } from "@/lib/site-path";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "柏俊男｜AI 策略产品经理",
    template: "%s｜柏俊男",
  },
  description:
    "柏俊男的产品作品集：从 AI 效果、C 端转化到商业化系统，看问题如何被拆清、推进并验证。",
  keywords: ["柏俊男", "AI 策略产品经理", "AI 产品", "产品作品集"],
  authors: [{ name: "柏俊男" }],
  alternates: { canonical: siteUrl.toString() },
  icons: { icon: sitePath("/icon.svg") },
  openGraph: {
    title: "柏俊男｜AI 策略产品经理",
    description: "把复杂问题，做成可落地结果。",
    type: "website",
    locale: "zh_CN",
    url: siteUrl.toString(),
  },
  twitter: {
    card: "summary_large_image",
    title: "柏俊男｜AI 策略产品经理",
    description: "把复杂问题，做成可落地结果。",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff7fb",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
