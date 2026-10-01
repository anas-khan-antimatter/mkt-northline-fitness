import { NextResponse } from "next/server";

const movements = [
  "Deadlift", "Back Squat", "Front Squat", "Overhead Press",
  "Bench Press", "Power Clean", "Snatch", "Push Jerk",
  "Pull-up", "C2B Pull-up", "Muscle-up", "Ring Dip",
  "Handstand Push-up", "Burpee", "Box Jump", "Wall Ball",
  "Thruster", "Kettlebell Swing", "Lunge", "Row (cal)",
  "SkiErg (cal)", "Assault Bike (cal)", "Toes-to-Bar",
  "Knees-to-Elbow", "GHD Sit-up", "Double-under",
  "Single-under", "Dumbbell Snatch", "Dumbbell Clean & Jerk",
];

const emoms = [
  { set: "5 Burpees + 10 Air Squats", note: "Strict — no kipping" },
  { set: "10 Kettlebell Swings (53/35)", note: "Russian style to eye-level" },
  { set: "8 Box Jumps (24/20)", note: "Step down, controlled landing" },
  { set: "12 Wall Balls (20/14)", note: "Target 10ft / 9ft" },
  { set: "6 Strict Pull-ups", note: "Dead hang, full extension" },
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickN<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

function generateWOD() {
  const types = ["AMRAP", "For Time", "EMOM", "Chipper", "Ladder"] as const;
  const type = pick(types);

  let wod: Record<string, unknown>;

  switch (type) {
    case "AMRAP":
      wod = {
        type: "AMRAP",
        duration: `${pick([8, 10, 12, 15, 20])} minutes`,
        rounds: "As Many Rounds As Possible",
        movements: pickN(movements, pick([2, 3, 4])),
        repScheme: pick(["21-15-9", "15-12-9", "10-8-6", "21-18-15-12-9"]),
        note: "Score = total rounds + partial reps",
      };
      break;
    case "For Time":
      wod = {
        type: "For Time",
        movements: pickN(movements, pick([2, 3, 4])),
        reps: pick(["21-15-9", "15-12-9", "10-9-8-7-6-5-4-3-2-1", "50-40-30-20-10"]),
        cap: `${pick([8, 10, 12, 15])} minute time cap`,
        note: "Fastest time wins. If capped, record reps completed.",
      };
      break;
    case "EMOM":
      wod = {
        type: "EMOM",
        duration: `${pick([10, 12, 15, 20])} minutes`,
        minute: pick(emoms),
        note: "Every Minute On the Minute. Rest remainder of minute.",
      };
      break;
    case "Chipper":
      wod = {
        type: "Chipper",
        movements: pickN(movements, pick([4, 5, 6])),
        reps: pickN(["50", "40", "30", "20", "10", "15"], 5).join("-"),
        cap: `${pick([15, 18, 20])} minute time cap`,
        note: "Complete all reps in order as fast as possible.",
      };
      break;
    default:
      wod = {
        type: "Ladder",
        movements: pickN(movements, 2),
        scheme: "1-2-3-4-5-6-5-4-3-2-1",
        note: "Climb up, then back down. No rest.",
      };
  }

  return {
    date: new Date().toISOString().split("T")[0],
    title: `${pick(["Warrior", "Anvil", "Ironclad", "Titan", "Brutal", "Furnace", "Grind", "Havoc"])} ${pick(["Sweat", "Session", "Circuit", "Gauntlet", "Surge", "Smash", "Pulse", "Forge"])}`,
    ...wod,
  };
}

export async function GET() {
  const wod = generateWOD();
  return NextResponse.json(wod);
}