import { NextResponse } from 'next/server';

/**
 * Health check endpoint for Docker HEALTHCHECK and Kubernetes probes
 * Returns a simple health status without external dependencies
 * Response time target: <100ms
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    {
      status: 'healthy',
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Content-Type': 'application/json',
      },
    }
  );
}