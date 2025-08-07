from flask import Blueprint, jsonify
import pandas as pd

cp_bp = Blueprint('change_points', __name__)

@cp_bp.route("/api/change_points", methods=["GET"])
def get_change_points():
    df = pd.read_csv("data/change_points.csv")
    return jsonify(df.to_dict(orient="records"))
