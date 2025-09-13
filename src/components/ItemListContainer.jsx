function ItemListContainer({ greeting }) {
    return (
        <div style={styles.container}>
            <h2>{greeting}</h2>
        </div>
    );
}

const styles = {
    container: {
        padding: "2rem",
        textAlign: "center",
    }
};

export default ItemListContainer;
