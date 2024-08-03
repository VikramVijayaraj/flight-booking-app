from mysql.connector import Error

from db.db_connection import create_connection
from db.get_flights import get_flights

def update_seats(flight_id):
  connection = create_connection()
  if connection:
    try:
      cursor = connection.cursor()
      query = """
        UPDATE flights
        SET total_seats = total_seats - 1
        WHERE id = %s;
      """
      value = (flight_id, )
      cursor.execute(query, value)
      connection.commit()
      cursor.close()
      return "Updated seats count"
    except Error as e:
      print(f"The error '{e}' occurred")
      return "Error while updating"
    finally:
      connection.close()
  return "Error while updating"


def new_booking(user_id, flight_id):
  connection = create_connection()
  if connection:
    try:
      cursor = connection.cursor()
      query = "INSERT INTO bookings (user_id, flight_id) VALUES (%s, %s)"
      values = (user_id, flight_id)
      cursor.execute(query, values)
      connection.commit()
      
      update_seats(flight_id=flight_id)
      results = get_flights(flight_id=flight_id)
      
      cursor.close()
      return results
    except Error as e:
      print(f"The error '{e}' occurred")
      return "Booking Failed!"
    finally:
      connection.close()
  return "Booking Failed!"
