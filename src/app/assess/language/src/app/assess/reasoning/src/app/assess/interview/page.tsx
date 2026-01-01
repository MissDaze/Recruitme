export default function InterviewAssessment() {
  return (
    <main style={{ padding: 32, maxWidth: 700, margin: "0 auto" }}>
      <h2>Written Interview Simulation</h2>

      <p>
        Answer the questions below as you would in a professional interview.
        Focus on clarity, structure, and professionalism.
      </p>

      <p style={{ fontWeight: "bold", marginTop: 20 }}>
        Question 1
      </p>
      <p>
        Describe a time you had to learn a new skill quickly. How did you
        approach it?
      </p>

      <textarea
        rows={6}
        style={{ width: "100%", marginTop: 10 }}
        placeholder="Write your response here..."
      />

      <p style={{ fontWeight: "bold", marginTop: 30 }}>
        Question 2
      </p>
      <p>
        How do you ensure quality when working independently?
      </p>

      <textarea
        rows={6}
        style={{ width: "100%", marginTop: 10 }}
        placeholder="Write your response here..."
      />

      <p style={{ fontSize: 14, color: "#666", marginTop: 20 }}>
        🎥 Video interview practice coming soon.
      </p>

      <a
        href="/assess/results"
        style={{
          display: "inline-block",
          marginTop: 30,
          padding: "10px 18px",
          background: "black",
          color: "white",
          textDecoration: "none",
          borderRadius: 6,
        }}
      >
        Submit Assessment
      </a>
    </main>
  );
}
