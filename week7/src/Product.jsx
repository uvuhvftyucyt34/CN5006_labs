const Product = ({ productName, price }) => { // Create component 'Product' with properties 'productName' & 'price'
    // Function calculateVAT() reads user inputted 'vatRate' and returns price with VAT calculated
    const calculateVAT = () => {
        const vatRate = document.getElementById("vatRate").value; // vatRate is from the HTML input box with the same ID
        const priceWithVAT = 
        Number(price) + (Number(price) * Number(vatRate) / 100);
        // Display price with VAT through HTML element vatMessage
        document.getElementById("vatMessage").innerHTML = 
        `<b style="color:green">Price including VAT: £${priceWithVAT}</b>`;
    };

    return ( 
    <div>
        <h2>{productName}</h2>

        <p>Price: £{price}</p>
        <label>Enter VAT Rate (%): </label>

        <input 
        type="number" 
        id="vatRate" // Used in calculateVAT() function
        />

        <br /><br />

        <button onClick={calculateVAT}> 
        Calculate VAT 
        </button>

        <p id="vatMessage"></p>
    </div>
    );
};
export default Product;