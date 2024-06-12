export async function POST({ request } : { request: Request }) {
    const data = await request.formData();
    const email = data.get('email');
    // Create contact in Loop
    const req = await fetch(`https://app.loops.so/api/v1/contacts/create`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${import.meta.env.LOOP_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            source: `website-${import.meta.env.MODE}`,

        })
    });
    const reqJson = await req.json();
    if (reqJson.success) {
        console.log(`Subscribed ${email}`)
        return new Response(JSON.stringify({
            message: `Successfully subscribed ${email} to the newsletter.`
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } else {
        console.error(reqJson.message)
        return new Response(JSON.stringify({
            message: reqJson.message
        }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        }

    }

export async function ALL({ _request } : { _request: Request }) {
    return new Response(JSON.stringify({
        message: 'Method Not Allowed, please send a POST request'
    }), {
        status: 405,
    });
}