from flask import Flask, request, jsonify
from flask_cors import CORS

from db.create_tables import bookings_table
from db.flights import get_flights, add_flight, remove_flight
from db.users import create_user, login_user
from db.bookings import new_booking, get_bookings, get_all_users_bookings

app = Flask(__name__)
CORS(app)


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

@app.route("/bookings/<user_id>")
def user_bookings(user_id):
    results = get_bookings(user_id)
    return results

@app.route("/add-flight", methods=["POST"])
def new_flight():
    data = request.get_json()
    response = add_flight(data)
    return response

@app.route("/remove-flight/<flight_id>")
def delete_flight(flight_id):
    response = remove_flight(flight_id)
    return response

@app.route("/all-bookings")
def all_users_bookings():
    response = get_all_users_bookings()
    return response


if __name__ == "__main__":
    app.run(debug=True)