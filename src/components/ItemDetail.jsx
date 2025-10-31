import { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const [added, setAdded] = useState(false);
    const { addItem } = useCart();

    const handleAdd = (quantity) => {
        addItem(item, quantity);
        setAdded(true);
    };

    return (
        <Card sx={{ maxWidth: 600, mx: "auto", boxShadow: 4, borderRadius: 3 }}>
            <CardMedia component="img" height="400" image={item.image} alt={item.name} />
            <CardContent>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                    {item.description}
                </Typography>
                <Typography variant="h6">${item.price}</Typography>

                {!added ? (
                    <ItemCount stock={item.stock} onAdd={handleAdd} />
                ) : (
                    <Button variant="contained" color="success" sx={{ mt: 2 }} href="/carrito">
                        Ir al carrito
                    </Button>
                )}
            </CardContent>
        </Card>
    );
};

export default ItemDetail;
