import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    // Basic server-side validation
    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Name, phone, service, and message are required." },
        { status: 400 }
      );
    }

    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "enquiries.csv");

    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Helper to escape values for CSV to prevent CSV injection and maintain spreadsheet formatting
    const escapeCsv = (val: string) => {
      if (!val) return '""';
      const escaped = val.toString().replace(/"/g, '""');
      return `"${escaped}"`;
    };

    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const row = `${escapeCsv(timestamp)},${escapeCsv(name)},${escapeCsv(phone)},${escapeCsv(email || "")},${escapeCsv(service)},${escapeCsv(message)}\n`;

    const fileExists = fs.existsSync(filePath);
    const headers = "Timestamp,Name,Phone,Email,Service,Message\n";

    if (!fileExists) {
      fs.writeFileSync(filePath, headers + row, "utf8");
    } else {
      fs.appendFileSync(filePath, row, "utf8");
    }

    return NextResponse.json({ success: true, message: "Enquiry logged successfully." });
  } catch (error: any) {
    console.error("Error writing to CSV:", error);
    return NextResponse.json(
      { error: "Internal server error while saving data." },
      { status: 500 }
    );
  }
}
