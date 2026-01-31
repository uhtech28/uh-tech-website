import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, date, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* 📩 MAIL TO YOU */
    await transporter.sendMail({
      from: `"UH TECH Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    /* 📩 AUTO-REPLY TO USER */
    await transporter.sendMail({
      from: `"UH TECH" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting UH TECH",
      html: `
        <p>Hi <b>${name}</b>,</p>
        <p>Thank you for contacting <b>UH TECH</b>.</p>
        <p>We’ve received your message and will get back to you shortly.</p>
        <br />
        <p>Regards,<br/>UH TECH Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
