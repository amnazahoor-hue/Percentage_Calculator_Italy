"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { CalcDisplay } from "@/components/calc/CalcDisplay";
import { CalcField } from "@/components/calc/CalcField";
import { CalcKeypad } from "@/components/calc/CalcKeypad";
import { CalcShareActions } from "@/components/calc/CalcShareActions";
import { TypeToggle } from "@/components/calc/TypeToggle";
import { NeuKey } from "@/components/calc/NeuKey";
import {
  calculate,
  calcTypeLabels,
  parseInput,
  resolveCalcType,
  validateInputs,
  type BaseVariant,
  type CalcResult,
  type TypeToggleMode,
} from "@/lib/calc";
import { cn } from "@/lib/cn";

type ActiveField = "input1" | "input2";
export type CalculatorVariant = "default" | "compact" | "hero";

interface CalculatorProps {
  variant?: CalculatorVariant;
  /** @deprecated Usa variant="compact" */
  compact?: boolean;
}

export function Calculator({
  variant: variantProp,
  compact = false,
}: CalculatorProps) {
  const variant: CalculatorVariant =
    variantProp ?? (compact ? "compact" : "default");
  const isHero = variant === "hero";
  const isDense = variant === "compact";

  const [mode, setMode] = useState<TypeToggleMode>("base");
  const [baseVariant, setBaseVariant] = useState<BaseVariant>("ratio");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [activeField, setActiveField] = useState<ActiveField>("input1");
  const [errors, setErrors] = useState<{ input1?: string; input2?: string }>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CalcResult | null>(null);

  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);

  const calcType = resolveCalcType(mode, baseVariant);
  const labels = calcTypeLabels[calcType];

  const setFieldValue = useCallback(
    (field: ActiveField, value: string) => {
      if (field === "input1") {
        setInput1(value);
        setErrors((e) => ({ ...e, input1: undefined }));
      } else {
        setInput2(value);
        setErrors((e) => ({ ...e, input2: undefined }));
      }
      setResult(null);
    },
    []
  );

  const activeValue = activeField === "input1" ? input1 : input2;

  const setActiveValue = useCallback(
    (value: string) => setFieldValue(activeField, value),
    [activeField, setFieldValue]
  );

  const handleKey = useCallback(
    (key: string) => {
      if (key === "," && (activeValue.includes(",") || activeValue.includes(".")))
        return;
      setActiveValue(activeValue + key);
      if (activeField === "input1") input1Ref.current?.focus();
      else input2Ref.current?.focus();
    },
    [activeValue, activeField, setActiveValue]
  );

  const handleBackspace = useCallback(() => {
    setActiveValue(activeValue.slice(0, -1));
  }, [activeValue, setActiveValue]);

  const handleClearField = useCallback(() => {
    setActiveValue("");
  }, [setActiveValue]);

  const handleResetAll = useCallback(() => {
    setInput1("");
    setInput2("");
    setErrors({});
    setResult(null);
    setActiveField("input1");
    input1Ref.current?.focus();
  }, []);

  const handleCalculate = useCallback(() => {
    const nextErrors = validateInputs(mode, baseVariant, input1, input2);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setResult(null);
      if (nextErrors.input1) input1Ref.current?.focus();
      else if (nextErrors.input2) input2Ref.current?.focus();
      return;
    }

    const v1 = parseInput(input1)!;
    const v2 = parseInput(input2)!;
    const type = resolveCalcType(mode, baseVariant);

    setLoading(true);
    setResult(null);

    window.setTimeout(() => {
      setResult(calculate(type, v1, v2, baseVariant));
      setLoading(false);
    }, 350);
  }, [mode, baseVariant, input1, input2]);

  const tryAdvanceToField2 = useCallback(() => {
    if (parseInput(input1) !== null && !input2) {
      setActiveField("input2");
      input2Ref.current?.focus();
    }
  }, [input1, input2]);

  const expression = useMemo(() => {
    if (result) return result.explanation;
    return labels.modeHint;
  }, [result, labels.modeHint]);

  const switchMode = (next: TypeToggleMode) => {
    setMode(next);
    setErrors({});
    setResult(null);
    setActiveField("input1");
    window.setTimeout(() => input1Ref.current?.focus(), 0);
  };

  const canCalculate =
    parseInput(input1) !== null && parseInput(input2) !== null;

  useEffect(() => {
    if (isHero) return;
    const t = window.setTimeout(() => input1Ref.current?.focus(), 300);
    return () => window.clearTimeout(t);
  }, [isHero]);

  return (
    <div
      id="strumento"
      className={cn(
        "neu-panel w-full scroll-mt-24",
        isHero &&
          "neu-panel-hero hero-calc-panel mx-auto flex max-w-full min-h-0 flex-col p-3.5 sm:p-4 lg:p-3.5",
        !isHero && "max-w-none",
        isDense && !isHero && "rounded-[20px] p-3 sm:p-3.5",
        variant === "default" && "max-w-md p-4 sm:p-5 lg:max-w-none"
      )}
      aria-label="Percentage calculator"
    >
      {!isHero && (
        <p
          className={cn(
            "mb-2 text-center text-muted",
            isDense ? "text-[10px]" : "text-xs"
          )}
        >
          <span className="font-medium text-text">1.</span> Type ·{" "}
          <span className="font-medium text-text">2.</span> Values ·{" "}
          <span className="font-medium text-text">3.</span> Calculate
        </p>
      )}

      <CalcDisplay
        expression={expression}
        result={result}
        loading={loading}
        placeholder="Your result will appear here"
        compact={isDense}
        hero={isHero}
        showFormula={variant === "default" || (isHero && !!result)}
      />

      <TypeToggle
        mode={mode}
        baseVariant={baseVariant}
        onModeChange={switchMode}
        onBaseVariantChange={(v) => {
          setBaseVariant(v);
          setResult(null);
        }}
        compact={isDense || isHero}
        hero={isHero}
        hint={isHero ? undefined : labels.modeHint}
      />

      <div
        className={cn(
          "grid grid-cols-2 gap-2",
          isHero ? "mb-2.5 gap-2.5 lg:mb-3 lg:gap-2.5" : isDense ? "mb-2 gap-2" : "mb-3 gap-3"
        )}
      >
        <CalcField
          ref={input1Ref}
          id="calc-input-1"
          label={labels.input1}
          shortLabel={labels.shortInput1}
          value={input1}
          placeholder={labels.placeholder1}
          active={activeField === "input1"}
          error={errors.input1}
          disabled={loading}
          compact={isDense}
          hero={isHero}
          onFocus={() => setActiveField("input1")}
          onChange={(v) => setFieldValue("input1", v)}
          onEnter={tryAdvanceToField2}
        />
        <CalcField
          ref={input2Ref}
          id="calc-input-2"
          label={labels.input2}
          shortLabel={labels.shortInput2}
          value={input2}
          placeholder={labels.placeholder2}
          active={activeField === "input2"}
          error={errors.input2}
          disabled={loading}
          compact={isDense}
          hero={isHero}
          onFocus={() => setActiveField("input2")}
          onChange={(v) => setFieldValue("input2", v)}
          onEnter={handleCalculate}
        />
      </div>

      {!isHero && (
        <p
          className={cn(
            "mb-2 text-center text-muted",
            isDense ? "text-[10px]" : "text-xs"
          )}
        >
          Type above or use the keypad · Enter to calculate
        </p>
      )}

      <CalcKeypad
        onKey={handleKey}
        onBackspace={handleBackspace}
        onClear={handleClearField}
        disabled={loading}
        compact={isDense}
        hero={isHero}
      />

      <div
        className={cn(
          "grid grid-cols-[1fr_auto] gap-2",
          isHero ? "mt-2.5 pt-2.5 lg:mt-3 lg:pt-3" : "mt-2"
        )}
      >
        <NeuKey
          className={cn(
            "neu-key--primary w-full font-semibold",
            isHero
              ? "!min-h-[48px] !text-base lg:!min-h-[50px]"
              : isDense
                ? "!min-h-[44px] !text-sm"
                : "!min-h-[52px] !text-base",
            !canCalculate && "!opacity-70"
          )}
          disabled={loading}
          onClick={handleCalculate}
          aria-label="Calculate result"
        >
          {loading ? "Calculating…" : "Calculate"}
        </NeuKey>

        <NeuKey
          className={cn(
            "flex items-center justify-center gap-1 font-medium text-muted",
            isHero
              ? "!min-h-[48px] !min-w-[3.25rem] !px-2 !text-xs lg:!min-h-[50px]"
              : isDense
                ? "!min-h-[40px] !text-xs"
                : "!min-h-[52px] !min-w-[7.5rem] !text-sm"
          )}
          disabled={loading}
          onClick={handleResetAll}
          aria-label="Clear all fields"
          title="Clear"
        >
          <RotateCcw className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Clear</span>
        </NeuKey>
      </div>

      {result && !loading && (
        <CalcShareActions
          mode={mode}
          baseVariant={baseVariant}
          input1={input1}
          input2={input2}
          result={result}
          hero={isHero}
          compact={isDense}
        />
      )}
    </div>
  );
}
