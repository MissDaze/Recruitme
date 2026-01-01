export default function LanguageAssessment() {
  return (
    <main style={{ padding: 32, maxWidth: 700, margin: "0 auto" }}>
      <h2>Language Proficiency Assessment</h2>

      <p>
        Read the instruction below and summarize it clearly in your own words.
      </p>

      <p
        style={{
          background: "#f3f3f3",
          padding: 16,
          borderRadius: 6,
        }}
      >
        You should complete each task carefully. Focus on clarity, accuracy, and
        following instructions exactly as written.
      </p>

      <textarea
        rows={6}
        style={{ width: "100%", marginTop: 16 }}
        placeholder="Write your summary here..."
      />

      <a
        href="/assess/reasoning"
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
