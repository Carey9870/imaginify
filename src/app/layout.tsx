import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: 'Imaginify',
  description: "AI-powered image generator",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}


