import puppeteer from 'puppeteer'

export async function POST(
    req: Request,
) {
    const { product } = await req.json()

    const browser = await puppeteer.launch()

    return Response.json({
        name: product
    }, {
        status: 200,
    })
}