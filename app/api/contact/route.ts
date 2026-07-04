import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    // Server-side validation
    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Name, phone, service, and message are required." },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    if (!scriptUrl) {
      // Developer experience fallback: if the env variable isn't configured, log a warning and simulate success
      console.warn(
        "⚠️ GOOGLE_SHEETS_SCRIPT_URL environment variable is not defined. Simulating API success response."
      );
      return NextResponse.json({
        success: true,
        message: "Enquiry recorded (Development Mock Success). Configure GOOGLE_SHEETS_SCRIPT_URL to send to your live Google Sheet.",
      });
    }

    // Forward the payload to the Google Apps Script Web App
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timestamp,
        name,
        phone,
        email: email || "",
        service,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script responded with status: ${response.status}`);
    }

    const responseData = await response.json();
    if (responseData && responseData.success === false) {
      throw new Error(responseData.error || "Google Apps Script internal execution error.");
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry logged to Google Sheets successfully.",
    });
  } catch (error: any) {
    console.error("Error logging to Google Sheets:", error);
    return NextResponse.json(
      { error: "Failed to record enquiry to Google Sheet. Please try again later." },
      { status: 500 }
    );
  }
}
