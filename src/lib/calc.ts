export type CalcType =
  | "base"
  | "percentOf"
  | "increase"
  | "decrease"
  | "difference";

export type BaseVariant = "ratio" | "of";

export interface CalcResult {
  value: number;
  formattedValue: string;
  formula: string;
  explanation: string;
}

const round = (n: number): number => Math.round(n * 100) / 100;

export const formatNumber = (n: number): string =>
  round(n).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

export const basePercent = (part: number, whole: number): CalcResult => {
  const value = (part / whole) * 100;
  const r = round(value);
  const p = formatNumber(part);
  const w = formatNumber(whole);
  const v = formatNumber(r);
  return {
    value: r,
    formattedValue: `${v}%`,
    formula: `(${p} / ${w}) × 100 = ${v}%`,
    explanation: `${p} is ${v}% of ${w}.`,
  };
};

export const percentOf = (pct: number, whole: number): CalcResult => {
  const value = (pct / 100) * whole;
  const r = round(value);
  const p = formatNumber(pct);
  const w = formatNumber(whole);
  const res = formatNumber(r);
  return {
    value: r,
    formattedValue: res,
    formula: `(${p} / 100) × ${w} = ${res}`,
    explanation: `${p}% of ${w} is ${res}.`,
  };
};

export const increase = (value: number, pct: number): CalcResult => {
  const result = value + (value * pct) / 100;
  const r = round(result);
  const v = formatNumber(value);
  const p = formatNumber(pct);
  const res = formatNumber(r);
  return {
    value: r,
    formattedValue: res,
    formula: `${v} + (${v} × ${p} / 100) = ${res}`,
    explanation: `Increasing ${v} by ${p}% gives ${res}.`,
  };
};

export const decrease = (value: number, pct: number): CalcResult => {
  const result = value - (value * pct) / 100;
  const r = round(result);
  const v = formatNumber(value);
  const p = formatNumber(pct);
  const res = formatNumber(r);
  return {
    value: r,
    formattedValue: res,
    formula: `${v} − (${v} × ${p} / 100) = ${res}`,
    explanation: `Decreasing ${v} by ${p}% (discount) gives ${res}.`,
  };
};

export const difference = (a: number, b: number): CalcResult => {
  const value = ((b - a) / a) * 100;
  const r = round(value);
  const va = formatNumber(a);
  const vb = formatNumber(b);
  const v = formatNumber(r);
  const sign = r >= 0 ? "+" : "";
  return {
    value: r,
    formattedValue: `${sign}${v}%`,
    formula: `((${vb} − ${va}) / ${va}) × 100 = ${sign}${v}%`,
    explanation: `The change from ${va} to ${vb} is ${sign}${v}%.`,
  };
};

export function calculate(
  type: CalcType,
  input1: number,
  input2: number,
  baseVariant: BaseVariant = "ratio"
): CalcResult {
  switch (type) {
    case "base":
      return baseVariant === "of"
        ? percentOf(input1, input2)
        : basePercent(input1, input2);
    case "percentOf":
      return percentOf(input1, input2);
    case "increase":
      return increase(input1, input2);
    case "decrease":
      return decrease(input1, input2);
    case "difference":
      return difference(input1, input2);
  }
}

export type TypeToggleMode = "base" | "increase" | "decrease" | "difference";

export const calcTypeLabels: Record<
  CalcType,
  {
    label: string;
    input1: string;
    input2: string;
    shortInput1: string;
    shortInput2: string;
    placeholder1: string;
    placeholder2: string;
    modeHint: string;
  }
> = {
  base: {
    label: "X is % of Y",
    input1: "Partial value (X)",
    input2: "Total value (Y)",
    shortInput1: "Value X",
    shortInput2: "Total Y",
    placeholder1: "e.g. 20",
    placeholder2: "e.g. 80",
    modeHint: "What percentage is X of Y?",
  },
  percentOf: {
    label: "X% of Y",
    input1: "Percentage (%)",
    input2: "Total value (Y)",
    shortInput1: "Percent",
    shortInput2: "Total Y",
    placeholder1: "e.g. 15",
    placeholder2: "e.g. 200",
    modeHint: "What is X% of the number Y?",
  },
  increase: {
    label: "Increase",
    input1: "Starting value",
    input2: "Increase percent",
    shortInput1: "Value",
    shortInput2: "% increase",
    placeholder1: "e.g. 100",
    placeholder2: "e.g. 15",
    modeHint: "Add a percentage to the starting value.",
  },
  decrease: {
    label: "Decrease",
    input1: "Starting value",
    input2: "Discount percent",
    shortInput1: "Value",
    shortInput2: "% off",
    placeholder1: "e.g. 100",
    placeholder2: "e.g. 10",
    modeHint: "Apply a discount or percentage reduction.",
  },
  difference: {
    label: "Difference",
    input1: "Starting value (A)",
    input2: "Ending value (B)",
    shortInput1: "Value A",
    shortInput2: "Value B",
    modeHint: "Percent change between two values.",
    placeholder1: "e.g. 50",
    placeholder2: "e.g. 75",
  },
};

export const typeToggleModes: {
  id: TypeToggleMode;
  label: string;
}[] = [
  { id: "base", label: "Percent" },
  { id: "increase", label: "Increase" },
  { id: "decrease", label: "Decrease" },
  { id: "difference", label: "Difference" },
];

export function resolveCalcType(
  mode: TypeToggleMode,
  baseVariant: BaseVariant
): CalcType {
  if (mode === "base") return baseVariant === "of" ? "percentOf" : "base";
  return mode;
}

export function parseInput(raw: string): number | null {
  const normalized = raw.trim().replace(",", ".");
  if (normalized === "" || normalized === "-") return null;
  const n = Number(normalized);
  return Number.isFinite(n) ? n : null;
}

export function validateInputs(
  mode: TypeToggleMode,
  baseVariant: BaseVariant,
  input1: string,
  input2: string
): { input1?: string; input2?: string } {
  const errors: { input1?: string; input2?: string } = {};
  const v1 = parseInput(input1);
  const v2 = parseInput(input2);

  if (v1 === null) errors.input1 = "Enter a valid value";
  if (v2 === null) errors.input2 = "Enter a valid value";

  const calcType = resolveCalcType(mode, baseVariant);

  if (
    (calcType === "base" || calcType === "percentOf") &&
    v2 !== null &&
    v2 === 0 &&
    calcType === "base"
  ) {
    errors.input2 = "Cannot divide by zero";
  }
  if (calcType === "difference" && v1 !== null && v1 === 0) {
    errors.input1 = "Starting value cannot be zero";
  }

  return errors;
}
