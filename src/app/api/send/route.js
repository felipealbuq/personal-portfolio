import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: ` ${email} <onboarding@resend.dev>`,
      to: ["felipeqwe65@gmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <h3>New message submitted:</h3>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
