from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from weather_client import get_weather
from weather_client import get_forecast

app = FastAPI()

# Allow frontend to call backend

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],    # allows all origins 
    allow_methods=["*"],
    allow_headers=["*"],
)

# Weather endpoint

@app.get("/weather")
def weather(city: str):
    if not city:
        return {"error": "City is required"}
    
    data = get_weather(city)
    
    if "error" in data:
        return {"error": data["error"]}
    
    return data

@app.get("/forecast")
def forecast(city: str):
    if not city:
        return {"error": "City is required"}
    
    data = get_forecast(city)
    
    if "error" in data:
        return {"error": data["error"]}
    
    return data