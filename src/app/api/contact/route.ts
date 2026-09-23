import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/config";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

function isValidPayload(data: unknown): data is ContactPayload {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === "string" &&
    d.name.trim().length > 0 &&
    typeof d.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.message === "string" &&
    d.message.trim().length > 0
  );
}

export async function POST(request: Request) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    return NextResponse.json(
      { error: "Email sending is not configured on the server." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Please fill in all required fields correctly." },
      { status: 400 }
    );
  }

  const { name, email, phone, company, service, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const textLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Company: ${company}` : null,
    service ? `Service interested in: ${service}` : null,
    "",
    message,
  ].filter(Boolean);

  try {
    await transporter.sendMail({
      from: `"${siteConfig.name} Website" <${gmailUser}>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
      text: textLines.join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 }
    );
  }
}
