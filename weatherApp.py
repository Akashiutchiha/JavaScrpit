import requests
import json  #For working with json data

API_Key = "52cd5705d8d3383de1c55d90adf0c2e6" #from the OpenWeather Website
city = input('Type the name of a city: ')
base_url = 'http://api.openweathermap.org/data/2.5/weather?appid='+API_Key+'&q='+city


infoJson = requests.get(base_url).text
info = json.loads(infoJson)
print(info) 
# json contains a loads() method
#for transforming the json data into a Dictionary for easy 
#manipulation and accessibility.