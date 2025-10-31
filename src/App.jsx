import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import { CartProvider } from "./context/CartContext";
 


function App() {
  
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Container sx={{ mt: 10 }}>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
          </Routes>
        </Container>
      </Router>
    </CartProvider>
  );
}

export default App;
