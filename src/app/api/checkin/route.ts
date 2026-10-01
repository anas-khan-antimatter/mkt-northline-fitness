import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, mood, energy, soreness, todayWorkout, notes } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    // In production, this would save to a database
    const checkin = {
      id: `ck-${Date.now()}`,
      name,
      email,
      mood: mood || "neutral",
      energy: energy || 5,
      soreness: soreness || 3,
      todayWorkout: todayWorkout || "",
      notes: notes || "",
      submittedAt: new Date().toISOString(),
    };

    return NextResponse.json({ ok: true, checkin }, { status: 201 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }
}