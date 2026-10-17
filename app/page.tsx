
import Link from "next/link";

const products = [
  {
    title: "Плёнкоукладчики",
    description: "Оборудование для укладки плёнки в сельском хозяйстве.",
    icon: "🚜",
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
    description: "Металлоконструкции и оборудование под ваши задачи.",
    icon: "⚙️",
  },
];

export default function Home() {
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
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: 40,
            paddingBottom: 40,
          }}
        >
          <div style={{ maxWidth: 630 }}>
            <p
              style={{
                color: "#ff2020",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 2,
              }}
            >
              WESTFORGE • MOLDOVA
            </p>

            <h1
              style={{
                fontSize: "clamp(27px, 4vw, 48px)",
                lineHeight: 1.12,
                letterSpacing: "-0.04em",
                margin: "14px 0",
              }}
            >
              Производство
              <br />
              <span style={{ color: "#ff2020" }}>
                сельскохозяйственной
              </span>
              <br />
              техники
            </h1>

            <p
              style={{
                color: "#ffffff",
                fontSize: 15,
                lineHeight: 1.6,
                maxWidth: 490,
                marginBottom: 22,
              }}
            >
              Плёнкоукладчики, садовые платформы, тележки
              и оборудование для вашего хозяйства.
              Собственное производство в Молдове.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <a className="btn btn-primary" href="#products">
                Наша продукция →
              </a>
              <a className="btn btn-outline" href="#contacts">
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section">
        <div className="container">
          <h2 className="section-title">Наша продукция</h2>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.title}>
                <div className="product-placeholder">
                  <span>{product.icon}</span>
                </div>
                <div className="product-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="section">
        <div className="container">
          <h2 className="section-title">Свяжитесь с WestForge</h2>
          <p style={{ color: "#c4c4c4" }}>
            Республика Молдова, г. Сороки.
            Поможем подобрать оборудование для вашего хозяйства.
          </p>
        </div>
      </section>

      <style>{`
        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }
        .product-card {
          overflow: hidden;
          border-radius: 14px;
          background: #1b1b1b;
          border: 1px solid #333;
        }
        .product-placeholder {
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #282828;
          font-size: 46px;
        }
        .product-content { padding: 14px; }
        .product-content h3 { margin: 0 0 8px; font-size: 16px; }
        .product-content p {
          margin: 0;
          color: #bdbdbd;
          font-size: 13px;
          line-height: 1.5;
        }
        @media (max-width: 800px) {
          .product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .product-grid { gap: 10px; }
          .product-placeholder { height: 105px; font-size: 36px; }
          .product-content { padding: 10px; }
          .product-content h3 { font-size: 14px; }
          .product-content p { font-size: 12px; }
        }
      `}</style>
    </main>
  );
}
