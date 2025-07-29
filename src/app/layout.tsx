import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NoSSR from "@/components/NoSSR";
import { fallbackLng } from "./i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SacreLife | Sağlığın Geleceğine Yatırım Yapın",
  description: "SacreLife, yapay zeka destekli sağlık ekosistemi. Sağlık verilerinizi anlamlı içgörülere dönüştürerek proaktif bir sağlık yolculuğu sunuyoruz. Geleceğin sağlığına yatırım yapın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={fallbackLng} suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚕️</text></svg>" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  document.documentElement.classList.add('dark');
                  localStorage.setItem('sacre-theme', 'dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <NoSSR>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
            storageKey="sacre-theme"
          >
            {children}
          </ThemeProvider>
        </NoSSR>
      </body>
    </html>
  );
}
