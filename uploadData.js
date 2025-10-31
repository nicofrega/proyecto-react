// uploadData.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from "./src/firebase/firebaseConfig.js";

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Datos iniciales
const products = [
  {
    name: "Tabla Hyperlite Motive 140",
    description: "Tabla ideal para principiantes y niveles intermedios. Liviana y resistente.",
    category: "tablas",
    price: 189000,
    stock: 5,
    image: "/src/assets/products/hyperlite-motive.jpg"
  },
  {
    name: "Tabla Ronix Vault 135",
    description: "Tabla con gran estabilidad y durabilidad.",
    category: "tablas",
    price: 220000,
    stock: 4,
    image: "/src/assets/products/ronix-vault.jpg"
  },
  {
    name: "Casco Liquid Force Hero",
    description: "Casco de alto rendimiento con ventilación optimizada.",
    category: "cascos",
    price: 58000,
    stock: 8,
    image: "/src/assets/products/liquidforce-hero.jpg"
  },
  {
    name: "Casco Jobe Base",
    description: "Casco liviano y seguro, ideal para todos los niveles.",
    category: "cascos",
    price: 54000,
    stock: 6,
    image: "/src/assets/products/jobe-base.jpg"
  },
  {
    name: "Chaleco Follow Pop",
    description: "Chaleco flexible con gran flotabilidad.",
    category: "chalecos",
    price: 73000,
    stock: 7,
    image: "/src/assets/products/follow-pop.jpg"
  },
  {
    name: "Chaleco O’Neill Slasher",
    description: "Modelo profesional con espuma liviana y cierre reforzado.",
    category: "chalecos",
    price: 81000,
    stock: 5,
    image: "/src/assets/products/oneill-slasher.jpg"
  },
  {
    name: "Botas Ronix Divide",
    description: "Botas cómodas con ajuste rápido y suela antideslizante.",
    category: "botas",
    price: 174000,
    stock: 3,
    image: "/src/assets/products/ronix-divide.jpg"
  },
  {
    name: "Botas Liquid Force Transit",
    description: "Botas con excelente soporte para saltos y giros.",
    category: "botas",
    price: 169000,
    stock: 4,
    image: "/src/assets/products/liquidforce-transit.jpg"
  }
];

async function uploadProducts() {
  try {
    for (const product of products) {
      await addDoc(collection(db, "wakeboard-products"), product);
      console.log(`✅ Producto agregado: ${product.name}`);
    }
    console.log("🚀 Carga completada con éxito!");
  } catch (error) {
    console.error("❌ Error al cargar productos:", error);
  }
}

uploadProducts();
