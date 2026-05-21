import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, service, message } = body

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const serviceLabels: Record<string, string> = {
      "ducting-materials": "Ducting Materials",
      "ducting-work": "Ducting Work",
      "evaporative-coolers": "Symphony Evaporative Coolers",
      "maintenance": "Maintenance Services",
      "consultation": "Free Consultation",
    }

    const serviceLabel = serviceLabels[service] || service

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Enquiry – Prakriti Aircon</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0891b2,#2563eb);border-radius:16px 16px 0 0;padding:32px 36px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:800;letter-spacing:-0.5px;">Prakriti Aircon</h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">HVAC Solutions · Indore</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:32px 36px;">
              <p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.6;">
                You have received a new <strong style="color:#0891b2;">contact enquiry</strong> from your website.
              </p>

              <!-- Details table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 14px;background:#f8fafc;border-left:3px solid #0891b2;border-radius:6px;font-size:13px;color:#64748b;font-weight:600;width:38%;vertical-align:top;">Full Name</td>
                  <td style="padding:12px 14px;background:#f8fafc;font-size:14px;color:#0f172a;font-weight:600;">${name}</td>
                </tr>
                <tr><td colspan="2" style="height:6px;"></td></tr>
                <tr>
                  <td style="padding:12px 14px;background:#f8fafc;border-left:3px solid #2563eb;border-radius:6px;font-size:13px;color:#64748b;font-weight:600;vertical-align:top;">Email</td>
                  <td style="padding:12px 14px;background:#f8fafc;font-size:14px;color:#0f172a;">
                    <a href="mailto:${email}" style="color:#0891b2;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr><td colspan="2" style="height:6px;"></td></tr>
                <tr>
                  <td style="padding:12px 14px;background:#f8fafc;border-left:3px solid #0891b2;border-radius:6px;font-size:13px;color:#64748b;font-weight:600;vertical-align:top;">Phone</td>
                  <td style="padding:12px 14px;background:#f8fafc;font-size:14px;color:#0f172a;">
                    <a href="tel:${phone}" style="color:#0891b2;text-decoration:none;">${phone}</a>
                  </td>
                </tr>
                <tr><td colspan="2" style="height:6px;"></td></tr>
                <tr>
                  <td style="padding:12px 14px;background:#f8fafc;border-left:3px solid #2563eb;border-radius:6px;font-size:13px;color:#64748b;font-weight:600;vertical-align:top;">Service Required</td>
                  <td style="padding:12px 14px;background:#f8fafc;font-size:14px;color:#0f172a;font-weight:600;">${serviceLabel}</td>
                </tr>
                <tr><td colspan="2" style="height:6px;"></td></tr>
                <tr>
                  <td style="padding:12px 14px;background:#f8fafc;border-left:3px solid #0891b2;border-radius:6px;font-size:13px;color:#64748b;font-weight:600;vertical-align:top;">Project Details</td>
                  <td style="padding:12px 14px;background:#f8fafc;font-size:14px;color:#334155;line-height:1.6;">${message.replace(/\n/g, "<br/>")}</td>
                </tr>
              </table>

              <!-- CTA -->
              <div style="margin-top:28px;padding:18px 20px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;">
                <p style="margin:0;font-size:13px;color:#166534;">
                  <strong>Action required:</strong> Reply to this lead within 24 hours. You can directly reply to <a href="mailto:${email}" style="color:#0891b2;">${email}</a> or call <a href="tel:${phone}" style="color:#0891b2;">${phone}</a>.
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0f172a;border-radius:0 0 16px 16px;padding:20px 36px;text-align:center;">
              <p style="margin:0;color:#475569;font-size:12px;">
                Prakriti Aircon · 120 A Pulak City, Silicon City, Indore, MP 452001<br/>
                <a href="tel:+919303178304" style="color:#22d3ee;text-decoration:none;">+91 9303178304</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

    await transporter.sendMail({
      from: `"Prakriti Aircon Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || "sales@prakritiaircon.com",
      replyTo: email,
      subject: `New Enquiry: ${serviceLabel} — ${name}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact email error:", err)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
