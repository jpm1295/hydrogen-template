import type { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response('Unauthorized', { status: 401 });
  }
  const path = req.nextUrl.searchParams.get('path') || '/';
  revalidatePath(path);
  return new Response('OK');
}
