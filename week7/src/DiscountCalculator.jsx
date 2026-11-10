const DiscountCalculator = ({ productName, price }) => { // Create component 'DiscountCalculator' with properties 'productName' & 'price'
    // Function calculateDiscount() reads user inputted 'discountRate' and returns price with discount calculated
    const calculateDiscount = () => {
        const discountRate = document.getElementById("discountRate").value; // discountRate is from the HTML input box with the same ID
        const priceWithDiscount = 
        Number(price) - (Number(price) * Number(discountRate) / 100);
        // Display price with discount through HTML element discountMessage
        document.getElementById("discountMessage").innerHTML = 
        `<b style="color:green">Discounted price: £${priceWithDiscount}</b>`;
    };

    return ( 
    <div>
        <h2>{productName}</h2>

        <p>Price: £{price}</p>
        <label>Enter discount percentage (%): </label>

        <input 
        type="number" 
        id="discountRate" // Used in calculateDiscount() function
        />

        <br /><br />

        <button onClick={calculateDiscount}> 
        Calculate discount 
        </button>

        <p id="discountMessage"></p>
    </div>
    );
};
export default DiscountCalculator;