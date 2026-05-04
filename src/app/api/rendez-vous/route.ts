import { NextRequest, NextResponse } from 'next/server'
import { RdvSchema } from '@/types/forms'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = RdvSchema.safeParse(body)
    if (!parsed.success) return NextResponse.json({ error: 'Données invalides' }, { status: 400 })

    // TODO: Intégrer Resend ici avec process.env.RESEND_API_KEY
    console.log('RDV submission:', parsed.data)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
