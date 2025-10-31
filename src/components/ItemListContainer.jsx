import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Grid, CircularProgress, Typography } from "@mui/material";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const itemsCollection = collection(db, "wakeboard-products");
        const q = categoryId ? query(itemsCollection, where("category", "==", categoryId)) : itemsCollection;

        getDocs(q)
            .then(res => setItems(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
            .finally(() => setLoading(false));
    }, [categoryId]);

    if (loading)
        return (
            <Grid container justifyContent="center" sx={{ mt: 5 }}>
                <CircularProgress />
            </Grid>
        );

    return (
        <>
            <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
                {categoryId ? categoryId.toUpperCase() : "Todos los productos"}
            </Typography>
            <ItemList items={items} />
        </>
    );
};

export default ItemListContainer;
