import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Geist } from 'next/font/google';
import "styles/globals.css"
const font = Geist({ subsets: ['latin'], weight: ['200'] });

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className="light" suppressHydrationWarning>
      <body className={font.className}>
        <main className="relative flex flex-col min-h-screen">{props.children}</main>
      </body>
    </html>
  )
}
