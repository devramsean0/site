import db from "../../db";
import { getProfileImage } from "../../lib";

export async function POST({ request } : { request: Request }) {
    const data = await request.formData();
    const name = data.get('name')?.toString() || 'Anonymous';
    const email = data.get('email')?.toString() || "";
    const message = data.get('message')?.toString() || 'No message provided';

    // Save to database
    await db.entry.create({
        data: {
            name,
            email,
            content: message,
            gravitarURL: getProfileImage(email)
        }
    })
    const entries = await db.entry.findMany();
    return new Response(JSON.stringify({
        success: true,
        entries: entries
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export async function GET() {
    const entries = await db.entry.findMany();
    return new Response(JSON.stringify({
        success: true,
        entries: entries
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}