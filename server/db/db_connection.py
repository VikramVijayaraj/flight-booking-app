import mysql.connector
import os
from mysql.connector import Error
from dotenv import load_dotenv

load_dotenv()

def create_connection():
    try:
        # print("DB_HOST:", os.getenv("DB_HOST"))
        # print("DB_USER:", os.getenv("DB_USER"))
        # print("DB_PASSWORD:", os.getenv("DB_PASSWORD"))
        # print("DB_DATABASE:", os.getenv("DB_DATABASE"))

        connection = mysql.connector.connect(
            host=os.getenv("DB_HOST"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            database=os.getenv("DB_DATABASE"),
        )

        if connection.is_connected():
            print("Connection to MySQL DB is successful")
            return connection
    except Error as e:
        print(f"The error '{e}' occurred")
        return None
