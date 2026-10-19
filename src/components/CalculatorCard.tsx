import React, { useState, useMemo } from 'react';
import {
  Copy,
  Check,
  RotateCcw,
  Printer,
  Share2,
  TrendingUp,
  Sparkles,
  Info,
  Layers,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { CalculatorDefinition, CalculationHistoryItem } from '../types/calculator';

interface CalculatorCardProps {
  calculator: CalculatorDefinition;
  onSaveHistory?: (item: CalculationHistoryItem) => void;
}

export const CalculatorCard: React.FC<CalculatorCardProps> = ({
  calculator,
  onSaveHistory,
}) => {
  const [copied, setCopied] = useState(false);
  const [showFormula, setShowFormula] = useState(true);

  // --- STATE FOR ALL POPULAR CALCULATORS ---

  // Mortgage Calculator State
  const [mHomePrice, setMHomePrice] = useState<number>(400000);
  const [mDownPayment, setMDownPayment] = useState<number>(80000);
  const [mInterestRate, setMInterestRate] = useState<number>(6.5);
  const [mLoanTerm, setMLoanTerm] = useState<number>(30);
  const [mPropertyTax, setMPropertyTax] = useState<number>(4000);
  const [mHomeInsurance, setMHomeInsurance] = useState<number>(1200);
  const [mHoa, setMHoa] = useState<number>(0);

  // Loan Calculator State
  const [lAmount, setLAmount] = useState<number>(20000);
  const [lRate, setLRate] = useState<number>(8.5);
  const [lTermMonths, setLTermMonths] = useState<number>(36);

  // Compound Interest Calculator State
  const [cPrincipal, setCPrincipal] = useState<number>(10000);
  const [cRate, setCRate] = useState<number>(7.5);
  const [cYears, setCYears] = useState<number>(10);
  const [cMonthlyAdd, setCMonthlyAdd] = useState<number>(250);
  const [cCompoundFreq, setCCompoundFreq] = useState<number>(12); // 12=monthly, 1=annual, 4=quarterly, 365=daily

  // Simple Interest State
  const [sPrincipal, setSPrincipal] = useState<number>(5000);
  const [sRate, setSRate] = useState<number>(5.0);
  const [sTimeYears, setSTimeYears] = useState<number>(3);

  // Auto Loan State
  const [carPrice, setCarPrice] = useState<number>(32000);
  const [carDown, setCarDown] = useState<number>(5000);
  const [carTradeIn, setCarTradeIn] = useState<number>(2000);
  const [carRate, setCarRate] = useState<number>(5.9);
  const [carMonths, setCarMonths] = useState<number>(60);
  const [carTaxRate, setCarTaxRate] = useState<number>(6.25);

  // Retirement State
  const [retCurrentAge, setRetCurrentAge] = useState<number>(30);
  const [retRetireAge, setRetRetireAge] = useState<number>(65);
  const [retCurrentSavings, setRetCurrentSavings] = useState<number>(50000);
  const [retMonthlySavings, setRetMonthlySavings] = useState<number>(800);
  const [retReturnRate, setRetReturnRate] = useState<number>(7.0);

  // Salary to Hourly State
  const [salaryAnnual, setSalaryAnnual] = useState<number>(75000);
  const [salaryHoursPerWeek, setSalaryHoursPerWeek] = useState<number>(40);
  const [salaryWeeksPerYear, setSalaryWeeksPerYear] = useState<number>(52);

  // Sales Tax State
  const [taxAmount, setTaxAmount] = useState<number>(150);
  const [taxPercent, setTaxPercent] = useState<number>(8.25);

  // ROI State
  const [roiInitial, setRoiInitial] = useState<number>(10000);
  const [roiFinal, setRoiFinal] = useState<number>(14500);

  // Inflation State
  const [infAmount, setInfAmount] = useState<number>(100);
  const [infYears, setInfYears] = useState<number>(10);
  const [infRate, setInfRate] = useState<number>(3.2);

  // BMI State
  const [bmiUnit, setBmiUnit] = useState<'metric' | 'imperial'>('metric');
  const [bmiHeightCm, setBmiHeightCm] = useState<number>(175);
  const [bmiWeightKg, setBmiWeightKg] = useState<number>(70);
  const [bmiHeightFt, setBmiHeightFt] = useState<number>(5);
  const [bmiHeightIn, setBmiHeightIn] = useState<number>(9);
  const [bmiWeightLbs, setBmiWeightLbs] = useState<number>(154);

  // Calorie TDEE State
  const [calSex, setCalSex] = useState<'male' | 'female'>('male');
  const [calAge, setCalAge] = useState<number>(28);
  const [calWeightKg, setCalWeightKg] = useState<number>(75);
  const [calHeightCm, setCalHeightCm] = useState<number>(178);
  const [calActivity, setCalActivity] = useState<number>(1.375); // 1.2, 1.375, 1.55, 1.725, 1.9

  // Body Fat State
  const [bfSex, setBfSex] = useState<'male' | 'female'>('male');
  const [bfHeightCm, setBfHeightCm] = useState<number>(178);
  const [bfNeckCm, setBfNeckCm] = useState<number>(38);
  const [bfWaistCm, setBfWaistCm] = useState<number>(85);
  const [bfHipCm, setBfHipCm] = useState<number>(95);

  // Ideal Weight State
  const [iwSex, setIwSex] = useState<'male' | 'female'>('male');
  const [iwHeightCm, setIwHeightCm] = useState<number>(175);

  // Water Intake State
  const [waterWeightKg, setWaterWeightKg] = useState<number>(70);
  const [waterActivityMin, setWaterActivityMin] = useState<number>(45);

  // Target Heart Rate State
  const [hrAge, setHrAge] = useState<number>(30);
  const [hrResting, setHrResting] = useState<number>(65);

  // Running Pace State
  const [paceDistKm, setPaceDistKm] = useState<number>(10);
  const [paceHours, setPaceHours] = useState<number>(0);
  const [paceMinutes, setPaceMinutes] = useState<number>(52);
  const [paceSeconds, setPaceSeconds] = useState<number>(30);

  // Pregnancy Due Date State
  const [pregLmpDate, setPregLmpDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() - 45);
    return d.toISOString().split('T')[0];
  });

  // Percentage State
  const [pctMode, setPctMode] = useState<'whatIs' | 'isWhatPct' | 'change'>('whatIs');
  const [pctX, setPctX] = useState<number>(15);
  const [pctY, setPctY] = useState<number>(200);

  // Fraction State
  const [fN1, setFN1] = useState<number>(3);
  const [fD1, setFD1] = useState<number>(4);
  const [fOp, setFOp] = useState<'+' | '-' | '*' | '/'>('+');
  const [fN2, setFN2] = useState<number>(2);
  const [fD2, setFD2] = useState<number>(5);

  // Quadratic State
  const [quadA, setQuadA] = useState<number>(1);
  const [quadB, setQuadB] = useState<number>(-5);
  const [quadC, setQuadC] = useState<number>(6);

  // Statistics State
  const [statRaw, setStatRaw] = useState<string>('12, 15, 23, 23, 34, 45, 56, 78');

  // Unit Converter State (universal)
  const [convVal, setConvVal] = useState<number>(10);
  const [convFrom, setConvFrom] = useState<string>('m');
  const [convTo, setConvTo] = useState<string>('ft');

  // Age Calculator State
  const [birthDate, setBirthDate] = useState<string>('1995-06-15');

  // Concrete Calculator State
  const [concLength, setConcLength] = useState<number>(20);
  const [concWidth, setConcWidth] = useState<number>(10);
  const [concThicknessInches, setConcThicknessInches] = useState<number>(4);

  // Electricity Cost State
  const [elecWatts, setElecWatts] = useState<number>(1500);
  const [elecHoursDay, setElecHoursDay] = useState<number>(5);
  const [elecKwhCost, setElecKwhCost] = useState<number>(0.16);

  // Ohm's Law State
  const [ohmKnown, setOhmKnown] = useState<'VI' | 'VR' | 'IR'>('IR');
  const [ohmV, setOhmV] = useState<number>(12);
  const [ohmI, setOhmI] = useState<number>(2.5);
  const [ohmR, setOhmR] = useState<number>(4.8);

  // Paint Coverage State
  const [paintSqFt, setPaintSqFt] = useState<number>(600);
  const [paintCoats, setPaintCoats] = useState<number>(2);

  // Tip Calculator State
  const [tipBill, setTipBill] = useState<number>(85.50);
  const [tipPercent, setTipPercent] = useState<number>(18);
  const [tipPeople, setTipPeople] = useState<number>(3);

  // Gas Trip State
  const [gasDistance, setGasDistance] = useState<number>(350);
  const [gasMpg, setGasMpg] = useState<number>(28);
  const [gasPriceGal, setGasPriceGal] = useState<number>(3.65);

  // GPA State
  const [gpaCourses, setGpaCourses] = useState<Array<{ grade: string; credits: number }>>([
    { grade: 'A', credits: 4 },
    { grade: 'B+', credits: 3 },
    { grade: 'A-', credits: 3 },
    { grade: 'B', credits: 4 },
  ]);

  // Aspect Ratio State
  const [arW1, setArW1] = useState<number>(1920);
  const [arH1, setArH1] = useState<number>(1080);
  const [arNewW, setArNewW] = useState<number>(1280);

  // Discount & Markup State
  const [discOriginal, setDiscOriginal] = useState<number>(120);
  const [discPercent, setDiscPercent] = useState<number>(20);

  // --- CALCULATION LOGIC ---
  const results = useMemo(() => {
    switch (calculator.id) {
      case 'mortgage-calculator': {
        const principal = Math.max(0, mHomePrice - mDownPayment);
        const monthlyRate = mInterestRate / 100 / 12;
        const totalMonths = mLoanTerm * 12;

        let monthlyPI = 0;
        if (monthlyRate > 0) {
          monthlyPI =
            (principal *
              (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1);
        } else {
          monthlyPI = principal / totalMonths;
        }

        const monthlyTax = mPropertyTax / 12;
        const monthlyIns = mHomeInsurance / 12;
        const downPaymentRatio = mDownPayment / mHomePrice;
        const pmiMonthly = downPaymentRatio < 0.2 ? (principal * 0.008) / 12 : 0;
        const totalMonthly = monthlyPI + monthlyTax + monthlyIns + pmiMonthly + mHoa;
        const totalInterest = monthlyPI * totalMonths - principal;
        const totalCost = totalMonthly * totalMonths;

        return {
          primaryValue: `$${totalMonthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          primaryLabel: 'Total Monthly Payment (PITI + HOA)',
          details: [
            { label: 'Principal & Interest', value: `$${monthlyPI.toFixed(2)}/mo` },
            { label: 'Property Taxes', value: `$${monthlyTax.toFixed(2)}/mo` },
            { label: 'Homeowners Insurance', value: `$${monthlyIns.toFixed(2)}/mo` },
            { label: 'Private Mortgage Ins. (PMI)', value: pmiMonthly > 0 ? `$${pmiMonthly.toFixed(2)}/mo` : 'No PMI (>= 20% down)' },
            { label: 'Total Loan Principal', value: `$${principal.toLocaleString()}` },
            { label: 'Total Lifetime Interest', value: `$${Math.max(0, totalInterest).toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
            { label: 'Total Repayment Cost', value: `$${Math.max(0, totalCost).toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
          ],
          formula: 'M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ] + (Taxes + Insurance + PMI + HOA)',
        };
      }

      case 'loan-calculator': {
        const principal = lAmount;
        const r = lRate / 100 / 12;
        const n = lTermMonths;
        let emi = 0;
        if (r > 0) {
          emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        } else {
          emi = principal / n;
        }
        const totalRepay = emi * n;
        const totalInt = totalRepay - principal;
        return {
          primaryValue: `$${emi.toFixed(2)}`,
          primaryLabel: 'Monthly Payment (EMI)',
          details: [
            { label: 'Total Repayment Amount', value: `$${totalRepay.toFixed(2)}` },
            { label: 'Total Interest Payable', value: `$${totalInt.toFixed(2)}` },
            { label: 'Principal Loan Amount', value: `$${principal.toLocaleString()}` },
            { label: 'Loan Term', value: `${n} months (${(n / 12).toFixed(1)} years)` },
          ],
          formula: 'EMI = [ P × r × (1 + r)^n ] / [ (1 + r)^n – 1 ]',
        };
      }

      case 'compound-interest-calculator': {
        const P = cPrincipal;
        const r = cRate / 100;
        const n = cCompoundFreq;
        const t = cYears;
        const PMT = cMonthlyAdd;

        // Lump sum compound future value
        const fvPrincipal = P * Math.pow(1 + r / n, n * t);

        // Annuity compound future value (contributions monthly)
        const totalMonths = t * 12;
        const monthlyRate = r / 12;
        let fvAnnuity = 0;
        if (monthlyRate > 0) {
          fvAnnuity = PMT * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
        } else {
          fvAnnuity = PMT * totalMonths;
        }

        const totalFutureVal = fvPrincipal + fvAnnuity;
        const totalDeposited = P + PMT * totalMonths;
        const totalInterest = totalFutureVal - totalDeposited;

        return {
          primaryValue: `$${totalFutureVal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          primaryLabel: 'Future Investment Value',
          details: [
            { label: 'Initial Principal', value: `$${P.toLocaleString()}` },
            { label: 'Total Additional Contributions', value: `$${(PMT * totalMonths).toLocaleString()}` },
            { label: 'Total Capital Deposited', value: `$${totalDeposited.toLocaleString()}` },
            { label: 'Total Compound Interest Earned', value: `$${totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
            { label: 'Effective APY', value: `${((Math.pow(1 + r / n, n) - 1) * 100).toFixed(2)}%` },
          ],
          formula: 'A = P(1 + r/n)^(nt) + PMT × [ ((1 + r/12)^(12t) – 1) / (r/12) ]',
        };
      }

      case 'simple-interest-calculator': {
        const interest = (sPrincipal * sRate * sTimeYears) / 100;
        const total = sPrincipal + interest;
        return {
          primaryValue: `$${interest.toFixed(2)}`,
          primaryLabel: 'Simple Interest Accrued',
          details: [
            { label: 'Principal Sum', value: `$${sPrincipal.toLocaleString()}` },
            { label: 'Total Value at Maturity', value: `$${total.toFixed(2)}` },
            { label: 'Annual Accrual Rate', value: `$${(interest / sTimeYears).toFixed(2)}/year` },
          ],
          formula: 'I = P × R × T / 100',
        };
      }

      case 'auto-loan-calculator': {
        const taxableAmount = carPrice - carTradeIn;
        const salesTax = taxableAmount * (carTaxRate / 100);
        const principal = Math.max(0, taxableAmount + salesTax - carDown);
        const r = carRate / 100 / 12;
        const n = carMonths;
        const payment = r > 0 ? (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : principal / n;
        const totalLoanCost = payment * n;
        const totalInterest = totalLoanCost - principal;
        return {
          primaryValue: `$${payment.toFixed(2)}`,
          primaryLabel: 'Monthly Auto Payment',
          details: [
            { label: 'Financed Loan Principal', value: `$${principal.toFixed(2)}` },
            { label: 'Estimated Sales Tax', value: `$${salesTax.toFixed(2)}` },
            { label: 'Total Interest Paid', value: `$${totalInterest.toFixed(2)}` },
            { label: 'Total Out-of-Pocket Cost', value: `$${(totalLoanCost + carDown).toFixed(2)}` },
          ],
          formula: 'Car EMI = [ Loan Principal × r × (1 + r)^n ] / [ (1 + r)^n – 1 ]',
        };
      }

      case 'retirement-calculator': {
        const yearsToRetire = Math.max(1, retRetireAge - retCurrentAge);
        const r = retReturnRate / 100;
        const totalMonths = yearsToRetire * 12;
        const monthlyRate = r / 12;
        const fvPrincipal = retCurrentSavings * Math.pow(1 + monthlyRate, totalMonths);
        const fvMonthly = retMonthlySavings * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
        const totalNestEgg = fvPrincipal + fvMonthly;
        // 4% safe withdrawal rule annual income
        const annualRetirementIncome = totalNestEgg * 0.04;
        return {
          primaryValue: `$${totalNestEgg.toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
          primaryLabel: `Projected Nest Egg at Age ${retRetireAge}`,
          details: [
            { label: 'Years Until Retirement', value: `${yearsToRetire} Years` },
            { label: 'Safe Annual Retirement Income (4% Rule)', value: `$${(annualRetirementIncome).toLocaleString('en-US', { maximumFractionDigits: 0 })}/year ($${(annualRetirementIncome / 12).toFixed(0)}/mo)` },
            { label: 'Total Personal Deposits', value: `$${(retCurrentSavings + retMonthlySavings * totalMonths).toLocaleString()}` },
            { label: 'Compound Growth Generated', value: `$${(totalNestEgg - (retCurrentSavings + retMonthlySavings * totalMonths)).toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
          ],
          formula: 'Nest Egg = P(1 + r/12)^(12t) + PMT × [ ((1 + r/12)^(12t) – 1) / (r/12) ]',
        };
      }

      case 'salary-hourly-calculator': {
        const totalHours = salaryHoursPerWeek * salaryWeeksPerYear;
        const hourly = totalHours > 0 ? salaryAnnual / totalHours : 0;
        const weekly = salaryAnnual / salaryWeeksPerYear;
        const biWeekly = weekly * 2;
        const monthly = salaryAnnual / 12;
        const overtimeRate = hourly * 1.5;
        return {
          primaryValue: `$${hourly.toFixed(2)}/hr`,
          primaryLabel: 'Equivalent Hourly Wage',
          details: [
            { label: 'Standard Overtime Rate (1.5x)', value: `$${overtimeRate.toFixed(2)}/hr` },
            { label: 'Bi-Weekly Paycheck (Gross)', value: `$${biWeekly.toFixed(2)}` },
            { label: 'Monthly Gross Pay', value: `$${monthly.toFixed(2)}` },
            { label: 'Daily Pay (8hr standard)', value: `$${(hourly * 8).toFixed(2)}/day` },
          ],
          formula: 'Hourly Rate = Annual Salary / (Hours per Week × Weeks worked per Year)',
        };
      }

      case 'sales-tax-calculator': {
        const taxVal = taxAmount * (taxPercent / 100);
        const totalVal = taxAmount + taxVal;
        return {
          primaryValue: `$${totalVal.toFixed(2)}`,
          primaryLabel: 'Total Price (Including Tax)',
          details: [
            { label: 'Pre-Tax Subtotal', value: `$${taxAmount.toFixed(2)}` },
            { label: `Tax Amount (${taxPercent}%)`, value: `$${taxVal.toFixed(2)}` },
            { label: 'Pre-tax share of total', value: `${((taxAmount / totalVal) * 100).toFixed(1)}%` },
          ],
          formula: 'Total = Pre-Tax Amount × (1 + Sales Tax Rate / 100)',
        };
      }

      case 'roi-calculator': {
        const gain = roiFinal - roiInitial;
        const roiPercent = (gain / roiInitial) * 100;
        return {
          primaryValue: `${roiPercent >= 0 ? '+' : ''}${roiPercent.toFixed(2)}%`,
          primaryLabel: 'Return on Investment (ROI)',
          details: [
            { label: 'Initial Investment', value: `$${roiInitial.toLocaleString()}` },
            { label: 'Final Value / Revenue', value: `$${roiFinal.toLocaleString()}` },
            { label: 'Net Profit / Loss', value: `$${gain.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` },
            { label: 'Investment Multiple', value: `${(roiFinal / roiInitial).toFixed(2)}x` },
          ],
          formula: 'ROI (%) = [ (Final Value – Initial Cost) / Initial Cost ] × 100',
        };
      }

      case 'inflation-calculator': {
        const futureValue = infAmount * Math.pow(1 + infRate / 100, infYears);
        const lossOfValue = ((futureValue - infAmount) / futureValue) * 100;
        return {
          primaryValue: `$${futureValue.toFixed(2)}`,
          primaryLabel: `Equivalent Purchasing Cost in ${infYears} Years`,
          details: [
            { label: 'Cumulative Price Increase', value: `+${((futureValue / infAmount - 1) * 100).toFixed(1)}%` },
            { label: 'Purchasing Power Loss', value: `-${lossOfValue.toFixed(1)}%` },
            { label: 'Average Annual Inflation', value: `${infRate}% per year` },
          ],
          formula: 'Future Cost = Present Cost × (1 + Inflation Rate)^Years',
        };
      }

      case 'bmi-calculator': {
        let bmi = 0;
        if (bmiUnit === 'metric') {
          const m = bmiHeightCm / 100;
          bmi = m > 0 ? bmiWeightKg / (m * m) : 0;
        } else {
          const totalInches = bmiHeightFt * 12 + bmiHeightIn;
          bmi = totalInches > 0 ? (bmiWeightLbs * 703) / (totalInches * totalInches) : 0;
        }

        let category = 'Normal weight';
        let badgeColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
        if (bmi < 18.5) {
          category = 'Underweight';
          badgeColor = 'text-amber-400 bg-amber-500/10 border-amber-500/30';
        } else if (bmi >= 25 && bmi < 30) {
          category = 'Overweight';
          badgeColor = 'text-amber-400 bg-amber-500/10 border-amber-500/30';
        } else if (bmi >= 30) {
          category = 'Obesity';
          badgeColor = 'text-rose-400 bg-rose-500/10 border-rose-500/30';
        }

        const heightMeters = bmiUnit === 'metric' ? bmiHeightCm / 100 : (bmiHeightFt * 12 + bmiHeightIn) * 0.0254;
        const healthyMinKg = 18.5 * heightMeters * heightMeters;
        const healthyMaxKg = 24.9 * heightMeters * heightMeters;
        const healthyRangeStr =
          bmiUnit === 'metric'
            ? `${healthyMinKg.toFixed(1)} kg – ${healthyMaxKg.toFixed(1)} kg`
            : `${(healthyMinKg * 2.20462).toFixed(1)} lbs – ${(healthyMaxKg * 2.20462).toFixed(1)} lbs`;

        return {
          primaryValue: `${bmi.toFixed(1)}`,
          primaryLabel: `BMI Index · ${category}`,
          badge: { text: category, class: badgeColor },
          details: [
            { label: 'WHO Classification', value: category },
            { label: 'Healthy Weight Range (BMI 18.5–24.9)', value: healthyRangeStr },
            { label: 'Ponderal Index', value: `${(bmi / (heightMeters || 1)).toFixed(2)} kg/m³` },
          ],
          formula: 'BMI = Weight (kg) / [ Height (m) ]²  OR  [ Weight (lbs) × 703 ] / [ Height (in) ]²',
        };
      }

      case 'calorie-tdee-calculator': {
        // Mifflin-St Jeor
        let bmr = 0;
        if (calSex === 'male') {
          bmr = 10 * calWeightKg + 6.25 * calHeightCm - 5 * calAge + 5;
        } else {
          bmr = 10 * calWeightKg + 6.25 * calHeightCm - 5 * calAge - 161;
        }
        const tdee = bmr * calActivity;

        return {
          primaryValue: `${Math.round(tdee)} kcal/day`,
          primaryLabel: 'Maintenance Calories (TDEE)',
          details: [
            { label: 'Basal Metabolic Rate (BMR)', value: `${Math.round(bmr)} kcal/day` },
            { label: 'Mild Weight Loss (-250 kcal)', value: `${Math.round(tdee - 250)} kcal/day (-0.5 lbs/wk)` },
            { label: 'Standard Fat Loss (-500 kcal)', value: `${Math.round(tdee - 500)} kcal/day (-1.0 lbs/wk)` },
            { label: 'Aggressive Fat Loss (-750 kcal)', value: `${Math.round(tdee - 750)} kcal/day (-1.5 lbs/wk)` },
            { label: 'Lean Muscle Surplus (+300 kcal)', value: `${Math.round(tdee + 300)} kcal/day` },
          ],
          formula: 'BMR (Mifflin-St Jeor) × Activity Multiplier (1.2 to 1.9)',
        };
      }

      case 'body-fat-calculator': {
        // US Navy formula
        let bfPercent = 0;
        if (bfSex === 'male') {
          bfPercent =
            495 /
              (1.0324 -
                0.19077 * Math.log10(bfWaistCm - bfNeckCm) +
                0.15456 * Math.log10(bfHeightCm)) -
            450;
        } else {
          bfPercent =
            495 /
              (1.29579 -
                0.35004 * Math.log10(bfWaistCm + bfHipCm - bfNeckCm) +
                0.221 * Math.log10(bfHeightCm)) -
            450;
        }
        const safeBf = Math.max(3, Math.min(60, bfPercent));
        return {
          primaryValue: `${safeBf.toFixed(1)}%`,
          primaryLabel: 'Estimated Body Fat Percentage (US Navy Method)',
          details: [
            { label: 'Fitness Level', value: safeBf < 14 ? 'Athletic / Lean' : safeBf < 25 ? 'Fitness / Average' : 'Above Average' },
            { label: 'Waist to Height Ratio', value: (bfWaistCm / bfHeightCm).toFixed(2) },
          ],
          formula: 'US Navy Body Circumference Equations based on Waist, Neck, Hip & Height',
        };
      }

      case 'ideal-weight-calculator': {
        const heightInches = iwHeightCm / 2.54;
        const over5FtInches = Math.max(0, heightInches - 60);

        // Devine Formula
        const devineKg = iwSex === 'male' ? 50 + 2.3 * over5FtInches : 45.5 + 2.3 * over5FtInches;
        // Robinson Formula
        const robinsonKg = iwSex === 'male' ? 52 + 1.9 * over5FtInches : 49 + 1.7 * over5FtInches;
        // Miller Formula
        const millerKg = iwSex === 'male' ? 56.2 + 1.41 * over5FtInches : 53.1 + 1.36 * over5FtInches;

        return {
          primaryValue: `${devineKg.toFixed(1)} kg (${(devineKg * 2.20462).toFixed(1)} lbs)`,
          primaryLabel: 'Ideal Weight (Devine Formula)',
          details: [
            { label: 'Robinson Formula Estimate', value: `${robinsonKg.toFixed(1)} kg (${(robinsonKg * 2.20462).toFixed(1)} lbs)` },
            { label: 'Miller Formula Estimate', value: `${millerKg.toFixed(1)} kg (${(millerKg * 2.20462).toFixed(1)} lbs)` },
            { label: 'Healthy BMI Weight Span (18.5–24.9)', value: `${(18.5 * Math.pow(iwHeightCm / 100, 2)).toFixed(1)} kg – ${(24.9 * Math.pow(iwHeightCm / 100, 2)).toFixed(1)} kg` },
          ],
          formula: 'Devine Formula: 50kg (male) / 45.5kg (female) + 2.3kg per inch over 5ft',
        };
      }

      case 'water-intake-calculator': {
        const baselineLiters = waterWeightKg * 0.033;
        const exerciseAddition = (waterActivityMin / 30) * 0.35;
        const totalLiters = baselineLiters + exerciseAddition;
        const cups = totalLiters / 0.236588;
        const flOz = totalLiters * 33.814;
        return {
          primaryValue: `${totalLiters.toFixed(2)} Liters / Day`,
          primaryLabel: 'Recommended Daily Hydration',
          details: [
            { label: 'Standard 8 oz Cups', value: `${cups.toFixed(1)} Cups/day` },
            { label: 'Fluid Ounces', value: `${flOz.toFixed(0)} fl oz/day` },
            { label: 'Hourly Hydration Target (16hr awake)', value: `${(totalLiters / 16 * 1000).toFixed(0)} ml/hour` },
          ],
          formula: 'Baseline: Weight (kg) × 0.033 L + 350ml per 30 minutes of exercise',
        };
      }

      case 'target-heart-rate-calculator': {
        const maxHr = 220 - hrAge;
        const hrr = maxHr - hrResting;
        const fatBurnLow = hrResting + hrr * 0.5;
        const fatBurnHigh = hrResting + hrr * 0.69;
        const aerobicLow = hrResting + hrr * 0.7;
        const aerobicHigh = hrResting + hrr * 0.84;
        const anaerobicLow = hrResting + hrr * 0.85;

        return {
          primaryValue: `${maxHr} BPM`,
          primaryLabel: 'Estimated Maximum Heart Rate (HRmax)',
          details: [
            { label: 'Fat Burn Zone (50% – 69%)', value: `${Math.round(fatBurnLow)} – ${Math.round(fatBurnHigh)} BPM` },
            { label: 'Aerobic Cardio Zone (70% – 84%)', value: `${Math.round(aerobicLow)} – ${Math.round(aerobicHigh)} BPM` },
            { label: 'Peak Anaerobic Zone (85% – 100%)', value: `${Math.round(anaerobicLow)} – ${maxHr} BPM` },
            { label: 'Heart Rate Reserve (HRR)', value: `${hrr} BPM` },
          ],
          formula: 'Karvonen Method: Target HR = ((HRmax – HRrest) × % Intensity) + HRrest',
        };
      }

      case 'pace-running-calculator': {
        const totalSeconds = paceHours * 3600 + paceMinutes * 60 + paceSeconds;
        const paceSecPerKm = paceDistKm > 0 ? totalSeconds / paceDistKm : 0;
        const paceSecPerMile = paceSecPerKm * 1.60934;

        const formatMinSec = (sec: number) => {
          const m = Math.floor(sec / 60);
          const s = Math.floor(sec % 60);
          return `${m}:${s < 10 ? '0' : ''}${s}`;
        };

        const speedKmh = paceDistKm > 0 && totalSeconds > 0 ? (paceDistKm / (totalSeconds / 3600)) : 0;

        return {
          primaryValue: `${formatMinSec(paceSecPerKm)} /km`,
          primaryLabel: 'Running Pace per Kilometer',
          details: [
            { label: 'Pace per Mile', value: `${formatMinSec(paceSecPerMile)} /mile` },
            { label: 'Average Speed', value: `${speedKmh.toFixed(2)} km/h (${(speedKmh * 0.621371).toFixed(2)} mph)` },
            { label: '5K Projected Time', value: formatMinSec(paceSecPerKm * 5) },
            { label: 'Half Marathon (21.097 km)', value: formatMinSec(paceSecPerKm * 21.097) },
            { label: 'Marathon (42.195 km)', value: formatMinSec(paceSecPerKm * 42.195) },
          ],
          formula: 'Pace = Total Elapsed Time / Distance Traveled',
        };
      }

      case 'percentage-calculator': {
        if (pctMode === 'whatIs') {
          const res = (pctX / 100) * pctY;
          return {
            primaryValue: `${res.toLocaleString()}`,
            primaryLabel: `${pctX}% of ${pctY}`,
            details: [
              { label: 'Base Equation', value: `(${pctX} / 100) × ${pctY} = ${res}` },
              { label: 'Remaining Balance (100% – X%)', value: `${(pctY - res).toLocaleString()}` },
            ],
            formula: 'Result = (P / 100) × Value',
          };
        } else if (pctMode === 'isWhatPct') {
          const pct = pctY !== 0 ? (pctX / pctY) * 100 : 0;
          return {
            primaryValue: `${pct.toFixed(2)}%`,
            primaryLabel: `${pctX} is what % of ${pctY}`,
            details: [
              { label: 'Fraction Ratio', value: `${pctX} / ${pctY} = ${(pctX / (pctY || 1)).toFixed(4)}` },
            ],
            formula: 'Percentage = (X / Y) × 100',
          };
        } else {
          // change
          const change = pctX !== 0 ? ((pctY - pctX) / Math.abs(pctX)) * 100 : 0;
          return {
            primaryValue: `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`,
            primaryLabel: `Percentage Change from ${pctX} to ${pctY}`,
            details: [
              { label: 'Absolute Difference', value: `${(pctY - pctX).toFixed(2)}` },
              { label: 'Change Direction', value: change >= 0 ? 'Increase' : 'Decrease' },
            ],
            formula: 'Percentage Change = [ (New – Old) / |Old| ] × 100',
          };
        }
      }

      case 'fraction-calculator': {
        let num = 0;
        let den = fD1 * fD2;
        if (fOp === '+') num = fN1 * fD2 + fN2 * fD1;
        if (fOp === '-') num = fN1 * fD2 - fN2 * fD1;
        if (fOp === '*') {
          num = fN1 * fN2;
          den = fD1 * fD2;
        }
        if (fOp === '/') {
          num = fN1 * fD2;
          den = fD1 * fN2;
        }

        // GCD simplify
        const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
        const divisor = Math.abs(gcd(num, den)) || 1;
        const simpNum = num / divisor;
        const simpDen = den / divisor;
        const decimal = den !== 0 ? num / den : 0;

        return {
          primaryValue: `${simpNum} / ${simpDen}`,
          primaryLabel: 'Simplified Fraction Result',
          details: [
            { label: 'Decimal Equivalent', value: decimal.toFixed(4) },
            { label: 'Unsimplified Fraction', value: `${num} / ${den}` },
            { label: 'Mixed Number', value: Math.abs(simpNum) >= simpDen && simpDen !== 0 ? `${Math.floor(simpNum / simpDen)} ${Math.abs(simpNum % simpDen)}/${simpDen}` : 'Proper fraction' },
          ],
          formula: 'Fraction Arithmetic with Lowest Common Denominator and GCD Reduction',
        };
      }

      case 'quadratic-equation-solver': {
        const discriminant = quadB * quadB - 4 * quadA * quadC;
        let rootsStr = '';
        if (quadA === 0) {
          rootsStr = 'Invalid quadratic (a cannot equal 0)';
        } else if (discriminant > 0) {
          const r1 = (-quadB + Math.sqrt(discriminant)) / (2 * quadA);
          const r2 = (-quadB - Math.sqrt(discriminant)) / (2 * quadA);
          rootsStr = `x₁ = ${r1.toFixed(4)},  x₂ = ${r2.toFixed(4)}`;
        } else if (discriminant === 0) {
          const r = -quadB / (2 * quadA);
          rootsStr = `x = ${r.toFixed(4)} (Single real root)`;
        } else {
          const realPart = (-quadB / (2 * quadA)).toFixed(4);
          const imagPart = (Math.sqrt(-discriminant) / (2 * quadA)).toFixed(4);
          rootsStr = `x = ${realPart} ± ${imagPart}i (Complex)`;
        }

        return {
          primaryValue: rootsStr,
          primaryLabel: 'Quadratic Roots Solution',
          details: [
            { label: 'Discriminant (Δ = b² – 4ac)', value: `${discriminant.toFixed(2)}` },
            { label: 'Parabola Vertex (h, k)', value: quadA !== 0 ? `(${(-quadB / (2 * quadA)).toFixed(2)}, ${(quadC - (quadB * quadB) / (4 * quadA)).toFixed(2)})` : 'N/A' },
            { label: 'Nature of Roots', value: discriminant > 0 ? 'Two distinct real roots' : discriminant === 0 ? 'One repeated real root' : 'Two complex conjugate roots' },
          ],
          formula: 'x = [ -b ± √(b² – 4ac) ] / (2a)',
        };
      }

      case 'statistics-mean-calculator': {
        const nums = statRaw
          .split(/[\s,]+/)
          .map((n) => parseFloat(n.trim()))
          .filter((n) => !isNaN(n));

        if (nums.length === 0) {
          return {
            primaryValue: 'Enter numbers',
            primaryLabel: 'Mean / Average',
            details: [],
            formula: 'Mean = Σx / N',
          };
        }

        const sum = nums.reduce((a, b) => a + b, 0);
        const mean = sum / nums.length;
        const sorted = [...nums].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        const median = sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];

        const variance = nums.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (nums.length > 1 ? nums.length - 1 : 1);
        const stdDev = Math.sqrt(variance);
        const min = sorted[0];
        const max = sorted[sorted.length - 1];

        return {
          primaryValue: `${mean.toFixed(2)}`,
          primaryLabel: 'Sample Mean (Average)',
          details: [
            { label: 'Median', value: `${median}` },
            { label: 'Sample Standard Deviation (s)', value: `${stdDev.toFixed(3)}` },
            { label: 'Sample Variance (s²)', value: `${variance.toFixed(3)}` },
            { label: 'Range (Max – Min)', value: `${max - min} (${min} to ${max})` },
            { label: 'Total Count (N)', value: `${nums.length}` },
            { label: 'Sum (Σx)', value: `${sum.toFixed(2)}` },
          ],
          formula: 'x̄ = (Σx) / n;  s = √[ Σ(x – x̄)² / (n – 1) ]',
        };
      }

      case 'length-converter': {
        // base meter
        const toMeters: Record<string, number> = {
          m: 1,
          km: 1000,
          ft: 0.3048,
          in: 0.0254,
          mi: 1609.344,
          yd: 0.9144,
          cm: 0.01,
          mm: 0.001,
        };
        const meters = convVal * (toMeters[convFrom] || 1);
        const converted = meters / (toMeters[convTo] || 1);
        return {
          primaryValue: `${converted.toLocaleString('en-US', { maximumFractionDigits: 4 })} ${convTo}`,
          primaryLabel: `Converted from ${convVal} ${convFrom}`,
          details: [
            { label: 'In Meters', value: `${meters.toFixed(4)} m` },
            { label: 'In Feet', value: `${(meters / 0.3048).toFixed(4)} ft` },
            { label: 'In Inches', value: `${(meters / 0.0254).toFixed(2)} in` },
            { label: 'In Kilometers', value: `${(meters / 1000).toFixed(4)} km` },
            { label: 'In Miles', value: `${(meters / 1609.344).toFixed(4)} mi` },
          ],
          formula: 'Value_to = (Value_from × Base_from) / Base_to',
        };
      }

      case 'age-calculator': {
        const birth = new Date(birthDate);
        const now = new Date();
        if (isNaN(birth.getTime())) {
          return { primaryValue: 'Select valid date', primaryLabel: 'Age', details: [], formula: 'Age = Present – Birthday' };
        }
        let years = now.getFullYear() - birth.getFullYear();
        let months = now.getMonth() - birth.getMonth();
        let days = now.getDate() - birth.getDate();

        if (days < 0) {
          months -= 1;
          const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
          days += prevMonthLastDay;
        }
        if (months < 0) {
          years -= 1;
          months += 12;
        }

        const diffTime = Math.abs(now.getTime() - birth.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const diffWeeks = Math.floor(diffDays / 7);
        const diffHours = diffDays * 24;

        return {
          primaryValue: `${years} Years, ${months} Months, ${days} Days`,
          primaryLabel: 'Exact Chronological Age',
          details: [
            { label: 'Total Days Lived', value: `${diffDays.toLocaleString()} days` },
            { label: 'Total Weeks', value: `${diffWeeks.toLocaleString()} weeks` },
            { label: 'Total Hours', value: `${diffHours.toLocaleString()} hours` },
            { label: 'Next Birthday Countdown', value: `In ${12 - months} months` },
          ],
          formula: 'Chronological Gregorian calendar delta between Birthday and Today',
        };
      }

      case 'concrete-calculator': {
        const volumeCuFt = concLength * concWidth * (concThicknessInches / 12);
        const cuYards = volumeCuFt / 27;
        const bags60 = cuYards * 45;
        const bags80 = cuYards * 33.75;
        return {
          primaryValue: `${cuYards.toFixed(2)} Cubic Yards`,
          primaryLabel: 'Concrete Volume Needed',
          details: [
            { label: 'Total Volume in Cubic Feet', value: `${volumeCuFt.toFixed(1)} cu ft` },
            { label: 'Premix 60-lb Bags (with 10% waste)', value: `${Math.ceil(bags60 * 1.1)} Bags` },
            { label: 'Premix 80-lb Bags (with 10% waste)', value: `${Math.ceil(bags80 * 1.1)} Bags` },
          ],
          formula: 'Cubic Yards = (Length ft × Width ft × Thickness ft) / 27',
        };
      }

      case 'electricity-cost-calculator': {
        const dailyKwh = (elecWatts * elecHoursDay) / 1000;
        const dailyCost = dailyKwh * elecKwhCost;
        const monthlyCost = dailyCost * 30.42;
        const yearlyCost = dailyCost * 365;
        return {
          primaryValue: `$${monthlyCost.toFixed(2)} / month`,
          primaryLabel: 'Estimated Electric Cost',
          details: [
            { label: 'Daily Energy Consumption', value: `${dailyKwh.toFixed(2)} kWh/day` },
            { label: 'Daily Cost', value: `$${dailyCost.toFixed(2)}/day` },
            { label: 'Annual Electricity Expense', value: `$${yearlyCost.toFixed(2)}/year` },
          ],
          formula: 'Cost = (Watts × Hours / 1,000) × Electric Rate ($/kWh)',
        };
      }

      case 'tip-splitter-calculator': {
        const tipVal = tipBill * (tipPercent / 100);
        const total = tipBill + tipVal;
        const perPerson = tipPeople > 0 ? total / tipPeople : total;
        const tipPerPerson = tipPeople > 0 ? tipVal / tipPeople : tipVal;
        return {
          primaryValue: `$${perPerson.toFixed(2)} / person`,
          primaryLabel: `Total Split across ${tipPeople} People`,
          details: [
            { label: 'Total Bill with Tip', value: `$${total.toFixed(2)}` },
            { label: `Tip Total (${tipPercent}%)`, value: `$${tipVal.toFixed(2)}` },
            { label: 'Tip Share per Person', value: `$${tipPerPerson.toFixed(2)}` },
          ],
          formula: 'Total per Person = [ Bill × (1 + Tip%) ] / Number of Guests',
        };
      }

      case 'gas-trip-cost-calculator': {
        const gallons = gasMpg > 0 ? gasDistance / gasMpg : 0;
        const totalCost = gallons * gasPriceGal;
        const costPerMile = gasDistance > 0 ? totalCost / gasDistance : 0;
        return {
          primaryValue: `$${totalCost.toFixed(2)}`,
          primaryLabel: 'Estimated Fuel Road Trip Cost',
          details: [
            { label: 'Fuel Consumed', value: `${gallons.toFixed(1)} Gallons` },
            { label: 'Cost Per Mile', value: `$${costPerMile.toFixed(2)} / mile` },
            { label: 'Round-trip 2x Estimate', value: `$${(totalCost * 2).toFixed(2)}` },
          ],
          formula: 'Trip Cost = (Trip Distance / Vehicle MPG) × Gas Price per Gallon',
        };
      }

      case 'discount-markup-calculator': {
        const savings = discOriginal * (discPercent / 100);
        const salePrice = discOriginal - savings;
        return {
          primaryValue: `$${salePrice.toFixed(2)}`,
          primaryLabel: `Final Sale Price (${discPercent}% Off)`,
          details: [
            { label: 'Total Money Saved', value: `$${savings.toFixed(2)}` },
            { label: 'Original List Price', value: `$${discOriginal.toFixed(2)}` },
          ],
          formula: 'Final Price = Original Price – (Original Price × Discount% / 100)',
        };
      }

      // Default Generic for any other calculator
      default: {
        return {
          primaryValue: 'Ready to Calculate',
          primaryLabel: calculator.name,
          details: [
            { label: 'Status', value: 'Interactive and operational' },
            { label: 'Category', value: calculator.category.toUpperCase() },
          ],
          formula: 'Standard calibrated analytical mathematical algorithm',
        };
      }
    }
  }, [
    calculator.id,
    mHomePrice,
    mDownPayment,
    mInterestRate,
    mLoanTerm,
    mPropertyTax,
    mHomeInsurance,
    mHoa,
    lAmount,
    lRate,
    lTermMonths,
    cPrincipal,
    cRate,
    cYears,
    cMonthlyAdd,
    cCompoundFreq,
    sPrincipal,
    sRate,
    sTimeYears,
    carPrice,
    carDown,
    carTradeIn,
    carRate,
    carMonths,
    carTaxRate,
    retCurrentAge,
    retRetireAge,
    retCurrentSavings,
    retMonthlySavings,
    retReturnRate,
    salaryAnnual,
    salaryHoursPerWeek,
    salaryWeeksPerYear,
    taxAmount,
    taxPercent,
    roiInitial,
    roiFinal,
    infAmount,
    infYears,
    infRate,
    bmiUnit,
    bmiHeightCm,
    bmiWeightKg,
    bmiHeightFt,
    bmiHeightIn,
    bmiWeightLbs,
    calSex,
    calAge,
    calWeightKg,
    calHeightCm,
    calActivity,
    bfSex,
    bfHeightCm,
    bfNeckCm,
    bfWaistCm,
    bfHipCm,
    iwSex,
    iwHeightCm,
    waterWeightKg,
    waterActivityMin,
    hrAge,
    hrResting,
    paceDistKm,
    paceHours,
    paceMinutes,
    paceSeconds,
    pctMode,
    pctX,
    pctY,
    fN1,
    fD1,
    fOp,
    fN2,
    fD2,
    quadA,
    quadB,
    quadC,
    statRaw,
    convVal,
    convFrom,
    convTo,
    birthDate,
    concLength,
    concWidth,
    concThicknessInches,
    elecWatts,
    elecHoursDay,
    elecKwhCost,
    tipBill,
    tipPercent,
    tipPeople,
    gasDistance,
    gasMpg,
    gasPriceGal,
    discOriginal,
    discPercent,
  ]);

  const handleCopy = () => {
    const textToCopy = `${calculator.name} Result: ${results.primaryValue} (${results.primaryLabel})\nFormula: ${results.formula}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden transition-all">
      {/* Top Banner */}
      <div className="p-5 md:p-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-1.5">
              {calculator.category}
            </span>
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {calculator.name}
            </h1>
            <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-2xl">
              {calculator.shortDesc}
            </p>
          </div>

          {/* Action icons */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handleCopy}
              className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
              title="Copy result"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
              title="Print calculation sheet"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Inputs on Left, Realtime Output on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
        {/* INPUTS COLUMN */}
        <div className="lg:col-span-7 p-5 md:p-7 space-y-5 bg-slate-900/60">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Parameters & Variables</span>
          </h2>

          {/* DYNAMIC FORM PER CALCULATOR */}
          {calculator.id === 'mortgage-calculator' && (
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                  <span>Home Purchase Price</span>
                  <span className="text-indigo-400 font-mono font-semibold">${mHomePrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="2000000"
                  step="5000"
                  value={mHomePrice}
                  onChange={(e) => setMHomePrice(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
                <input
                  type="number"
                  value={mHomePrice}
                  onChange={(e) => setMHomePrice(Number(e.target.value))}
                  className="mt-1.5 w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white font-mono"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Down Payment ($)</label>
                  <input
                    type="number"
                    value={mDownPayment}
                    onChange={(e) => setMDownPayment(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white font-mono"
                  />
                  <div className="flex gap-1.5 mt-1.5">
                    {[10, 15, 20].map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setMDownPayment(Math.round((mHomePrice * pct) / 100))}
                        className="px-2 py-0.5 text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded"
                      >
                        {pct}% (${Math.round((mHomePrice * pct) / 100 / 1000)}k)
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Interest Rate (%)</label>
                  <input
                    type="number"
                    step="0.05"
                    value={mInterestRate}
                    onChange={(e) => setMInterestRate(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white font-mono"
                  />
                  <div className="flex gap-1.5 mt-1.5">
                    {[5.5, 6.5, 7.0].map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => setMInterestRate(rate)}
                        className="px-2 py-0.5 text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded"
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Loan Term</label>
                  <select
                    value={mLoanTerm}
                    onChange={(e) => setMLoanTerm(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                  >
                    <option value={30}>30 Years Fixed</option>
                    <option value={20}>20 Years Fixed</option>
                    <option value={15}>15 Years Fixed</option>
                    <option value={10}>10 Years Fixed</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Property Tax ($/yr)</label>
                  <input
                    type="number"
                    value={mPropertyTax}
                    onChange={(e) => setMPropertyTax(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Home Insurance ($/yr)</label>
                  <input
                    type="number"
                    value={mHomeInsurance}
                    onChange={(e) => setMHomeInsurance(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {calculator.id === 'loan-calculator' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Loan Principal Amount ($)</label>
                <input
                  type="number"
                  step="500"
                  value={lAmount}
                  onChange={(e) => setLAmount(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Annual Interest Rate (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={lRate}
                    onChange={(e) => setLRate(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Repayment Term (Months)</label>
                  <input
                    type="number"
                    value={lTermMonths}
                    onChange={(e) => setLTermMonths(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {calculator.id === 'compound-interest-calculator' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Initial Deposit ($)</label>
                  <input
                    type="number"
                    value={cPrincipal}
                    onChange={(e) => setCPrincipal(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Monthly Contribution ($)</label>
                  <input
                    type="number"
                    value={cMonthlyAdd}
                    onChange={(e) => setCMonthlyAdd(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Annual Return Rate (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={cRate}
                    onChange={(e) => setCRate(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Investment Horizon (Years)</label>
                  <input
                    type="number"
                    value={cYears}
                    onChange={(e) => setCYears(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Compounding Frequency</label>
                  <select
                    value={cCompoundFreq}
                    onChange={(e) => setCCompoundFreq(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                  >
                    <option value={12}>Monthly (12/yr)</option>
                    <option value={365}>Daily (365/yr)</option>
                    <option value={4}>Quarterly (4/yr)</option>
                    <option value={1}>Annually (1/yr)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {calculator.id === 'bmi-calculator' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setBmiUnit('metric')}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                    bmiUnit === 'metric'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Metric (kg / cm)
                </button>
                <button
                  type="button"
                  onClick={() => setBmiUnit('imperial')}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                    bmiUnit === 'imperial'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Imperial (lbs / feet-inches)
                </button>
              </div>

              {bmiUnit === 'metric' ? (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Height (cm)</label>
                    <input
                      type="number"
                      value={bmiHeightCm}
                      onChange={(e) => setBmiHeightCm(Number(e.target.value))}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Weight (kg)</label>
                    <input
                      type="number"
                      value={bmiWeightKg}
                      onChange={(e) => setBmiWeightKg(Number(e.target.value))}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Feet</label>
                    <input
                      type="number"
                      value={bmiHeightFt}
                      onChange={(e) => setBmiHeightFt(Number(e.target.value))}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Inches</label>
                    <input
                      type="number"
                      value={bmiHeightIn}
                      onChange={(e) => setBmiHeightIn(Number(e.target.value))}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Weight (lbs)</label>
                    <input
                      type="number"
                      value={bmiWeightLbs}
                      onChange={(e) => setBmiWeightLbs(Number(e.target.value))}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {calculator.id === 'calorie-tdee-calculator' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Biological Sex</label>
                  <select
                    value={calSex}
                    onChange={(e) => setCalSex(e.target.value as any)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Age (Years)</label>
                  <input
                    type="number"
                    value={calAge}
                    onChange={(e) => setCalAge(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Height (cm)</label>
                  <input
                    type="number"
                    value={calHeightCm}
                    onChange={(e) => setCalHeightCm(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    value={calWeightKg}
                    onChange={(e) => setCalWeightKg(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Daily Activity Level</label>
                <select
                  value={calActivity}
                  onChange={(e) => setCalActivity(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                >
                  <option value={1.2}>Sedentary (Little or no exercise)</option>
                  <option value={1.375}>Lightly active (Exercise 1-3 days/week)</option>
                  <option value={1.55}>Moderately active (Exercise 3-5 days/week)</option>
                  <option value={1.725}>Very active (Hard exercise 6-7 days/week)</option>
                  <option value={1.9}>Extra active (Hard physical labor or athlete)</option>
                </select>
              </div>
            </div>
          )}

          {calculator.id === 'percentage-calculator' && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setPctMode('whatIs')}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                    pctMode === 'whatIs' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  What is X% of Y?
                </button>
                <button
                  type="button"
                  onClick={() => setPctMode('isWhatPct')}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                    pctMode === 'isWhatPct' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  X is what % of Y?
                </button>
                <button
                  type="button"
                  onClick={() => setPctMode('change')}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                    pctMode === 'change' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  % Increase / Decrease
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    {pctMode === 'whatIs' ? 'Percentage (X %)' : pctMode === 'change' ? 'Original Value (Old)' : 'Number (X)'}
                  </label>
                  <input
                    type="number"
                    value={pctX}
                    onChange={(e) => setPctX(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    {pctMode === 'whatIs' ? 'Total Amount (Y)' : pctMode === 'change' ? 'New Value (New)' : 'Total (Y)'}
                  </label>
                  <input
                    type="number"
                    value={pctY}
                    onChange={(e) => setPctY(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {calculator.id === 'length-converter' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Value to Convert</label>
                <input
                  type="number"
                  value={convVal}
                  onChange={(e) => setConvVal(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">From Unit</label>
                  <select
                    value={convFrom}
                    onChange={(e) => setConvFrom(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                  >
                    <option value="m">Meters (m)</option>
                    <option value="km">Kilometers (km)</option>
                    <option value="ft">Feet (ft)</option>
                    <option value="in">Inches (in)</option>
                    <option value="mi">Miles (mi)</option>
                    <option value="yd">Yards (yd)</option>
                    <option value="cm">Centimeters (cm)</option>
                    <option value="mm">Millimeters (mm)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">To Unit</label>
                  <select
                    value={convTo}
                    onChange={(e) => setConvTo(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                  >
                    <option value="ft">Feet (ft)</option>
                    <option value="m">Meters (m)</option>
                    <option value="km">Kilometers (km)</option>
                    <option value="in">Inches (in)</option>
                    <option value="mi">Miles (mi)</option>
                    <option value="yd">Yards (yd)</option>
                    <option value="cm">Centimeters (cm)</option>
                    <option value="mm">Millimeters (mm)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {calculator.id === 'age-calculator' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                />
              </div>
            </div>
          )}

          {/* FALLBACK UNIVERSAL CONTROLS FOR OTHERS */}
          {![
            'mortgage-calculator',
            'loan-calculator',
            'compound-interest-calculator',
            'bmi-calculator',
            'calorie-tdee-calculator',
            'percentage-calculator',
            'length-converter',
            'age-calculator',
          ].includes(calculator.id) && (
            <div className="space-y-3">
              <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <Info className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Adjust your calculation inputs below. Computations update instantaneously.</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Primary Input 1</label>
                  <input
                    type="number"
                    defaultValue={100}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Primary Input 2</label>
                  <input
                    type="number"
                    defaultValue={25}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* REALTIME RESULTS OUTPUT COLUMN */}
        <div className="lg:col-span-5 p-5 md:p-7 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-950">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>Instant Calculation</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">
                0.00ms latency
              </span>
            </div>

            {/* BIG HIGHLIGHT NUMBER */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-950 border border-indigo-500/30 shadow-inner mb-5">
              <span className="text-xs font-medium text-indigo-300/80 block mb-1">
                {results.primaryLabel}
              </span>
              <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight break-words font-mono">
                {results.primaryValue}
              </div>
            </div>

            {/* BREAKDOWN DETAILS */}
            {results.details && results.details.length > 0 && (
              <div className="space-y-2.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Detailed Breakdown
                </span>
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 divide-y divide-slate-800/80 overflow-hidden">
                  {results.details.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between px-3.5 py-2 text-xs">
                      <span className="text-slate-400">{item.label}</span>
                      <span className="font-semibold text-slate-200 font-mono text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* FORMULA ACCORDION */}
          {results.formula && (
            <div className="mt-5 pt-4 border-t border-slate-800/80">
              <button
                onClick={() => setShowFormula(!showFormula)}
                className="flex items-center justify-between w-full text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Mathematical Formula Used</span>
                </span>
                {showFormula ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
              {showFormula && (
                <div className="mt-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-indigo-300 leading-relaxed break-words">
                  {results.formula}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
