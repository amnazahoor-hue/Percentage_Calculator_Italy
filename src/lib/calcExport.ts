import { jsPDF } from "jspdf";
import {
  calcTypeLabels,
  resolveCalcType,
  type BaseVariant,
  type CalcResult,
  type TypeToggleMode,
} from "@/lib/calc";
import { siteConfig } from "@/lib/site";

export interface CalcExportPayload {
  mode: TypeToggleMode;
  baseVariant: BaseVariant;
  input1: string;
  input2: string;
  result: CalcResult;
}

const BRAND = {
  primary: "#4f46e5",
  accent: "#ff7a45",
  text: "#1c1c1e",
  muted: "#5f6368",
  surface: "#ffffff",
  bg: "#e9edf4",
};

function getExportMeta(payload: CalcExportPayload) {
  const calcType = resolveCalcType(payload.mode, payload.baseVariant);
  const labels = calcTypeLabels[calcType];
  const modeLabel =
    payload.mode === "base"
      ? labels.label
      : typeToggleLabel(payload.mode);

  return {
    calcType,
    labels,
    modeLabel,
    generatedAt: new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
  };
}

function typeToggleLabel(mode: TypeToggleMode): string {
  const map: Record<TypeToggleMode, string> = {
    base: "Percent",
    increase: "Increase",
    decrease: "Decrease",
    difference: "Difference",
  };
  return map[mode];
}

export function buildShareText(payload: CalcExportPayload): string {
  const { labels, modeLabel, generatedAt } = getExportMeta(payload);

  return [
    `*${siteConfig.name} — Calculation Result*`,
    "",
    `Mode: ${labels.modeHint}`,
    `Type: ${modeLabel}`,
    `${labels.input1}: ${payload.input1 || "—"}`,
    `${labels.input2}: ${payload.input2 || "—"}`,
    "",
    `*Result:* ${payload.result.formattedValue}`,
    `Formula: ${payload.result.formula}`,
    payload.result.explanation,
    "",
    `Generated: ${generatedAt}`,
    siteConfig.url,
  ].join("\n");
}

export function shareOnWhatsApp(payload: CalcExportPayload): void {
  const text = encodeURIComponent(buildShareText(payload));
  window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
}

export function shareByEmail(payload: CalcExportPayload): void {
  const { labels } = getExportMeta(payload);
  const subject = encodeURIComponent(
    `${siteConfig.name} — ${labels.modeHint} (${payload.result.formattedValue})`
  );
  const body = encodeURIComponent(buildShareText(payload));
  window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
}

async function loadLogoDataUrl(): Promise<string | null> {
  try {
    const response = await fetch("/logo.png");
    if (!response.ok) return null;
    const blob = await response.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

function drawBrandMark(doc: jsPDF, x: number, y: number, size: number) {
  doc.setFillColor(BRAND.primary);
  doc.roundedRect(x, y, size, size, 4, 4, "F");
  doc.setTextColor("#ffffff");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(size * 0.42);
  doc.text("%", x + size / 2, y + size * 0.68, { align: "center" });
}

function addWrappedText(
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number {
  const lines = doc.splitTextToSize(text, maxWidth) as string[];
  lines.forEach((line, index) => {
    doc.text(line, x, y + index * lineHeight);
  });
  return y + lines.length * lineHeight;
}

export async function exportCalculationPdf(
  payload: CalcExportPayload
): Promise<void> {
  const { labels, modeLabel, generatedAt } = getExportMeta(payload);
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 0;

  doc.setFillColor(BRAND.primary);
  doc.rect(0, 0, pageWidth, 34, "F");

  const logoDataUrl = await loadLogoDataUrl();
  const logoSize = 14;
  if (logoDataUrl) {
    doc.addImage(logoDataUrl, "PNG", margin, 10, logoSize, logoSize);
  } else {
    drawBrandMark(doc, margin, 10, logoSize);
  }

  doc.setTextColor("#ffffff");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(siteConfig.name, margin + logoSize + 5, 17);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("Official Calculation Report", margin + logoSize + 5, 23);

  doc.setTextColor(BRAND.muted);
  doc.setFontSize(8);
  doc.text(generatedAt, pageWidth - margin, 17, { align: "right" });

  y = 44;
  doc.setFillColor(BRAND.bg);
  doc.roundedRect(margin, y, contentWidth, 12, 2, 2, "F");
  doc.setTextColor(BRAND.text);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Percentage Calculation Summary", margin + 4, y + 8);

  y += 20;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(BRAND.muted);
  doc.text("Calculation mode", margin, y);
  doc.setTextColor(BRAND.text);
  doc.setFont("helvetica", "bold");
  y = addWrappedText(doc, labels.modeHint, margin, y + 5, contentWidth, 5);

  y += 4;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(BRAND.muted);
  doc.text("Type", margin, y);
  doc.setTextColor(BRAND.text);
  y = addWrappedText(doc, modeLabel, margin, y + 5, contentWidth, 5);

  y += 6;
  const colWidth = (contentWidth - 6) / 2;
  doc.setFillColor(BRAND.surface);
  doc.setDrawColor(220, 224, 232);
  doc.roundedRect(margin, y, colWidth, 22, 2, 2, "FD");
  doc.roundedRect(margin + colWidth + 6, y, colWidth, 22, 2, 2, "FD");

  doc.setTextColor(BRAND.muted);
  doc.setFontSize(8);
  doc.text(labels.input1, margin + 4, y + 7);
  doc.text(labels.input2, margin + colWidth + 10, y + 7);
  doc.setTextColor(BRAND.text);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text(payload.input1 || "—", margin + 4, y + 16);
  doc.text(payload.input2 || "—", margin + colWidth + 10, y + 16);

  y += 30;
  doc.setFillColor(239, 241, 255);
  doc.roundedRect(margin, y, contentWidth, 28, 3, 3, "F");
  doc.setTextColor(BRAND.primary);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Result", margin + 4, y + 8);
  doc.setFontSize(22);
  doc.text(payload.result.formattedValue, margin + 4, y + 20);

  y += 36;
  doc.setTextColor(BRAND.text);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Formula", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(BRAND.muted);
  y = addWrappedText(doc, payload.result.formula, margin, y + 6, contentWidth, 5);

  y += 4;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(BRAND.text);
  doc.text("Explanation", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(BRAND.muted);
  y = addWrappedText(doc, payload.result.explanation, margin, y + 6, contentWidth, 5);

  const footerY = 268;
  doc.setDrawColor(BRAND.primary);
  doc.setLineWidth(0.6);
  doc.line(margin, footerY, pageWidth - margin, footerY);

  doc.setFillColor(BRAND.primary);
  doc.circle(margin + 3, footerY + 10, 3, "F");
  doc.setTextColor("#ffffff");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.text("%", margin + 3, footerY + 11.2, { align: "center" });

  doc.setTextColor(BRAND.text);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text(`${siteConfig.name} — Free Percentage Calculator`, margin + 8, footerY + 8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(BRAND.muted);
  doc.setFontSize(8);
  doc.text(siteConfig.tagline, margin + 8, footerY + 13);
  doc.text(`Website: ${siteConfig.url}`, margin + 8, footerY + 18);
  doc.text(`Email: ${siteConfig.contactEmail}`, margin + 8, footerY + 23);
  doc.text(
    "This document was generated automatically by Percentuale. Results are for informational purposes.",
    margin + 8,
    footerY + 28,
    { maxWidth: contentWidth - 8 }
  );

  const dateStamp = new Date().toISOString().slice(0, 10);
  doc.save(`percentuale-calculation-${dateStamp}.pdf`);
}
