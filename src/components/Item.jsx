import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ item }) => (
    <Card sx={{ boxShadow: 3, borderRadius: 3 }}>
        <CardMedia component="img" height="200" image={item.image} alt={item.name} />
        <CardContent>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body2" color="text.secondary">
                ${item.price}
            </Typography>
        </CardContent>
        <CardActions>
            <Button component={Link} to={`/detalle/${item.id}`} size="small" variant="contained">
                Ver detalle
            </Button>
        </CardActions>
    </Card>
);

export default Item;
