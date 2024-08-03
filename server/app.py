from flask import Flask, request, jsonify
from flask_cors import CORS

from db.create_tables import users_table
from db.insert_data import insert_data
from db.get_flights import get_flights
from db.users import create_user, login_user
from db.bookings import new_booking

app = Flask(__name__)
CORS(app)

@app.route('/app')
def home():
    return "Hello from Flask!"

@app.route("/create")
def create():
    users_table()
    return "Table created!"

@app.route("/insert")
def insert():
    insert_data()
    return "Data inserted!"

@app.route("/get-all-flights")
def all_flights():
    results = get_flights()
    return jsonify(results)

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    response = login_user(email=email, password=password)
    return response

@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    response = create_user(email=email, password=password)
    return response

@app.route("/book-flight", methods=["POST"])
def book_flight():
    data = request.get_json()
    user_id = data.get("user_id")
    flight_id = data.get("flight_id")
    response = new_booking(user_id, flight_id)
    return response


if __name__ == "__main__":
    app.run(debug=True)