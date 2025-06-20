import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

//CSS and Fonts
import "./globals.css";
import { poppins, jetbrains, inter } from "@/lib/font";

export const metadata: Metadata = {
  title: {
    default: "NOVADECI | Medical",
    template: "NOVADECI | %s"
  },
  description: "Developed by Joash Cabanilla"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${poppins.variable} ${inter.className}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
