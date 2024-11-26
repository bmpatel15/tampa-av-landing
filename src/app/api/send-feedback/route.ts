import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { feedback } = await request.json()

    if (!feedback) {
      return NextResponse.json(
        { error: 'Feedback content is required' },
        { status: 400 }
      )
    }

    // Log the feedback instead of sending email
    console.log('Received feedback:', feedback)
    
    return NextResponse.json({ message: 'Feedback received successfully' })
  } catch (error) {
    console.error('Error processing feedback:', error)
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
} 