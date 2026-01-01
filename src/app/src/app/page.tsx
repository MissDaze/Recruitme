export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 600, textAlign: "center", padding: 24 }}>
        <h1>Recruit Me</h1>

        <p>
          Assess your readiness for online work platforms before you apply.
        </p>

        <a
          href="/assess"
          style={{
            display: "inline-block",
            marginTop: 20,
            padding: "12px 20px",
            background: "black",
            color: "white",
            textDecoration: "none",
            borderRadius: 6,
          }}
        >
          Start Free Readiness Test
        </a>

        <p style={{ fontSize: 12, marginTop: 20, color: "#666" }}>
          Not affiliated with any hiring platform. Results are estimates only.
        </p>
      </div>
    </main>
  );
}
