import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  // Debug: Log environment variable
  console.log('API Key exists:', !!process.env.RESEND_API_KEY)
  console.log('API Key value:', process.env.RESEND_API_KEY?.substring(0, 5) + '...')

  // Check if API key exists
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is missing or undefined')
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await request.json()
    const { feedback } = body

    if (!feedback) {
      return NextResponse.json(
        { error: 'Feedback content is required' },
        { status: 400 }
      )
    }

    console.log('Attempting to send email with Resend...')

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'feedback@tampaav.com',
      to: 'tampaav@gmail.com',
      subject: 'New Website Feedback',
      text: feedback,
      html: `<p>${feedback}</p>`
    })

    console.log('Resend response:', data)

    return NextResponse.json({ 
      success: true,
      message: 'Feedback sent successfully'
    })
  } catch (error) {
    console.error('Detailed error:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to send feedback',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 