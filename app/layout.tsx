import type { Metadata } from "next";
import "./globals.css";
import "./site.css";

export const metadata: Metadata = {
  title: "Wirdd — وِرد | Astaghfirullah counter",
  description:
    "Wirdd is an Android Astaghfirullah counter in physical-device testing. Learn about the tester edition and its privacy model.",
  openGraph: {
    title: "Wirdd — وِرد | Android tester edition",
    description:
      "Astaghfirullah counting for Android. Physical-device testing in progress.",
    url: "https://wirdd.app",
    siteName: "Wirdd",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wirdd — وِرد",
    description: "Android Astaghfirullah counter. Tester edition in progress.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
