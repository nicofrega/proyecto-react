import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useCart();

    return (
        <IconButton component={Link} to="/carrito" color="inherit" sx={{ ml: 2 }}>
            <Badge badgeContent={totalQuantity()} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    );
};

export default CartWidget;
