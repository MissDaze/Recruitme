export default function ResultsPage() {
  return (
    <main style={{ padding: 32, maxWidth: 700, margin: "0 auto" }}>
      <h2>Your Readiness Results</h2>

      <p>
        Thank you for completing the assessment. Your responses are being
        evaluated to determine your readiness level.
      </p>

      <div
        style={{
          marginTop: 20,
          padding: 16,
          background: "#f3f3f3",
          borderRadius: 6,
        }}
      >
        <h3>Readiness Band</h3>
        <p><strong>Developing</strong></p>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>What this means</h3>
        <p>
          You show potential, but there are areas that would benefit from
          targeted preparation before applying.
        </p>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Recommended Next Steps</h3>
        <ul>
          <li>Improve written clarity and structure</li>
          <li>Practice reasoning through ambiguous tasks</li>
          <li>Review professional communication best practices</li>
        </ul>
      </div>

      <p style={{ fontSize: 14, color: "#666", marginTop: 30 }}>
        This result is an estimate and not a guarantee of acceptance.
      </p>
    </main>
  );
}
