import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const privatePaths = [
    '/me',
]

const publicPaths = [
    '/login',
    '/register',
]


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const { pathname } = request.nextUrl // destructuring to get pathname
    const sessionToken = request.cookies.get('sessionToken')?.value

    // Check private paths
    if (privatePaths.some(path => pathname.startsWith(path) && !sessionToken)) {
        // If the user is not authenticated, redirect to login
        return NextResponse.redirect(new URL('/login', request.url))
    }
    // Đăng nhập rồi thì không cho vào login và register
    if (publicPaths.some(path => pathname.startsWith(path)) && sessionToken) {
        return NextResponse.redirect(new URL('/me', request.url))
    }

    return NextResponse.next()

}
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        ...privatePaths, ...publicPaths
    ],
}