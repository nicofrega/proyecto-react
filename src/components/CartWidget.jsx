function CartWidget() {
    return (
        <div style={styles.cart}>
            🛒 <span style={styles.count}>3</span>
        </div>
    );
}

const styles = {
    cart: {
        display: "flex",
        alignItems: "center",
        fontSize: "1.2rem",
        cursor: "pointer",
    },
    count: {
        marginLeft: "0.5rem",
        fontWeight: "bold",
        color: "red",
    }
};

export default CartWidget;
