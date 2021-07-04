import './widgetLg.css';

export default function WidgetLg() {
    const Button = ({ type, typeName }) => {
        return <button className={"widgetLgButton " + type}>{typeName}</button>;
    };
    
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetTr">
                    <th className="widgetTh">Product</th>
                    <th className="widgetTh">Quantity</th>
                    <th className="widgetTh">Stock Date</th>
                    <th className="widgetTh">Supplier</th>
                    <th className="widgetTh">Status</th>
                </tr>
                <tr className="widgetTr">
                    <td className="tdProduct">
                        <img
                            src="https://res.cloudinary.com/foodcrowdy/image/upload/v1624291608/products/cnnlt4hr1dqrxxofiatp.png"
                            alt="Product"
                            className="widgetLgImg"
                        />
                        <span className="tdProductName">Panla</span>
                    </td>
                    <td className="tdQty">100</td>
                    <td className="tdDate">02 Jan 2021</td>
                    <td className="tdSupplier">Food Co.</td>
                    <td className="tdStatus">
                        <Button type="inStock" typeName="In Stock" />
                    </td>
                </tr>
                <tr className="widgetTr">
                    <td className="tdProduct">
                        <img
                            src="https://res.cloudinary.com/foodcrowdy/image/upload/v1624291608/products/cnnlt4hr1dqrxxofiatp.png"
                            alt="Product"
                            className="widgetLgImg"
                        />
                        <span className="tdProductName">Panla</span>
                    </td>
                    <td className="tdQty">6</td>
                    <td className="tdDate">02 Jan 2021</td>
                    <td className="tdSupplier">Food Co.</td>
                    <td className="tdStatus">
                        <Button type="lowStock" typeName="Low Stock"/>
                    </td>
                </tr>
                <tr className="widgetTr">
                    <td className="tdProduct">
                        <img
                            src="https://res.cloudinary.com/foodcrowdy/image/upload/v1624291608/products/cnnlt4hr1dqrxxofiatp.png"
                            alt="Product"
                            className="widgetLgImg"
                        />
                        <span className="tdProductName">Panla</span>
                    </td>
                    <td className="tdQty">0</td>
                    <td className="tdDate">02 Jan 2021</td>
                    <td className="tdSupplier">Food Co.</td>
                    <td className="tdStatus">
                        <Button type="outOfStock" typeName="Out Of Stock" />
                    </td>
                </tr>
                <tr className="widgetTr">
                    <td className="tdProduct">
                        <img
                            src="https://res.cloudinary.com/foodcrowdy/image/upload/v1624291608/products/cnnlt4hr1dqrxxofiatp.png"
                            alt="Product"
                            className="widgetLgImg"
                        />
                        <span className="tdProductName">Panla</span>
                    </td>
                    <td className="tdQty">200</td>
                    <td className="tdDate">02 Jan 2021</td>
                    <td className="tdSupplier">Food Co.</td>
                    <td className="tdStatus">
                        <Button type="inStock" typeName="In Stock" />
                    </td>
                </tr>
            </table>
        </div>
    )
}
