export default function ReasoningAssessment() {
  return (
    <main style={{ padding: 32, maxWidth: 700, margin: "0 auto" }}>
      <h2>Reasoning & Judgment Assessment</h2>

      <p>
        Answer the question below by explaining your thinking clearly and
        step-by-step.
      </p>

      <p
        style={{
          background: "#f3f3f3",
          padding: 16,
          borderRadius: 6,
        }}
      >
        You receive a task with unclear instructions and a short deadline. What
        steps would you take to complete the task effectively?
      </p>

      <textarea
        rows={6}
        style={{ width: "100%", marginTop: 16 }}
        placeholder="Explain your approach..."
      />

      <a
        href="/assess/interview"
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
        Next Section
      </a>
    </main>
  );
}
