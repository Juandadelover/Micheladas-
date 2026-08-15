import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#04141a",
          borderRadius: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "#0a2530",
            border: "2px solid #3adde6",
            boxShadow: "0 0 14px #3adde6",
            fontSize: 24,
            fontWeight: 800,
            color: "#ff2e9a",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
          }}
        >
          MR
        </div>
      </div>
    ),
    { ...size },
  );
}
