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
