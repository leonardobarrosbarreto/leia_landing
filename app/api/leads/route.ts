import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nome, email, telefone } = body

    if (!nome || !email || !telefone) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios.' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido.' },
        { status: 400 }
      )
    }

    await pool.query(
      'INSERT INTO leads (nome, email, telefone) VALUES ($1, $2, $3)',
      [nome.trim(), email.trim().toLowerCase(), telefone.trim()]
    )

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error('Erro ao salvar lead:', error)
    return NextResponse.json(
      { error: 'Erro interno. Tente novamente.' },
      { status: 500 }
    )
  }
}
