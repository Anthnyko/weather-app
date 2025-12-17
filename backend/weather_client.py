from dotenv import load_dotenv
import requests
import os

# Talks to the OpenWeatherMap API.
# Handles URLs, API keys, and requests.

load_dotenv()  # loads .env file.
API_KEY = os.getenv("WEATHER_API_KEY")  # Retrieves API_KEY from vault.

def get_weather(city: str):
    url = ( # Builds the request URL
        "https://api.openweathermap.org/data/2.5/weather"
        f"?q={city}&appid={API_KEY}&units=imperial"
    )
    
    try:
        response = requests.get(url) # requests library sends URL to API
        data = response.json()

        if response.status_code != 200:
            return {"error": data.get("message", "Unknown error")}

        return data
    except Exception as e:
        return {"error": str(e)}
    
def get_forecast(city: str):
    url = ( # Builds the request URL
        "https://api.openweathermap.org/data/2.5/forecast"
        f"?q={city}&appid={API_KEY}&units=imperial"
    )
    
    try:
        response = requests.get(url) # requests library sends URL to API
        data = response.json()

        if response.status_code != 200:
            return {"error": data.get("message", "Unknown error")}

        return data
    except Exception as e:
        return {"error": str(e)}