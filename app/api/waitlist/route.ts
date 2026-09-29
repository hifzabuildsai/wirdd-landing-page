import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const KIT_FORM_ID = process.env.KIT_FORM_ID;

    if (!KIT_FORM_ID) {
      return NextResponse.json({ error: "Waitlist unavailable" }, { status: 503 });
    }

    // Correct endpoint — still uses convertkit.com domain
    const kitRes = await fetch(
      `https://app.convertkit.com/forms/${KIT_FORM_ID}/subscriptions`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email_address: email }),
      }
    );

    if (!kitRes.ok) {
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
