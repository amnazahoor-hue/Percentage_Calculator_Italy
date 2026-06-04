import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Online percentage calculator — Percentuale";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logoBuffer = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #E9EDF4 0%, #EEF1F7 50%, #E8EAFF 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28, marginBottom: 32 }}>
          <img
            src={logoSrc}
            alt=""
            width={120}
            height={120}
            style={{ borderRadius: 24 }}
          />
          <span style={{ fontSize: 48, fontWeight: 700, color: "#1C1C1E" }}>
            Percentuale
          </span>
        </div>
        <p style={{ fontSize: 36, fontWeight: 600, color: "#1C1C1E", maxWidth: 900, lineHeight: 1.3 }}>
          3D Percentage Calculator
        </p>
        <p style={{ fontSize: 24, color: "#5F6368", marginTop: 16 }}>
          Light/dark theme · Free · In English
        </p>
      </div>
    ),
    { ...size }
  );
}
