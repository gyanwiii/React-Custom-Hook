import useFetch from "../hooks/useFetch";

const Products = () => {
    const { data, load, error } = useFetch(
        "https://api.escuelajs.co/api/v1/products"
    );

    if (load) {
        return (
            <h2 style={{marginTop:"45vh",textAlign: "center"}}>Loading...</h2>
        );
    }
    if (error) {
        return (
            <h2 style={{marginTop:"45vh",textAlign: "center" }}>
                Error: {error}
            </h2>
        );
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Product List</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2vw" }}>
                {data.slice(0,28).map((product) => (
                    <div key={product.id} style={{ width: "20vw", padding: "1vw", border: "1px solid #ccc", borderRadius: "5px" }}>
                        <img src={product.images[0]} width="100%" />
                        <div style={{ display: "flex", justifyContent: "space-between", height:"15vh"}}>
                            <h4 style={{ width: "80%" }}>{product.title}</h4>
                            <p><strong>₹ {product.price}</strong></p>
                        </div>
                        <div style={{ width: "100%" ,height:"15vh",overflowY:"scroll"}}><strong>Description: </strong>{product.description}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;
