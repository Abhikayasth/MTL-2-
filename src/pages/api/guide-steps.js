import { NextResponse } from 'next/server';

export async function GET() {
  const guideSteps = [
    'Welcome to Madhav Tech Labs! We specialize in cutting-edge digital solutions.',
    'Explore our services section to see how we can help your business grow.',
    'Check out our portfolio to see examples of our successful projects.',
    'Learn about our development process and how we ensure quality results.',
    'Meet our team of expert developers, designers, and project managers.',
    'Read our client testimonials to see what others say about our work.',
    'Visit our blog for insights on the latest tech trends and industry news.',
    'Ready to start your project? Contact us for a free consultation!',
  ];
  return NextResponse.json({ steps: guideSteps });
}
