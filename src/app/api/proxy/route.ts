import { NextResponse } from 'next/server';
import { api } from '../axios';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const query: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      query[key] = value;
    });

    const res = await api.get('/api/posts', { params: query });
    return NextResponse.json(res.data);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
