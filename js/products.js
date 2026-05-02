/*
  UNMAATEE - Datos editables
  Cambiá acá el número de WhatsApp, productos, precios, stock, imágenes y categorías.
*/
/* =========================================================
       EDITÁ ACÁ TU CATÁLOGO
       ---------------------------------------------------------
       - id: no repetir
       - name: nombre visible
       - category: categoría para filtro
       - price: precio numérico sin puntos ni signo $
       - installments: texto corto debajo del precio. Para ocultarlo, dejá ""
       - badge: etiqueta superior
       - stock: si está en 0 aparece sin stock
       - image: URL de imagen. Podés poner "img/mate.jpg"
       ========================================================= */

    const WHATSAPP_NUMBER = "5493625298235"; // WhatsApp de UNMAATEE

    const FEATURED_COMBO = {
      id: "combo-diario",
      name: "Combo diario UNMAATEE",
      category: "Combos",
      price: 55000,
      installments: "Precio especial",
      description: "Combo: termo media manija, mate camionero (el más confiable) y una bombilla cincelada. Tu combo perfecto para todos los días.",
      badge: "Combo",
      stock: 10,
      image: "assets/images/combo-diario.jpg"
    };

    const PRODUCTS = [
      {
        id: 1,
        name: "Termo Termolar",
        category: "Termos",
        price: 18000,
        installments: "Precio de catálogo",
        description: "Termo práctico y liviano para acompañar tus mates de todos los días.",
        badge: "Termo",
        stock: 10,
        image: "assets/images/producto-01.jpg"
      },
      {
        id: 2,
        name: "Termo Stanley Matesystem",
        category: "Termos",
        price: 32000,
        installments: "Precio de catálogo",
        description: "Sistema matero completo, resistente y listo para llevar a todos lados.",
        badge: "Más pedido",
        stock: 10,
        image: "assets/images/producto-02.jpg",
        images: [
          "assets/images/producto-02.jpg",
          "assets/images/producto-03.jpg",
          "assets/images/producto-04.jpg"
        ]
      },
      {
        id: 3,
        name: "Termo Media Manija",
        category: "Termos",
        price: 25000,
        installments: "Precio de catálogo",
        description: "Cómodo para transportar, cebar y compartir en cualquier momento.",
        badge: "Termo",
        stock: 10,
        image: "assets/images/producto-05.jpg"
      },
      {
        id: 4,
        name: "Termo Stanley",
        category: "Termos",
        price: 29000,
        installments: "Precio de catálogo",
        description: "Diseño clásico, gran presencia y excelente opción para uso diario.",
        badge: "Nuevo",
        stock: 10,
        image: "assets/images/producto-06.jpg"
      },
      {
        id: 5,
        name: "Mate Criollo",
        category: "Mates",
        price: 45500,
        installments: "Precio de catálogo",
        description: "Un mate con carácter criollo, ideal para quienes buscan tradición y estilo.",
        badge: "Premium",
        stock: 10,
        image: "assets/images/producto-07.jpg"
      },
      {
        id: 6,
        name: "Mate Imperial",
        category: "Mates",
        price: 40000,
        installments: "Precio de catálogo",
        description: "Terminación elegante y presencia fuerte para una experiencia matera superior.",
        badge: "Premium",
        stock: 10,
        image: "assets/images/producto-08.jpg"
      },
      {
        id: 7,
        name: "Mate Camionero",
        category: "Mates",
        price: 30000,
        installments: "Precio de catálogo",
        description: "Clásico, amplio y resistente: una opción ideal para todos los días.",
        badge: "Clásico",
        stock: 10,
        image: "assets/images/producto-09.jpg"
      },
      {
        id: 8,
        name: "Mate Camionero Cincelado",
        category: "Mates",
        price: 32000,
        installments: "Precio de catálogo",
        description: "Mate camionero con detalle cincelado, pensado para destacar en cada ronda.",
        badge: "Cincelado",
        stock: 10,
        image: "assets/images/mate-camionero-cincelado-01.jpg",
        images: [
          "assets/images/mate-camionero-cincelado-01.jpg",
          "assets/images/mate-camionero-cincelado-02.jpg"
        ]
      },
      {
        id: 9,
        name: "Mate Camionero Cuero Especial y Cincelado",
        category: "Mates",
        price: 32000,
        installments: "Precio de catálogo",
        description: "Cuero trabajado y detalle cincelado para un estilo bien artesanal.",
        badge: "Especial",
        stock: 10,
        image: "assets/images/producto-11.jpg"
      },
      {
        id: 10,
        name: "Mate Imperial Cincelado",
        category: "Mates",
        price: 41000,
        installments: "Precio de catálogo",
        description: "Imperial con detalle cincelado, elegante y con terminación premium.",
        badge: "Cincelado",
        stock: 10,
        image: "assets/images/producto-12.jpg"
      },
      {
        id: 11,
        name: "Mate Torpedo Cincelado",
        category: "Mates",
        price: 38000,
        installments: "Precio de catálogo",
        description: "Formato torpedo con acabado cincelado para quienes buscan un mate distinguido.",
        badge: "Cincelado",
        stock: 10,
        image: "assets/images/producto-13.jpg"
      },
      {
        id: 12,
        name: "Mate Torpedo",
        category: "Mates",
        price: 35500,
        installments: "Precio de catálogo",
        description: "Diseño torpedo, cómodo y con gran presencia para el uso diario.",
        badge: "Torpedo",
        stock: 10,
        image: "assets/images/producto-14.jpg"
      },
      {
        id: 13,
        name: "Mate Torpedo Cincelado Base con Bolitas",
        category: "Mates",
        price: 36000,
        installments: "Precio de catálogo",
        description: "Torpedo cincelado con base de bolitas: diseño firme, vistoso y original.",
        badge: "Especial",
        stock: 10,
        image: "assets/images/producto-15.jpg"
      },
      {
        id: 14,
        name: "Mate Ranchero",
        category: "Mates",
        price: 18000,
        installments: "Precio de catálogo",
        description: "Mate simple, cálido y económico para arrancar tu equipo matero.",
        badge: "Oferta",
        stock: 10,
        image: "assets/images/producto-16.jpg"
      },
      {
        id: 15,
        name: "Bombillón",
        category: "Bombillas",
        price: 34000,
        installments: "Precio de catálogo",
        description: "Bombillón con gran presencia, ideal para completar un mate premium.",
        badge: "Premium",
        stock: 10,
        image: "assets/images/producto-17.jpg"
      },
      {
        id: 16,
        name: "Bombilla de Alpaca",
        category: "Bombillas",
        price: 10000,
        installments: "Precio de catálogo",
        description: "Bombilla de alpaca, elegante y resistente para uso cotidiano.",
        badge: "Alpaca",
        stock: 10,
        image: "assets/images/producto-18.jpg"
      },
      {
        id: 17,
        name: "Bombilla de Acero Inox",
        category: "Bombillas",
        price: 10000,
        installments: "Precio de catálogo",
        description: "Opción práctica, durable y fácil de limpiar para todos los días.",
        badge: "Acero",
        stock: 10,
        image: "assets/images/producto-19.jpg"
      },
      {
        id: 18,
        name: "Yerbera de Gamuza",
        category: "Accesorios",
        price: 12000,
        installments: "Precio de catálogo",
        description: "Yerbera suave y práctica para mantener la yerba siempre a mano.",
        badge: "Accesorio",
        stock: 10,
        image: "assets/images/producto-20.jpg"
      },
      {
        id: 19,
        name: "Yerbera de Cuero",
        category: "Accesorios",
        price: 6500,
        installments: "Precio de catálogo",
        description: "Yerbera compacta de cuero, ideal para organizar tu kit matero.",
        badge: "Accesorio",
        stock: 10,
        image: "assets/images/producto-21.jpg"
      },
      {
        id: 20,
        name: "Tapa Mate Silicona",
        category: "Accesorios",
        price: 8000,
        installments: "Precio de catálogo",
        description: "Tapa de silicona para cuidar y transportar tu mate con mayor comodidad.",
        badge: "Accesorio",
        stock: 10,
        image: "assets/images/tapa-mate-01.jpg",
        images: [
          "assets/images/tapa-mate-01.jpg",
          "assets/images/tapa-mate-02.jpg"
        ]
      },
      {
        id: 21,
        name: "Base para Montañita",
        category: "Accesorios",
        price: 5000,
        installments: "Precio de catálogo",
        description: "Base práctica para preparar tu montañita y mejorar la cebada.",
        badge: "Accesorio",
        stock: 10,
        image: "assets/images/producto-23.jpg"
      },
      {
        id: 22,
        name: "Luz para Bombilla",
        category: "Accesorios",
        price: 5000,
        installments: "Precio de catálogo",
        description: "Detalle original para bombilla, ideal para regalar o sumar al equipo.",
        badge: "Accesorio",
        stock: 10,
        image: "assets/images/producto-24.jpg"
      },
      {
        id: 23,
        name: "Termera Estilo Uruguaya",
        category: "Termeras",
        price: 42000,
        installments: "Precio de catálogo",
        description: "Termera amplia y elegante para llevar tu equipo matero completo.",
        badge: "Termera",
        stock: 10,
        image: "assets/images/producto-25.jpg"
      },
      {
        id: 24,
        name: "Termera Roma",
        category: "Termeras",
        price: 40500,
        installments: "Precio de catálogo",
        description: "Termera con estilo urbano, cómoda y pensada para transportar todo tu set.",
        badge: "Termera",
        stock: 10,
        image: "assets/images/producto-26.jpg"
      }
    ];
