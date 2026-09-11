import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/case-study";
import { workBySlug, workCases, type WorkCase } from "@/data/portfolio";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return workCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = workBySlug[slug as WorkCase["slug"]];
  if (!item) return {};
  return {
    title: `${item.company}项目案例`,
    description: item.oneLine,
    alternates: { canonical: sitePath(`/work/${item.slug}/`) },
    openGraph: { title: `${item.company}项目案例｜柏俊男`, description: item.oneLine, url: sitePath(`/work/${item.slug}/`) },
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const item = workBySlug[slug as WorkCase["slug"]];
  if (!item) notFound();
  return <CaseStudy item={item} />;
}
