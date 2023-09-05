import pandas as pd
from pandas import DataFrame
from IPython.display import display
import mysql.connector
from mysql.connector import Error
from flask import Flask, jsonify, request

#------------------
def create_server_connection(host_name, database_name, user_name, user_password):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            database=database_name,
            user=user_name,
            passwd=user_password
        )
        print("MySQL Database connection successful")
        cursor = connection.cursor()
        cursor.execute("select database()")
        print("You are currently in data base: "+str(cursor.fetchone())+"\nz|" )
    except Error as err:
        print(f"Error: '{err}'")

    return connection

#------------------
def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        print("Query successful")
        return True
    except Error as err:
        print(f"Error: '{err}'")
        return False

def execute_list_query(connection, query, values):
    cursor = connection.cursor()
    try:
        cursor.executemany(query, values)
        connection.commit()
        print("Query successful")
        return True
    except Error as err:
        print(f"Error: '{err}'")
        return False

def read_query(connection, query):
    cursor = connection.cursor()
    result = None
    try:
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    except Error as err:
        print(f"Error: '{err}'")
        return False
#------------------ QUERIES
insert_many_user_query = '''
    INSERT INTO user (user_name, user_email, user_password) 
    VALUES (%s, %s, %s)
    '''

insert_many_production_query = '''
    INSERT INTO production (production_manager, production_name, production_description, production_duration, production_tags)
    VALUES (%s, %s, %s, %s, %s)
    '''

insert_many_event_query = '''
    INSERT INTO event_detail (production_id, event_date, event_capacity, event_tksold)
    VALUES (%s, %s, %s, %s,)
    '''

users_data = [
    ('Diego', 'diego@gmail.com', '12345d'), 
    ('Estefa', 'estefa@gmail.com', '123456e'),
    ('Edwyn', 'edwyn@gmail.com', '12345e'),
    ('Sahel', 'sahel@gmail.com', '12345s'),
    ('Andru', 'andru@gmail.com', '12345a')
]

productions_data = [
	(1, 'Bodas de Sangre', 'Obra de Lorca', 70, 'teatro-musica-drama-arte'),
	(2, 'Escritura creativa', 'Taller para escribir con libertad', 120, 'taller-escritura creativa-arte'),
	(3, 'Street Performance de Los Cholos', 'Presentaciones en la calle de danza y teatro del grupo Los Cholos', 60, 'teatro-danza-musica-calle-arte'),
] 

events_data = [
    [1,"2023-09-27 12:00:00", 80, 60],
    [1,"2023-09-28 17:00:00", 80, 50],
    [1,"2023-09-29 15:30:00", 100, 20],
    [2,"2023-10-19 14:00:00", 20, 15],
    [2,"2023-11-20 14:30:00", 20, 10],
    [4,"2023-07-22 11:00:00", 100, 40],
    [4,"2023-07-23 12:00:00", 100, 15],
    [4,"2023-07-24 11:00:00", 100, 10],
    
] 
#------------------
connection = create_server_connection('localhost', 'theatertickets', 'root', 'diminombre')

def insert_user(user_name, user_email, user_password, _type):
	query = "INSERT INTO user (user_name, user_email, user_password, type) VALUES('%s', '%s', '%s', '%s');" % (user_name, user_email, user_password, _type)
	execute_query(connection, query)

def insert_production(production_manager, production_name, production_description, production_duration, production_tags):
	production_duration = str(production_duration)
	query = "INSERT INTO production (production_manager, production_name, production_description, production_duration, production_tags) VALUES('%s', %s', '%s', %s,'%s');" % (production_manager, production_name, production_description, production_duration, production_tags)
	execute_query(connection, query)

def insert_event(production_id, event_date, event_capacity, event_tksold):
	production_id = str(production_id)
	event_capacity = str(event_capacity)
	event_tksold = str(event_tksold)
	query = '''INSERT INTO event_detail (production_id, event_date, event_capacity, event_tksold) VALUES(%s, '%s', %s,%s);
	'''% (production_id, event_date, event_capacity, event_tksold)
	execute_query(connection, query)

def insert_ticket(user_user_id, event_detail_id, ammount):
    user_name = str(user_user_id)
    event_detail_id = str(event_detail_id)
    ammount = str(ammount)
    query = '''INSERT INTO ticket_detail (user_user_id, event_detail_id, ammount) VALUES(%s, %s, %s);
    '''% (user_user_id, event_detail_id, ammount)
    return execute_query(connection, query)

def get_property_by_id(connection, property, table, id, id_column):
    result = read_query(connection, "SELECT "+table+"."+property+" FROM "+table+" WHERE "+id_column+"="+str(id))
    if result != None and len(result) != 0:
        return result[0][0]
    return None

def buy_ticket(user_id, event_id, quantity = 1):
    production_id = get_property_by_id(connection, "production_id", "event_detail", event_id, "event_id")
    if production_id == None:
        return {"message": "ERROR Event does not exist"}
    production_manager = get_property_by_id(connection, "production_manager", "production", production_id, "production_id")
    if production_manager == user_id:
        return {"message": "ERROR Users can not buy tickets for their own events"}
    if not insert_ticket(user_id, event_id, quantity): 
        return {"message": "ERROR Ticket was not added to Data Base"}
    return {"message": "OK"}

#---- DB Filler PARA LLENAR LA BASE DE DATOS CON INFORMACION.
#execute_list_query(connection, insert_many_user_query, users_data)
#execute_list_query(connection, insert_many_production_query, productions_data)
#for i in range(len(events_data)):
#    insert_event(events_data[i][0],events_data[i][1],events_data[i][2],events_data[i][3])

#insert_event(1,"2023-09-27 12:00:00", 80, 60)

#---- DB Filler


class Production():
    def __init__(self):
        self.query = "SELECT * FROM production"
    def dict(self, tuple):
        production = {
            "production_id": tuple[0],
            "production_manager": tuple[1],
            "production_name": tuple[2],
            "production_description":tuple[3],
            "production_duration":tuple[4],
            "roduction_tags":tuple[5]
        }
        return production

class Event():
    def __init__(self):
        self.query = "SELECT * FROM production"
    def dict(self, tuple):
        production = {
            "production_id": tuple[0],
            "production_manager": tuple[1],
            "production_name": tuple[2],
            "production_description":tuple[3],
            "production_duration":tuple[4],
            "roduction_tags":tuple[5]
        }
        return production

class User():
    def __init__(self):
        self.query = "SELECT * FROM production"
    def dict(self, tuple):
        production = {
            "production_id": tuple[0],
            "production_manager": tuple[1],
            "production_name": tuple[2],
            "production_description":tuple[3],
            "production_duration":tuple[4],
            "roduction_tags":tuple[5]
        }
        return production



def get_all_elements_json(Element):
    e = Element()
    elements = []
    result = read_query(connection, e.query)
    for i in result:
        elements.append(e.dict(i))
    return elements
    del e


#------------------ FLASK APP


print(read_query(connection, "SELECT * FROM event"))
app = Flask(__name__)

@app.route('/production', methods=['GET'])
def getProducts():
    return jsonify(get_all_elements_json(Production))

@app.route('/event', methods=['GET'])
def getEvent():
    return jsonify(get_all_elements_json(Event))

@app.route('/user', methods=['GET'])
def getUser():
    return jsonify(get_all_elements_json(User))

if __name__ == '__main__':
    app.run(debug=True, port=4000)



