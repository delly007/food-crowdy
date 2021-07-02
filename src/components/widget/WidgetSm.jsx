import { Visibility } from '@material-ui/icons';
import './widgetSm.css';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Stock</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://res.cloudinary.com/foodcrowdy/image/upload/v1624291608/products/cnnlt4hr1dqrxxofiatp.png" alt="New Product" className="widgetSmImg" />
                    <div className="widgetSmProduct">
                        <span className="widgetSmProductName">Panla(Hake Fish)</span>
                        <span className="widgetSmProductInfo">
                            Panla also known as hake fish 
                            is good for your soups and 
                            vegetables. Hake is particularly 
                            healthy, nutritious, easy to 
                            digest and therefore lends itself 
                            for consumption by children and the 
                            elderly.
                        </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility />
                        
                    </button>
                </li>
            </ul>
        </div>
    )
}
