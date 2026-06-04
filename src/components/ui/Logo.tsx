import Image from "next/image";
import { cn } from "@/lib/cn";

const LOGO_SRC = "/logo.png";
const BRAND_NAME = "Percentuale";

type LogoVariant = "full" | "icon";

interface LogoProps {
  variant?: LogoVariant;
  showName?: boolean;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function Logo({
  variant = "full",
  showName = true,
  className,
  width,
  height,
  priority = false,
}: LogoProps) {
  const defaultSize = variant === "icon" ? 40 : 52;
  const w = width ?? defaultSize;
  const h = height ?? defaultSize;

  const image = (
    <Image
      src={LOGO_SRC}
      alt={`${BRAND_NAME} — Percentage calculator`}
      width={w}
      height={h}
      className="shrink-0 rounded-xl object-contain"
      priority={priority}
    />
  );

  if (variant !== "full" || !showName) {
    return <span className={cn("inline-flex shrink-0", className)}>{image}</span>;
  }

  return (
    <span className={cn("inline-flex shrink-0 items-center gap-2.5 sm:gap-3", className)}>
      {image}
      <span className="type-brand sm:text-[1.2rem]">
        {BRAND_NAME}
      </span>
    </span>
  );
}
