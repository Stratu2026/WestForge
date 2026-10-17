
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
    description:
      "Адаптация оборудования под ваши задачи после технической оценки.",
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

            <div className="hero-buttons">
              <a className="btn btn-primary" href="#products">
                Наша продукция →
              </a>
              <a className="btn btn-outline" href="#contacts">
                Связаться с нами
              </a>
            </div>

            <div className="hero-custom-box">
              <p className="hero-custom-label">
                ИНДИВИДУАЛЬНЫЕ РЕШЕНИЯ
              </p>

              <h2>
                Техника под{" "}
                <span>ваши задачи</span>
              </h2>

              <p>
                Адаптируем оборудование под ваши размеры
                и условия работы —{" "}
                <strong>
                  после технической оценки и согласования.
                </strong>
              </p>

              <a href="#contacts">
                Обсудить индивидуальный заказ →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-section">
        <div className="container">
          <div className="quality-box">
            <div className="quality-icon">✓</div>

            <div>
              <h2>
                Надёжность{" "}
                <span>важнее обещаний</span>
              </h2>

              <p>
                Мы рассматриваем индивидуальные заказы,
                но предлагаем только те технические решения,
                в работоспособности и надёжности которых
                уверены.
              </p>

              <p>
                <strong>
                  Каждый проект предварительно оцениваем
                  и согласовываем с заказчиком.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section">
        <div className="container">
          <h2 className="section-title">
            Наша продукция
          </h2>

          <div className="product-grid">
            {products.map((product) => (
              <article
                className="product-card"
                key={product.title}
              >
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
          <h2 className="section-title">
            Свяжитесь с WestForge
          </h2>

          <p style={{ color: "#c4c4c4" }}>
            Республика Молдова, г. Сороки.
            Поможем подобрать оборудование для вашего
            хозяйства или обсудить индивидуальный проект.
          </p>
        </div>
      </section>

      <style>{`
        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .hero-custom-box {
          margin-top: 28px;
          max-width: 570px;
          padding: 20px 24px;
          border: 1px solid #e02020;
          border-left: 5px solid #ff2020;
          border-radius: 14px;
          background: rgba(12, 12, 12, 0.85);
          box-shadow: 0 12px 35px rgba(0,0,0,.25);
        }

        .hero-custom-label {
          margin: 0 0 10px;
          color: #ff3030;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .hero-custom-box h2 {
          margin: 0 0 12px;
          font-size: clamp(22px, 2.5vw, 30px);
          line-height: 1.2;
          color: #fff;
        }

        .hero-custom-box h2 span {
          color: #ff2020;
        }

        .hero-custom-box p:not(.hero-custom-label) {
          margin: 0 0 14px;
          color: #e8e8e8;
          font-size: 14px;
          line-height: 1.65;
        }

        .hero-custom-box strong {
          color: #fff;
        }

        .hero-custom-box a {
          color: #ff4444;
          font-size: 14px;
          font-weight: 800;
        }

        .quality-section {
          padding: 28px 0 8px;
        }

        .quality-box {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 26px 30px;
          background: #1c1c1c;
          border: 1px solid #424242;
          border-radius: 16px;
        }

        .quality-icon {
          flex: 0 0 42px;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #e02020;
          color: white;
          font-size: 25px;
          font-weight: bold;
        }

        .quality-box h2 {
          margin: 0 0 12px;
          font-size: clamp(22px, 2.5vw, 30px);
        }

        .quality-box h2 span {
          color: #ff3030;
        }

        .quality-box p {
          max-width: 850px;
          margin: 0 0 10px;
          color: #d5d5d5;
          font-size: 15px;
          line-height: 1.65;
        }

        .quality-box p:last-child {
          margin-bottom: 0;
        }

        .quality-box strong {
          color: #fff;
        }

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

        .product-content {
          padding: 14px;
        }

        .product-content h3 {
          margin: 0 0 8px;
          font-size: 16px;
        }

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
          .hero-custom-box {
            margin-top: 20px;
            padding: 16px;
          }

          .hero-custom-box h2 {
            font-size: 22px;
          }

          .hero-custom-box p:not(.hero-custom-label) {
            font-size: 13px;
          }

          .quality-section {
            padding-top: 16px;
          }

          .quality-box {
            padding: 18px;
            gap: 12px;
          }

          .quality-icon {
            flex-basis: 32px;
            width: 32px;
            height: 32px;
            font-size: 20px;
          }

          .quality-box p {
            font-size: 13px;
          }

          .product-grid {
            gap: 10px;
          }

          .product-placeholder {
            height: 105px;
            font-size: 36px;
          }

          .product-content {
            padding: 10px;
          }

          .product-content h3 {
            font-size: 14px;
          }

          .product-content p {
            font-size: 12px;
          }
        }
      `}</style>
    </main>
  );
}
