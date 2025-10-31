# 🏄 Wakeboard Store — React + Firebase

_E-commerce de productos de wakeboard desarrollado en React con Vite, utilizando Firebase Firestore como base de datos._

---

## 🚀 Tecnologías utilizadas

- **React + Vite**
- **Firebase Firestore**
- **Material UI** para interfaz moderna y responsiva
- **React Router DOM** para navegación SPA
- **Context API** para manejo global del carrito

---

## 🗂️ Estructura principal

src/
├─ assets/ → imágenes de productos
├─ components/ → componentes UI reutilizables
├─ context/ → estado global del carrito
├─ firebase/ → configuración de Firebase
├─ App.jsx → enrutado principal
├─ main.jsx → punto de entrada
├─ uploadData.js → script opcional para cargar productos iniciales


---

## ⚙️ Instalación

1. Cloná el repositorio:

```bash
git clone https://github.com/nicofrega/proyecto-react.git
cd proyecto-react


Instalá dependencias:

npm install


Ejecutá el entorno local:

npm run dev


El proyecto se abrirá en:
👉 http://localhost:5173

🛒 Funcionalidades principales

✅ Listado de productos: muestra todos o filtrados por categoría.
✅ Detalle de producto: descripción, stock y opción de agregar al carrito.
✅ Carrito persistente: permite modificar cantidades o eliminar productos.
✅ Checkout: formulario de compra con registro de orden en Firestore.


🧠 Autor
Nicolás Frega
