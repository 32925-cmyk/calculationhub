import { CalculatorCategory } from '../types/calculator';

export interface CategoryInfo {
  id: CalculatorCategory;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  color: string;
  count: number;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'financial',
    name: 'Financial & Loans',
    tagline: 'Mortgages, Investments, Taxes & ROI',
    description: 'Accurate financial models for home loans, compound interest, personal debts, auto financing, retirement planning, and business margins.',
    iconName: 'Landmark',
    color: 'from-blue-600 to-indigo-700',
    count: 10,
  },
  {
    id: 'health',
    name: 'Health & Fitness',
    tagline: 'Body Metrics, Calories & Wellness',
    description: 'Evidence-based tools for calculating Body Mass Index (BMI), Basal Metabolic Rate (BMR), Total Daily Energy Expenditure (TDEE), and heart rate zones.',
    iconName: 'HeartPulse',
    color: 'from-emerald-600 to-teal-700',
    count: 8,
  },
  {
    id: 'math',
    name: 'Math & Algebra',
    tagline: 'Percentages, Equations & Statistics',
    description: 'Scientific and algebraic solvers for percentage change, quadratic roots, fraction operations, GCD/LCM, standard deviation, and exponents.',
    iconName: 'Binary',
    color: 'from-purple-600 to-violet-700',
    count: 8,
  },
  {
    id: 'conversion',
    name: 'Unit Conversion',
    tagline: 'Metric, Imperial & International Units',
    description: 'Instant conversion utilities for length, mass, temperature, area, speed, liquid volume, and digital data storage.',
    iconName: 'ArrowLeftRight',
    color: 'from-amber-500 to-orange-600',
    count: 7,
  },
  {
    id: 'engineering',
    name: 'Engineering & Construction',
    tagline: 'Power, Materials & Physics',
    description: 'Practical formulas for concrete volume, Ohm’s law electrical calculations, home electricity costs, paint coverage, and mechanical velocity.',
    iconName: 'Hammer',
    color: 'from-rose-600 to-red-700',
    count: 6,
  },
  {
    id: 'datetime',
    name: 'Date & Time',
    tagline: 'Chronology, Age & Time Spans',
    description: 'Precise chronological tools for exact age in years, months, and days, duration between calendar dates, workdays, and milestones.',
    iconName: 'CalendarClock',
    color: 'from-cyan-600 to-blue-700',
    count: 4,
  },
  {
    id: 'everyday',
    name: 'Everyday & Lifestyle',
    tagline: 'Tips, Fuel Cost, GPA & Aspect Ratio',
    description: 'Quick daily utilities including restaurant tip splitting, gas trip mileage costs, student GPA grade weighting, and screen aspect ratios.',
    iconName: 'Sparkles',
    color: 'from-fuchsia-600 to-pink-700',
    count: 4,
  },
];
