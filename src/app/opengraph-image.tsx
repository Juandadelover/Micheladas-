import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#04141a",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,46,154,0.32) 0%, rgba(255,46,154,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            right: -140,
            width: 640,
            height: 640,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(58,221,230,0.28) 0%, rgba(58,221,230,0) 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "0 60px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              color: "#eafdff",
              opacity: 0.65,
              fontFamily: "Arial, sans-serif",
              marginBottom: 18,
            }}
          >
            BOSCONIA · CESAR
          </div>

          <div style={{ display: "flex", fontSize: 118, lineHeight: 1, fontFamily: "Georgia, serif" }}>
            <span style={{ color: "#ff54ac", fontStyle: "italic", fontWeight: 700 }}>Micheladas</span>
          </div>
          <div style={{ display: "flex", fontSize: 118, lineHeight: 1.05, fontFamily: "Georgia, serif" }}>
            <span style={{ color: "#3adde6", fontStyle: "italic", fontWeight: 700 }}>Rose</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 34,
              fontSize: 24,
              color: "#eafdff",
              opacity: 0.85,
              fontFamily: "Arial, sans-serif",
              gap: 10,
            }}
          >
            {[
              { label: "Rojos", color: "#ff3b5c" },
              { label: "Verdes", color: "#57e389" },
              { label: "Amarillos", color: "#ffb020" },
              { label: "Tamarindo", color: "#f0812f" },
              { label: "Chicle", color: "#6c8cff" },
            ].map((f, i) => (
              <div key={f.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {i > 0 && <span style={{ opacity: 0.4 }}>·</span>}
                <span
                  style={{
                    display: "flex",
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: f.color,
                  }}
                />
                <span style={{ display: "flex" }}>{f.label}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 22,
              color: "#04141a",
              background: "#ffd23f",
              padding: "10px 26px",
              borderRadius: 999,
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
            }}
          >
            Pide por WhatsApp con domicilio
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
