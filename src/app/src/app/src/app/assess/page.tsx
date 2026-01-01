export default function AssessIntro() {
  return (
    <main style={{ padding: 32, maxWidth: 600, margin: "0 auto" }}>
      <h2>Readiness Assessment</h2>

      <p>
        This assessment evaluates language proficiency, reasoning, and written
        communication.
      </p>

      <ul>
        <li>Language proficiency</li>
        <li>Reasoning & judgment</li>
        <li>Written interview simulation</li>
      </ul>

      <p style={{ fontSize: 14, color: "#555" }}>
        ⏱ Estimated time: 45–60 minutes
      </p>

      <a
        href="/assess/language"
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "10px 18px",
          background: "black",
          color: "white",
          textDecoration: "none",
          borderRadius: 6,
        }}
      >
        Begin Assessment
      </a>
    </main>
  );
}
