import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { CircularProgress, Grid } from "@mui/material";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const ref = doc(db, "wakeboard-products", id);
        getDoc(ref)
            .then(res => setItem({ id: res.id, ...res.data() }))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading)
        return (
            <Grid container justifyContent="center" sx={{ mt: 5 }}>
                <CircularProgress />
            </Grid>
        );

    return item ? <ItemDetail item={item} /> : <p>Producto no encontrado</p>;
};

export default ItemDetailContainer;
