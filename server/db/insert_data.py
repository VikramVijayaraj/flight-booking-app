from mysql.connector import Error

from db.db_connection import create_connection

def insert_data():
    connection = create_connection()

    if connection:
        try:
            cursor = connection.cursor()
            query = """
                INSERT INTO flights (flight_name, arrival_time, departure_time, arrival_airport, departure_airport, total_seats) 
                VALUES (%s, %s, %s, %s, %s, %s)
            """
            val = ('another test flight', '2024-08-01 08:30:00', '2024-08-01 06:00:00', 'JFK', 'LAX', 180)
            
            cursor.execute(query, val)
            connection.commit()
            cursor.close()
            return "Data inserted successfully!"
        except Error as e:
            print(f"The error '{e}' occurred")
            return []
        finally:
            connection.close()
    return []