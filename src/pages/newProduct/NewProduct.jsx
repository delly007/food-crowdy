import './newProduct.css';

export default function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="newProductTitle">New Product</h1>
            <form className="newProductForm">
                <div className="newProductItem">
                    <label>Name</label>
                    <input type="text" placeholder="Panla" />
                </div>
                <div className="newProductItem">
                    <label>Category</label>
                    <input type="text" placeholder="Frozen Foods" />
                </div>
                <div className="newProductItem">
                    <label>Quantity</label>
                    <input type="Number" placeholder="100" />
                </div>
                <div className="newProductItem">
                    <label>Supplier</label>
                    <input type="text" placeholder="Food Co." />
                </div>
                <div className="newProductItem">
                    <label>Cost Price</label>
                    <input type="Number" placeholder="1500" />
                </div>
                <div className="newProductItem">
                    <label>Selling Price</label>
                    <input type="Number" placeholder="1700" />
                </div>
                <div className="newProductItem">
                    <label>Gender</label>
                    <div className="newProductRadio">
                        <input name="gender" type="radio" id="male" value="male" />
                        <label for="Male">Male</label>
                        <input name="gender" type="radio" id="female" value="female" />
                        <label for="Female">Female</label>
                        <input name="gender" type="radio" id="other" value="other" />
                        <label for="Other">Other</label>
                    </div>
                </div>
                <div className="newProductItem">
                    <label>Category</label>
                    <select className="newProductSelect" name="category" id="category">
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Fresh Foods">Fresh Foods</option>
                        <option value="Grains">Grains</option>
                        <option value="Fiber">Fiber</option>
                    </select>
                </div>
                <div className="newProductItem">
                    <label>Units</label>
                    <select className="newProductSelect" name="units" id="units">
                        <option value="Kg">KG</option>
                        <option value="Litres">Liters</option>
                        <option value="Custard Rubber">Custard Rubber</option>
                        <option value="Bags">Bags</option>
                        <option value="Pieces">Pieces</option>
                    </select>
                </div>
                <button className="newProductBtn">Create</button>
            </form>
        </div>
    )
}
