import { useCart } from "../context/CartContext";
import { Typography, Button, List, ListItem, ListItemText, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, totalPrice, clearCart, removeItem } = useCart();

    if (cart.length === 0)
        return (
            <Typography variant="h6" textAlign="center" sx={{ mt: 5 }}>
                El carrito está vacío 😔 <br />
                <Button component={Link} to="/" sx={{ mt: 2 }} variant="contained">
                    Ir al catálogo
                </Button>
            </Typography>
        );

    return (
        <>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Carrito
            </Typography>
            <List>
                {cart.map(p => (
                    <div key={p.id}>
                        <ListItem>
                            <ListItemText
                                primary={`${p.name} x${p.quantity}`}
                                secondary={`$${p.price * p.quantity}`}
                            />
                            <Button color="error" onClick={() => removeItem(p.id)}>
                                Eliminar
                            </Button>
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List>

            <Typography variant="h6" sx={{ mt: 2 }}>
                Total: ${totalPrice()}
            </Typography>

            <Button onClick={clearCart} variant="outlined" sx={{ mr: 2 }}>
                Vaciar carrito
            </Button>
            <Button component={Link} to="/checkout" variant="contained" color="success">
                Finalizar compra
            </Button>
        </>
    );
};

export default Cart;
