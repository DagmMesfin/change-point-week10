# Brent Oil Price Change Point Dashboard

An interactive dashboard that visualizes historical Brent oil prices and global event impacts using Bayesian change point detection.

## Features

- 📈 Time series price visualization
- 📌 Event overlay (e.g., wars, COVID)
- 🧠 Bayesian change point insights
- 🧮 Summary stats and filters

## Tech Stack

- 🐍 Backend: Flask + Pandas
- ⚛️ Frontend: React + Chart.js
- 📁 Data: Static CSVs (can integrate real-time APIs)

## Setup

### Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend

```bash
cd frontend
npm install
npm start
```

> Make sure your Flask backend runs on port 5000 and React on 3000.

## Future Work

* Add authentication and user roles
* Integrate live price data from an external API
* Add forecasting capabilities
