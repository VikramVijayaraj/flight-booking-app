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
