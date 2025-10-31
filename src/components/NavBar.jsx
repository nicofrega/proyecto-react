import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => (
    <AppBar position="fixed" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
            >
                🏄 Wakeboard Store
            </Typography>

            <Box>
                <Button color="inherit" component={Link} to="/categoria/tablas">Tablas</Button>
                <Button color="inherit" component={Link} to="/categoria/cascos">Cascos</Button>
                <Button color="inherit" component={Link} to="/categoria/chalecos">Chalecos</Button>
                <Button color="inherit" component={Link} to="/categoria/botas">Botas</Button>
            </Box>

            <CartWidget />
        </Toolbar>
    </AppBar>
);

export default NavBar;
