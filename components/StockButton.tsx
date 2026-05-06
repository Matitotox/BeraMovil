export default function StockButton() {
  return (
    <a
      id="stock-badge"
      target="_blank"
      rel="noopener noreferrer"
      href="PONÉ_ACÁ_TU_LINK_DE_DRIVE"
      style={{
        display: "inline-flex",
        boxSizing: "border-box",
        width: "178px",
        height: "40px",
        padding: "8px 12px",
        alignItems: "center",
        gap: "8px",
        borderRadius: "50px",
        background: "#000",
        position: "fixed",
        bottom: "16px",
        right: "16px",
        textDecoration: "none",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
        fontSize: "12px",
        zIndex: 9999,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M2 2H14V14H2V2Z"
          fill="white"
        />
      </svg>

      <p
        style={{
          color: "#FFF",
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
          fontWeight: 600,
          lineHeight: "20px",
          margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        Ver Stock
      </p>
    </a>
  );
}