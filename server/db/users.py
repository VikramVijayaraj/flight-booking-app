from db.db_connection import create_connection

def create_user(email, password):
    connection = create_connection()
    cursor = connection.cursor()

    query = "INSERT INTO users (email, password) VALUES (%s, %s)"
    values = (email, password)
    cursor.execute(query, values)
    
    connection.commit()
    cursor.close()
    connection.close()
    return "New user created!"


def login_user(email, password):
    connection = create_connection()
    cursor = connection.cursor()

    query = "SELECT * FROM users WHERE email=%s and password=%s"
    values = (email, password)
    cursor.execute(query, values)
    
    results = cursor.fetchall()
    cursor.close()
    connection.close()

    if len(results) > 0:
        return str(results[0][0])
    
    return "User NOT found!"
    

