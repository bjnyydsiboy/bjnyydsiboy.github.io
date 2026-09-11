import { BaiduCaseStudy } from "@/components/baidu-case-study";
import { StructuredCommerceCaseStudy } from "@/components/structured-commerce-case-study";
import { workCases, type WorkCase } from "@/data/portfolio";

export function CaseStudy({ item }: { item: WorkCase }) {
  const index = workCases.findIndex((entry) => entry.slug === item.slug);
  const nextCase = workCases[(index + 1) % workCases.length];

  if (item.slug === "baidu-wenxin") {
    return <BaiduCaseStudy item={item} nextCase={nextCase} />;
  }

  return <StructuredCommerceCaseStudy item={item} nextCase={nextCase} />;
}
