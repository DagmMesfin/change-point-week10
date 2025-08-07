from flask import Blueprint, jsonify

summary_bp = Blueprint('summary', __name__)

@summary_bp.route("/api/summary", methods=["GET"])
def get_summary():
    # Placeholder summary
    return jsonify({"message": "Summary endpoint"})
