import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Racketek Academy",
  description:
    "Elite badminton coaching at Racketek Academy. Offering personalized training programs, group sessions, and junior development. Book your free assessment today.",
  keywords:
    "badminton coaching, racket sports academy, sports training Melbourne",
  authors: [{ name: "Racketek Team", url: "https://racketekacademy.com.au" }],
  creator: "Racketek Academy",
  publisher: "Racketek Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://racketekacademy.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Racketek Academy - Premier Badminton Coaching",
    description:
      "Elite badminton coaching at Racketek Academy. Badminton programs available.",
    url: "https://racketekacademy.com.au",
    siteName: "Racketek Academy",
    images: [
      {
        url: "/racket-sports-action-shot.jpg",
        width: 1200,
        height: 630,
        alt: "Professional badminton coaching at Racketek Academy",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Racketek Academy - Premier Badminton Coaching",
    description:
      "Elite badminton coaching at Racketek Academy. Badminton programs available.",
    images: ["/racket-sports-action-shot.jpg",]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  icons: {
    icon: '/logo1.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
