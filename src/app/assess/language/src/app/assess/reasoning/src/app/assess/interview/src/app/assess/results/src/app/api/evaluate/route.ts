import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // In the next step, we will:
  // 1. Read user answers from request.json()
  // 2. Send them to Gemini
  // 3. Get structured feedback
  // 4. Return readiness results

  return NextResponse.json({
    readiness_band: "Developing",
    explanation: "This is a placeholder evaluation.",
    next_steps: [
      "Improve written clarity",
      "Practice reasoning through ambiguous tasks",
      "Review professional communication guidelines"
    ]
  });
}
