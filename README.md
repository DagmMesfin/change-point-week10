# Change Point Analysis of Brent Oil Prices

## Overview

This project investigates how significant geopolitical and economic events have influenced Brent crude oil prices over time. Using Bayesian Change Point Detection techniques with PyMC3, the goal is to identify structural shifts in oil price trends and correlate them with global events such as wars, policy decisions, and pandemics.

## Objectives

- Detect statistically significant change points in Brent oil prices.
- Associate change points with known historical events.
- Quantify the magnitude and direction of shifts.
- Communicate insights through reports and interactive dashboards.

## Dataset

- **Source**: Daily Brent oil prices (May 1987 – Sep 2022).
- **Fields**:
  - `Date`: Day-Month-Year format
  - `Price`: USD per barrel

An additional CSV file includes 11 major global events with their dates for correlation.

## Project Structure

```bash
.
├── data/
│   ├── brent_prices.csv
│   └── oil_market_events.csv
├── notebooks/
│   ├── 01_eda.ipynb
│   └── 02_bayesian_changepoint_model.ipynb
├── app/
│   ├── dashboard.py
│   └── templates/
├── requirements.txt
├── README.md
````

## Tools Used

* Python 3
* PyMC3 (Bayesian modeling)
* pandas, matplotlib, seaborn (EDA and plotting)
* Flask (backend for dashboard)
* React (frontend, to be developed)

## Usage

1. Clone the repo
2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```
3. Run Jupyter notebooks to explore data and model:

   ```bash
   jupyter notebook
   ```
4. To run the dashboard (after implementation):

   ```bash
   python app/dashboard.py
   ```

## Author

Dagim Mesfin Seifu
