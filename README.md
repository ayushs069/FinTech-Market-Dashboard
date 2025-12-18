# 📊 Fintech Market Dashboard & Analysis Platform

A comprehensive financial analysis dashboard combining real-time market data visualization, advanced time-series forecasting, and sentiment analysis to provide intelligent investment insights. This platform leverages **DSFM (Data Science Financial Models)** including ARIMA, SARIMA, and GARCH models to predict stock movements and generate actionable trading signals.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![Python](https://img.shields.io/badge/Python-3.8+-3776AB?logo=python)
![Flask](https://img.shields.io/badge/Flask-2.3.3-000000?logo=flask)

---

## 🌟 Features

### 📈 **Market Analysis**
- **Real-time Market Overview**: Track NIFTY index and individual stock performance
- **Market Movers**: Identify top gainers and losers with percentage changes
- **Market Heatmap**: Visual representation of market sector performance
- **Market Breadth Analysis**: Advance-Decline ratio and sector-wise statistics
- **Momentum Indicators**: 5-day and 20-day momentum scoring for stocks

### 💼 **Portfolio Management**
- **Holdings Tracker**: Monitor your portfolio with real-time P&L calculations
- **Investment Summary**: Comprehensive view of equity and mutual fund investments
- **Today's P&L**: Track daily profit/loss across all holdings
- **Performance Metrics**: Average cost, current value, and percentage returns

### 🤖 **DSFM (Data Science Financial Models)**
- **Time-Series Forecasting**:
  - **ARIMA** (AutoRegressive Integrated Moving Average)
  - **SARIMA** (Seasonal ARIMA)
  - **GARCH** (Generalized AutoRegressive Conditional Heteroskedasticity)
- **Risk Metrics**: Sharpe ratio, annualized returns, and volatility calculations
- **Top Stocks Ranking**: Algorithmic ranking based on risk-adjusted returns
- **Price Predictions**: 30-day forward price forecasts with multiple models

### 📰 **Sentiment Analysis**
- **Real-time News Integration**: Fetches latest financial news via NewsData.io API
- **Sentiment Scoring**: TextBlob-powered sentiment analysis on news articles
- **Composite Signals**: Combines technical forecasts with sentiment for BUY/SELL/HOLD signals
- **News Aggregation**: Company-specific news with sentiment scores

### 📊 **Interactive Visualizations**
- **Historical Price Charts**: Interactive line charts using Recharts
- **Multi-Model Comparison**: Visual overlay of ARIMA, SARIMA, and GARCH predictions
- **Responsive Design**: Beautiful, modern UI built with Tailwind CSS
- **Dark Theme**: Professional dark-themed interface optimized for trading

---

## 🛠️ Tech Stack

### **Frontend**
- **React 19.1.1** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool (rolldown-vite)
- **React Router DOM** - Client-side routing
- **Recharts** - Composable charting library
- **Axios** - HTTP client for API calls
- **Tailwind CSS** - Utility-first CSS framework

### **Backend**
- **Flask 2.3.3** - Lightweight Python web framework
- **Pandas** - Data manipulation and analysis
- **NumPy** - Numerical computing
- **Statsmodels** - Statistical modeling (ARIMA, SARIMA)
- **ARCH** - GARCH volatility modeling
- **pmdarima** - Auto ARIMA model selection
- **TextBlob** - Natural language processing for sentiment
- **NewsData.io API** - Real-time news aggregation

### **Data Science**
- Time-series analysis and forecasting
- Risk metrics calculation (Sharpe ratio, volatility)
- Sentiment analysis on financial news
- Statistical modeling for price prediction

---

## 📁 Project Structure

```
Fintech-Market-Dashboard-Analysis/
├── backend/
│   ├── app.py                 # Flask API server with all endpoints
│   ├── data/
│   │   ├── market_data.csv    # Historical stock price data
│   │   └── sentiment_sample.csv
│   ├── requirements.txt       # Python dependencies
│   └── .env                   # API keys (not tracked in git)
├── src/
│   ├── components/
│   │   ├── DSFMAnalytics.jsx        # DSFM visualization component
│   │   ├── InvestingTools.jsx       # Investment tools grid
│   │   ├── InvestmentProducts.jsx   # Product cards
│   │   ├── InvestmentSummary.jsx    # Portfolio summary
│   │   ├── MarketHeatMap.jsx        # Sector heatmap
│   │   ├── MarketMovers.jsx         # Gainers/Losers display
│   │   ├── MostBought.jsx           # Top traded stocks
│   │   ├── Navbar.jsx               # Top navigation
│   │   ├── NiftyCharts.jsx          # NIFTY index charts
│   │   ├── PortfolioTable.jsx       # Holdings table
│   │   ├── Sidebar.jsx              # Navigation sidebar
│   │   └── SuperstarInvestors.jsx   # Featured investors
│   ├── pages/
│   │   ├── Dashboard.jsx            # Main dashboard
│   │   ├── DSFMPage.jsx             # DSFM analysis page
│   │   ├── MarketHeatmap.jsx        # Heatmap view
│   │   ├── MarketOverview.jsx       # Market insights
│   │   ├── MarketPage.jsx           # Market movers page
│   │   └── Portfolio.jsx            # Portfolio page
│   ├── App.jsx                      # Root component with routing
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global styles
├── public/                    # Static assets
├── package.json              # Node.js dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS config
└── README.md                # This file
```

---

## 🚀 Getting Started

### **Prerequisites**
- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **pip** (Python package manager)
- **NewsData.io API Key** (for sentiment analysis)

### **Installation**

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ayushs069/FinTech-Market-Dashboard.git
cd FinTech-Market-Dashboard
```

#### 2️⃣ Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt
pip install statsmodels arch pmdarima textblob requests python-dotenv

# Create .env file and add your API key
echo NEWSCATCHER_API_KEY=your_api_key_here > .env
```

#### 3️⃣ Frontend Setup
```bash
# Navigate back to root directory
cd ..

# Install Node.js dependencies
npm install
```

### **Running the Application**

#### Start Backend Server (Terminal 1)
```bash
cd backend
python app.py
```
Backend will run on `http://localhost:8000`

#### Start Frontend Development Server (Terminal 2)
```bash
npm run dev
```
Frontend will run on `http://localhost:5173`

---

## 🔌 API Endpoints

### **Market Data**
- `GET /api/nifty` - Current NIFTY index value and change
- `GET /api/nifty/history` - Historical NIFTY data for charts
- `GET /api/stock/<symbol>` - Individual stock snapshot
- `GET /api/market-movers` - Top gainers and losers
- `GET /api/market-insights` - Market breadth, sector stats, momentum

### **Portfolio**
- `GET /api/portfolio` - Portfolio holdings with P&L
- `GET /api/most-bought` - Most bought stock

### **DSFM (Data Science Financial Models)**
- `GET /api/dsfm/top-stocks` - Top 10 stocks by Sharpe ratio
- `GET /api/dsfm/forecast/<symbol>` - ARIMA/SARIMA/GARCH forecasts
- `GET /api/dsfm/sentiment/<symbol>` - News sentiment analysis
- `GET /api/dsfm/decision/<symbol>` - Complete analysis with BUY/SELL signal

---

## 🧠 DSFM Decision Engine

The **DSFM Decision Engine** combines multiple analytical approaches:

### **1. Time-Series Forecasting**
- **ARIMA**: Captures linear trends and autocorrelation
- **SARIMA**: Adds seasonal patterns (12-month cycle)
- **GARCH**: Models volatility clustering for risk assessment

### **2. Sentiment Analysis**
- Fetches real-time news articles for each stock
- Calculates sentiment polarity using TextBlob
- Aggregates sentiment scores across multiple sources

### **3. Signal Generation**
| Forecast | Sentiment | Signal |
|----------|-----------|---------|
| UP       | POSITIVE  | **BUY** ✅ |
| UP       | NEGATIVE  | **WAIT** ⚠️ |
| DOWN     | NEGATIVE  | **AVOID** ❌ |
| Other    | Any       | **HOLD** 🤚 |

### **4. Risk Metrics**
- **Sharpe Ratio**: Risk-adjusted return calculation
- **Volatility**: Annualized standard deviation
- **Annual Return**: Expected yearly performance

---

## 📊 Data Requirements

The application expects a CSV file at `backend/data/market_data.csv` with the following structure:

```csv
Date,ASIANPAINT,HDFCBANK,NTPC,MARUTI,WIPRO,...
2023-01-01,3250.50,1680.25,195.40,9500.00,420.30,...
2023-01-02,3260.75,1685.50,196.20,9520.50,422.15,...
...
```

- **Date column**: YYYY-MM-DD format
- **Stock columns**: Daily closing prices for each symbol
- **Minimum**: 300+ trading days for accurate forecasting

---

## 🎨 UI Features

- **Dark Theme**: Professional trading interface
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Interactive Charts**: Hover for detailed data points
- **Color-coded Indicators**: Green for gains, red for losses
- **Real-time Updates**: Auto-refresh capabilities
- **Smooth Animations**: Tailwind CSS transitions

---

## 🔧 Configuration

### **Environment Variables**

Create a `.env` file in the `backend/` directory:

```env
NEWSCATCHER_API_KEY=your_newsdata_io_api_key
```

### **Frontend API Base URL**

Update `VITE_API_BASE` in `.env` (root directory):

```env
VITE_API_BASE=http://127.0.0.1:8000
```

---

## 🧪 Model Parameters

### **ARIMA/SARIMA**
- Auto-selection using `pmdarima.auto_arima`
- Stepwise algorithm for optimal (p,d,q) parameters
- Seasonal period (m) = 12 for SARIMA

### **GARCH**
- Model: GARCH(1,1)
- Mean model: Zero mean
- Volatility forecasting horizon: 30 days

### **Forecasting**
- Default forecast horizon: 30 days
- Uses log-returns for stationarity
- Converts back to price levels for visualization

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Ayush Sharma**

- GitHub: [@ayushs069](https://github.com/ayushs069)
- Email: ayush.singh230306@gmail.com

---

## 🙏 Acknowledgments

- **NewsData.io** for news API
- **Recharts** for beautiful visualizations
- **Tailwind CSS** for modern UI components
- **Statsmodels** & **ARCH** for time-series models
- Financial data providers and open-source community

---

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact via GitHub profile

---

## 🔮 Future Enhancements

- [ ] Real-time WebSocket data streaming
- [ ] Machine Learning models (LSTM, Prophet)
- [ ] Multi-timeframe analysis (1D, 1W, 1M)
- [ ] Portfolio optimization algorithms
- [ ] Advanced technical indicators (RSI, MACD, Bollinger Bands)
- [ ] Export reports to PDF
- [ ] User authentication and personalized watchlists
- [ ] Backtesting framework for strategies
- [ ] Integration with broker APIs for live trading

---

**⭐ If you found this project helpful, please give it a star!**