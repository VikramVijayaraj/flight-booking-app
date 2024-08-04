from mysql.connector import Error

from db.db_connection import create_connection


def get_flights(flight_id=None):
    connection = create_connection()
    if connection:
        try:
            cursor = connection.cursor(dictionary=True)
            if not flight_id:
                query = "SELECT * FROM flights"
                cursor.execute(query)
            else:
                query = "SELECT * FROM flights WHERE id = %s"
                val = (flight_id,)
                cursor.execute(query, val)
            results = cursor.fetchall()
            cursor.close()
            return results
        except Error as e:
            print(f"The error '{e}' occurred")
            return []
        finally:
            connection.close()
    return []


def add_flight(data):
    flight_name = data.get("flight_name")
    arrival_time = data.get("arrival_time")
    departure_time = data.get("departure_time")
    arrival_airport = data.get("arrival_airport")
    departure_airport = data.get("departure_airport")
    total_seats = data.get("total_seats")
    return