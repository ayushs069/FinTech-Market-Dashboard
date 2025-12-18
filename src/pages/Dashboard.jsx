import { Link } from "react-router-dom";
import InvestmentSummary from "../components/InvestmentSummary";
import MostBought from "../components/MostBought";
import InvestmentProducts from "../components/InvestmentProducts";
import InvestingTools from "../components/InvestingTools";
import MarketHeatmap from "../components/MarketHeatMap";   // 👈 NEW
import SuperstarInvestors from "../components/SuperstarInvestors"; // 👈 NEW

export default function Dashboard() {
  return (
    <div className="p-4 space-y-4 max-w-6xl mx-auto">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-blue-400">
          Investments Summary
        </h1>

        <Link
          to="/marketmovers"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200"
        >
          View Market Movers
        </Link>
      </div>

      {/* Equity / MF summary from backend */}
      <InvestmentSummary />

      {/* Most bought + watchlist-style tiles */}
      <MostBought />

      {/* Investment product shortcuts */}
      <InvestmentProducts />

      <MarketHeatmap />

      {/* Tools section – DSFM lives in its own tab, not here */}
      <InvestingTools />

      <SuperstarInvestors />

    </div>
  );
}
