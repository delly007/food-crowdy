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
                        <span className="widgetSmProductName">Panla</span>
                        <span className="widgetSmProductInfo">
                            Panla aka hake...
                        </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        View
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://res.cloudinary.com/foodcrowdy/image/upload/v1624291608/products/cnnlt4hr1dqrxxofiatp.png" alt="New Product" className="widgetSmImg" />
                    <div className="widgetSmProduct">
                        <span className="widgetSmProductName">Panla</span>
                        <span className="widgetSmProductInfo">
                            Panla aka hake...
                        </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        View
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://res.cloudinary.com/foodcrowdy/image/upload/v1624291608/products/cnnlt4hr1dqrxxofiatp.png" alt="New Product" className="widgetSmImg" />
                    <div className="widgetSmProduct">
                        <span className="widgetSmProductName">Panla</span>
                        <span className="widgetSmProductInfo">
                            Panla aka hake...
                        </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        View
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://res.cloudinary.com/foodcrowdy/image/upload/v1624291608/products/cnnlt4hr1dqrxxofiatp.png" alt="New Product" className="widgetSmImg" />
                    <div className="widgetSmProduct">
                        <span className="widgetSmProductName">Panla</span>
                        <span className="widgetSmProductInfo">
                            Panla aka hake...
                        </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        View
                    </button>
                </li>
            </ul>
        </div>
    )
}
