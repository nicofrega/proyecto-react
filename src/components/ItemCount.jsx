import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
            <Button variant="outlined" disabled={count <= 1} onClick={() => setCount(count - 1)}>
                -
            </Button>
            <Typography>{count}</Typography>
            <Button variant="outlined" disabled={count >= stock} onClick={() => setCount(count + 1)}>
                +
            </Button>
            <Button variant="contained" color="primary" onClick={() => onAdd(count)}>
                Agregar al carrito
            </Button>
        </Box>
    );
};

export default ItemCount;
