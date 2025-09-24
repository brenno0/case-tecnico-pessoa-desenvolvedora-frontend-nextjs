import { api } from '@/app/api/axios';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { category: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const { category } = params;

    const query: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      query[key] = value;
    });

    const res = await api.get(`/api/posts/category/${category}`, {
      params: query,
    });

    return NextResponse.json(res.data);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
