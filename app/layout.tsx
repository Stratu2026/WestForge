
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "WestForge | Производство сельхозтехники",
  description:
    "WestForge — производство сельскохозяйственной техники в Молдове. Плёнкоукладчики, садовые платформы, тележки и оборудование на заказ.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
