import { GET } from '../app/api/health/route';

describe('Health Check API', () => {
  it('should return 200 status with healthy response', async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({
      status: 'healthy',
      timestamp: expect.any(String),
      uptime: expect.any(Number),
    });
  });

  it('should return valid timestamp', async () => {
    const response = await GET();
    const data = await response.json();

    const timestamp = new Date(data.timestamp);
    expect(timestamp.toString()).not.toBe('Invalid Date');
  });

  it('should return positive uptime', async () => {
    const response = await GET();
    const data = await response.json();

    expect(data.uptime).toBeGreaterThan(0);
  });
});