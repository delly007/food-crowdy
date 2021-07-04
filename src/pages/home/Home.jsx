import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { purchasesData } from '../../testData';
import WidgetSm from "../../components/widget/WidgetSm";
import WidgetLg from "../../components/widget/WidgetLg";

export default function Home() {
    return (
        <div className="home">
           <FeaturedInfo />
           <Chart title="Inventory Analytics" data={purchasesData} dataKey="Purchases" grid/>
           <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
           </div>
        </div>
    )
}
