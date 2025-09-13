import CartWidget from "./CartWidget.jsx";

function NavBar() {
    return (
        <nav style={styles.nav}>
            <h1 style={styles.logo}>Wakeboard</h1>
            <ul style={styles.links}>
                <li><a href="#">Tablas</a></li>
                <li><a href="#">Botas</a></li>
                <li><a href="#">Casco</a></li>
                <li><a href="#">Chalecos</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#f4f4f4",
    },
    logo: {
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
    links: {
        listStyle: "none",
        display: "flex",
        gap: "1rem",
    }
};

export default NavBar;
