   # insert_query = """
    #     INSERT INTO flights (flight_name, arrival_time, departure_time, arrival_airport, departure_airport, total_seats) VALUES
    #         ('Flight A123', '2024-08-01 08:30:00', '2024-08-01 06:00:00', 'JFK', 'LAX', 180),
    #         ('Flight B456', '2024-08-02 12:45:00', '2024-08-02 10:15:00', 'ORD', 'MIA', 150),
    #         ('Flight C789', '2024-08-03 18:00:00', '2024-08-03 14:30:00', 'DFW', 'SEA', 200),
    #         ('Flight D012', '2024-08-04 20:20:00', '2024-08-04 17:00:00', 'ATL', 'DEN', 220),
    #         ('Flight E345', '2024-08-05 07:50:00', '2024-08-05 05:30:00', 'LAX', 'BOS', 190),
    #         ('Flight F678', '2024-08-06 11:15:00', '2024-08-06 08:00:00', 'MIA', 'ORD', 170),
    #         ('Flight G901', '2024-08-07 15:40:00', '2024-08-07 13:10:00', 'SEA', 'DFW', 160),
    #         ('Flight H234', '2024-08-08 19:25:00', '2024-08-08 16:00:00', 'DEN', 'ATL', 180),
    #         ('Flight I567', '2024-08-09 09:35:00', '2024-08-09 07:00:00', 'BOS', 'LAX', 150),
    #         ('Flight J890', '2024-08-10 13:55:00', '2024-08-10 11:20:00', 'JFK', 'ORD', 200);
    #     """
    # cursor.execute(insert_query)
    # print(f"Flights data inserted successfully")