from db.db_connection import create_connection

def flights_table():
    connection = create_connection()
    if connection:
        try:
            query = """
                CREATE TABLE IF NOT EXISTS flights (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    flight_name VARCHAR(255) NOT NULL,
                    arrival_time DATETIME NOT NULL,
                    departure_time DATETIME NOT NULL,
                    arrival_airport VARCHAR(255) NOT NULL,
                    departure_airport VARCHAR(255) NOT NULL,
                    total_seats INT NOT NULL
                )
            """
            cursor = connection.cursor()
            cursor.execute(query)
            print("Flights table created successfully")
            connection.commit()
        except Exception as e:
            print(f"An error occurred: {e}")
        finally:
            cursor.close()
            connection.close()

def users_table():
    connection = create_connection()
    if connection:
        try:
            query = """
                CREATE TABLE IF NOT EXISTS users (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    email VARCHAR(255) NOT NULL,
                    password VARCHAR(255) NOT NULL
                )
            """
            cursor = connection.cursor()
            cursor.execute(query)
            print("Users table created successfully")
            connection.commit()
        except Exception as e:
            print(f"An error occurred: {e}")
        finally:
            cursor.close()
            connection.close()

def bookings_table():
    connection = create_connection()
    if connection:
        try:
            query = """
                CREATE TABLE IF NOT EXISTS bookings (
                    booking_id INT AUTO_INCREMENT PRIMARY KEY,
                    user_id INT NOT NULL,
                    flight_id INT NOT NULL,
                    FOREIGN KEY (user_id) REFERENCES users(id),
                    FOREIGN KEY (flight_id) REFERENCES flights(id)
                )
            """
            cursor = connection.cursor()
            cursor.execute(query)
            print("Bookings table created successfully")
            connection.commit()
        except Exception as e:
            print(f"An error occurred: {e}")
        finally:
            cursor.close()
            connection.close()
