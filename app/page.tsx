"use client";

import { useState } from "react";

import Link from "next/link";

const products = [
  {
    title: "Плёнкоукладчик 1",
    description: "Оборудование для укладки плёнки в сельском хозяйстве.",
    icon: "🚜",
    image: "/1.png",
  },
  {
    title: "Плёнкоукладчик 2",
    description: "Оборудование для укладки плёнки в сельском хозяйстве.",
    icon: "🚜",
    image: "/2.webp",
  },
  {
    title: "Плёнкоукладчик 3",
    description: "Оборудование для укладки плёнки в сельском хозяйстве.",
    icon: "🚜",
    image: "/3.webp",
  },
  {
    title: "Садовые платформы",
    description: "Платформы для работы в садах и сбора урожая.",
    icon: "🌳",
  },
  {
    title: "Садовые тележки",
    description: "Транспортировка контейнеров и урожая.",
    icon: "🛞",
  },
  {
    title: "Изготовление на заказ",
    description:
      "Адаптация оборудования под ваши задачи после технической оценки.",
    icon: "⚙️",
  },
];

export default function Home() {
  const [cart, setCart] = useState<string[]>([]);
  const [showCart, setShowCart] = useState(false);

  function addToRequest(title: string) {
    setCart((previous) => [...previous, title]);
    setShowCart(true);
  }

  return (
    <main>
      <header
        style={{
          background: "#111",
          borderBottom: "1px solid #333",
        }}
      >
        <div
          className="container"
          style={{
            minHeight: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <Link href="/" style={{ fontSize: 24, fontWeight: 900 }}>
            WEST<span style={{ color: "#e00000" }}>FORGE</span>
          </Link>

          <nav style={{ display: "flex", gap: 18, fontSize: 13 }}>
            <a href="#products">Продукция</a>
            <a href="#contacts">Контакты</a>
          </nav>
        </div>
      </header>

      <section
        className="hero"
        style={{
          position: "relative",
          minHeight: 650,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#202020",
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,.82) 0%, rgba(0,0,0,.48) 40%, rgba(0,0,0,.08) 100%), url('/hero-desktop.webp')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
