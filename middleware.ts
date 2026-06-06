import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Simple middleware — just pass through
  // Language detection will be done client-side
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
