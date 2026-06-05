"use client";

import { useState } from "react";
import { FileDown, Mail } from "lucide-react";
import {
  exportCalculationPdf,
  shareByEmail,
  shareOnWhatsApp,
  type CalcExportPayload,
} from "@/lib/calcExport";
import { WhatsAppLogo } from "@/components/icons/WhatsAppLogo";
import { cn } from "@/lib/cn";

interface CalcShareActionsProps extends CalcExportPayload {
  hero?: boolean;
  compact?: boolean;
}

export function CalcShareActions({
  hero = false,
  compact = false,
  ...payload
}: CalcShareActionsProps) {
  const [exporting, setExporting] = useState(false);

  const handlePdfExport = async () => {
    setExporting(true);
    try {
      await exportCalculationPdf(payload);
    } finally {
      setExporting(false);
    }
  };

  const buttonClass = cn(
    "inline-flex min-h-[40px] flex-1 items-center justify-center gap-2 rounded-xl border text-sm font-semibold transition-all duration-200",
    "border-border/70 bg-surface text-text shadow-sm hover:border-primary/30 hover:bg-primary/5",
    hero && "min-h-[42px] text-xs sm:text-sm",
    compact && "min-h-[38px] text-xs"
  );

  return (
    <div
      className={cn(
        "border-t border-border/50",
        hero ? "mt-3 pt-3" : "mt-3 pt-3",
        compact && "mt-2.5 pt-2.5"
      )}
      aria-label="Share and export calculation"
    >
      <p
        className={cn(
          "mb-2 font-medium text-muted",
          hero || compact ? "text-[11px]" : "text-xs"
        )}
      >
        Share or export your result
      </p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <button
          type="button"
          className={cn(
            buttonClass,
            "gap-2.5 border-[#25D366]/30 bg-surface hover:border-[#25D366]/55 hover:bg-[#25D366]/6"
          )}
          onClick={() => shareOnWhatsApp(payload)}
        >
          <WhatsAppLogo className="h-6 w-6" />
          <span className="font-semibold text-[#25D366]">WhatsApp</span>
        </button>

        <button
          type="button"
          className={buttonClass}
          disabled={exporting}
          onClick={handlePdfExport}
        >
          <FileDown className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          {exporting ? "Exporting…" : "PDF Export"}
        </button>

        <button
          type="button"
          className={buttonClass}
          onClick={() => shareByEmail(payload)}
        >
          <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          Email
        </button>
      </div>
    </div>
  );
}
