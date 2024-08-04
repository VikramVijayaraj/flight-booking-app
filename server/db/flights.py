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

    connection = create_connection()
    if connection:
        try:
            cursor = connection.cursor()
            query = """
                INSERT INTO flights (flight_name, arrival_time, departure_time, arrival_airport, departure_airport, total_seats) 
                VALUES (%s, %s, %s, %s, %s, %s)
            """
            values = (flight_name, arrival_time, departure_time, arrival_airport, departure_airport, total_seats)
            cursor.execute(query, values)
            connection.commit()
            cursor.close()
            return "Flight data inserted into DB!"
        except Error as e:
            print(f"The error '{e}' occurred")
            return False
        finally:
            connection.close()
    return False


def remove_flight(flight_id):
    connection = create_connection()
    if connection:
        try:
            cursor = connection.cursor()
                        
             # Delete related bookings first
            delete_bookings_query = "DELETE FROM bookings WHERE flight_id = %s"
            cursor.execute(delete_bookings_query, (flight_id,))
            
            # Delete the flight
            delete_flight_query = "DELETE FROM flights WHERE id = %s"
            cursor.execute(delete_flight_query, (flight_id,))

            connection.commit()
            cursor.close()
            return "Flight Deleted!"
        except Error as e:
            print(f"The error '{e}' occurred")
            return "Error during Flight deletion"
        finally:
            connection.close()
    return "Error during Flight deletion"