from flask import Blueprint, jsonify
import pandas as pd

prices_bp = Blueprint('prices', __name__)

@prices_bp.route("/api/prices", methods=["GET"])
def get_prices():
    df = pd.read_csv("data/prices.csv")
    return jsonify(df.to_dict(orient="records"))
