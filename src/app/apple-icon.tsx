import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 30% 20%, #0f3240, #04141a)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 148,
            height: 148,
            borderRadius: "50%",
            background: "#0a2530",
            border: "5px solid #3adde6",
            boxShadow: "0 0 30px rgba(58,221,230,0.7)",
          }}
        >
          <div
            style={{
              fontSize: 54,
              fontWeight: 800,
              fontStyle: "italic",
              fontFamily: "Georgia, serif",
              color: "#ff2e9a",
              lineHeight: 1,
            }}
          >
            MR
          </div>
          <div
            style={{
              marginTop: 6,
              fontSize: 13,
              letterSpacing: 3,
              color: "#eafdff",
              fontFamily: "Arial, sans-serif",
            }}
          >
            ROSE
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
