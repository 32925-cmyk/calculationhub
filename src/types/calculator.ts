export type CalculatorCategory =
  | 'financial'
  | 'health'
  | 'math'
  | 'conversion'
  | 'engineering'
  | 'datetime'
  | 'everyday';

export interface CalculatorDefinition {
  id: string;
  name: string;
  category: CalculatorCategory;
  shortDesc: string;
  icon: string;
  focusKeyword: string;
  seoTitle: string;
  tags: string[];
  isFeatured?: boolean;
}

export interface SeoArticleData {
  calculatorId: string;
  focusKeyword: string;
  title: string;
  metaDescription: string;
  wordCount: number;
  keywordCount: number;
  headings: {
    h1: string;
    sections: {
      h2: string;
      subsections?: {
        h3: string;
        content: string;
      }[];
      content: string;
    }[];
  };
  workedExamples: {
    title: string;
    inputs: Record<string, string>;
    calculation: string;
    result: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface AdConfig {
  enabled: boolean;
  isDemoMode: boolean;
  publisherId: string;
  headerSlot: string;
  sidebarSlot: string;
  inContentSlot: string;
  footerSlot: string;
}

export interface CalculationHistoryItem {
  id: string;
  calculatorId: string;
  calculatorName: string;
  timestamp: number;
  inputs: Record<string, any>;
  summary: string;
}
