from flask import Blueprint, jsonify
import pandas as pd

events_bp = Blueprint('events', __name__)

@events_bp.route("/api/events", methods=["GET"])
def get_events():
    df = pd.read_csv("data/events.csv")
    return jsonify(df.to_dict(orient="records"))
