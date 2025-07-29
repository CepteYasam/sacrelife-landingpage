import type { Metadata } from "next";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ locale: lng }));
}

export const metadata: Metadata = {
  title: "SacreLife | Sağlığın Geleceğine Yatırım Yapın",
  description: "SacreLife, yapay zeka destekli sağlık ekosistemi. Sağlık verilerinizi anlamlı içgörülere dönüştürerek proaktif bir sağlık yolculuğu sunuyoruz. Geleceğin sağlığına yatırım yapın.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <div className="locale-wrapper" data-locale={locale}>
      {children}
    </div>
  );
} 