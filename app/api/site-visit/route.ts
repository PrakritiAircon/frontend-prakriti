import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, address, preferred_date, preferred_time, service_type, message } = body

    if (!name || !email || !phone || !address || !preferred_date || !preferred_time || !service_type) {
      return NextResponse.json({ error: "Required fields are missing" }, { status: 400 })
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
      "installation": "New Installation",
    }

    const timeLabels: Record<string, string> = {
      "09:00-11:00": "9:00 AM – 11:00 AM",
      "11:00-13:00": "11:00 AM – 1:00 PM",
      "14:00-16:00": "2:00 PM – 4:00 PM",
      "16:00-18:00": "4:00 PM – 6:00 PM",
    }

    const serviceLabel = serviceLabels[service_type] || service_type
    const timeLabel = timeLabels[preferred_time] || preferred_time
    const dateFormatted = new Date(preferred_date).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Site Visit Request – Prakriti Aircon</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#f97316,#dc2626);border-radius:16px 16px 0 0;padding:32px 36px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:800;letter-spacing:-0.5px;">Prakriti Aircon</h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">Site Visit Request · HVAC Solutions</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:32px 36px;">
              <p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.6;">
                A new <strong style="color:#f97316;">site visit has been requested</strong> from your website. Please confirm the appointment.
              </p>

              <!-- Appointment highlight -->
              <div style="background:linear-gradient(135deg,#fff7ed,#fef3c7);border:1px solid #fed7aa;border-radius:12px;padding:18px 20px;margin-bottom:24px;text-align:center;">
                <p style="margin:0;font-size:13px;color:#92400e;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Requested Appointment</p>
                <p style="margin:6px 0 0;font-size:20px;font-weight:800;color:#c2410c;">${dateFormatted}</p>
                <p style="margin:4px 0 0;font-size:15px;color:#b45309;font-weight:600;">${timeLabel}</p>
              </div>

              <!-- Details table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 14px;background:#f8fafc;border-left:3px solid #f97316;border-radius:6px;font-size:13px;color:#64748b;font-weight:600;width:38%;vertical-align:top;">Full Name</td>
                  <td style="padding:12px 14px;background:#f8fafc;font-size:14px;color:#0f172a;font-weight:600;">${name}</td>
                </tr>
                <tr><td colspan="2" style="height:6px;"></td></tr>
                <tr>
                  <td style="padding:12px 14px;background:#f8fafc;border-left:3px solid #dc2626;border-radius:6px;font-size:13px;color:#64748b;font-weight:600;vertical-align:top;">Email</td>
                  <td style="padding:12px 14px;background:#f8fafc;font-size:14px;color:#0f172a;">
                    <a href="mailto:${email}" style="color:#0891b2;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr><td colspan="2" style="height:6px;"></td></tr>
                <tr>
                  <td style="padding:12px 14px;background:#f8fafc;border-left:3px solid #f97316;border-radius:6px;font-size:13px;color:#64748b;font-weight:600;vertical-align:top;">Phone</td>
                  <td style="padding:12px 14px;background:#f8fafc;font-size:14px;color:#0f172a;">
                    <a href="tel:${phone}" style="color:#0891b2;text-decoration:none;">${phone}</a>
                  </td>
                </tr>
                <tr><td colspan="2" style="height:6px;"></td></tr>
                <tr>
                  <td style="padding:12px 14px;background:#f8fafc;border-left:3px solid #dc2626;border-radius:6px;font-size:13px;color:#64748b;font-weight:600;vertical-align:top;">Service Type</td>
                  <td style="padding:12px 14px;background:#f8fafc;font-size:14px;color:#0f172a;font-weight:600;">${serviceLabel}</td>
                </tr>
                <tr><td colspan="2" style="height:6px;"></td></tr>
                <tr>
                  <td style="padding:12px 14px;background:#f8fafc;border-left:3px solid #f97316;border-radius:6px;font-size:13px;color:#64748b;font-weight:600;vertical-align:top;">Site Address</td>
                  <td style="padding:12px 14px;background:#f8fafc;font-size:14px;color:#334155;line-height:1.6;">${address.replace(/\n/g, "<br/>")}</td>
                </tr>
                ${message ? `
                <tr><td colspan="2" style="height:6px;"></td></tr>
                <tr>
                  <td style="padding:12px 14px;background:#f8fafc;border-left:3px solid #dc2626;border-radius:6px;font-size:13px;color:#64748b;font-weight:600;vertical-align:top;">Additional Notes</td>
                  <td style="padding:12px 14px;background:#f8fafc;font-size:14px;color:#334155;line-height:1.6;">${message.replace(/\n/g, "<br/>")}</td>
                </tr>` : ""}
              </table>

              <!-- CTA -->
              <div style="margin-top:28px;padding:18px 20px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;">
                <p style="margin:0;font-size:13px;color:#166534;">
                  <strong>Action required:</strong> Confirm this site visit with the client. Call <a href="tel:${phone}" style="color:#0891b2;">${phone}</a> or reply to <a href="mailto:${email}" style="color:#0891b2;">${email}</a>.
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
      subject: `Site Visit Request: ${serviceLabel} — ${name} (${dateFormatted})`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Site visit email error:", err)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
