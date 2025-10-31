import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useCart } from "../context/CartContext";

const CheckoutForm = () => {
    const { cart, totalPrice, clearCart } = useCart();
    const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
    const [orderId, setOrderId] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const order = {
            buyer,
            items: cart,
            total: totalPrice(),
            date: serverTimestamp()
        };
        const docRef = await addDoc(collection(db, "orders"), order);
        setOrderId(docRef.id);
        clearCart();
    };

    if (orderId)
        return (
            <Typography variant="h6" textAlign="center" sx={{ mt: 5 }}>
                🎉 Gracias por tu compra! <br />
                Tu número de orden es: <strong>{orderId}</strong>
            </Typography>
        );

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ maxWidth: 400, mx: "auto", display: "flex", flexDirection: "column", gap: 2 }}
        >
            <Typography variant="h5">Finalizar compra</Typography>
            <TextField label="Nombre" required onChange={e => setBuyer({ ...buyer, name: e.target.value })} />
            <TextField label="Email" required onChange={e => setBuyer({ ...buyer, email: e.target.value })} />
            <TextField label="Teléfono" required onChange={e => setBuyer({ ...buyer, phone: e.target.value })} />
            <Button type="submit" variant="contained" color="primary">
                Confirmar compra
            </Button>
        </Box>
    );
};

export default CheckoutForm;
