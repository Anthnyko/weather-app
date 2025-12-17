## 🌦️ Weather App
A simple full‑stack weather application built with FastAPI (backend) and HTML/CSS/JavaScript (frontend).
It fetches real‑time weather data and a 5‑day forecast using the OpenWeatherMap API.

## 🚀 Features
- Current weather by city
- 5‑day forecast (noon each day)
- Error handling for invalid cities
- Clean UI with forecast cards
- Secure API key handling using `.env`

## 🧱 Tech Stack
__Backend__: FastAPI, Python, Requests  
__Frontend__: HTML, CSS, JavaScript  
__API__: OpenWeatherMap

## 📦 Setup Instructions
1. Clone the repo
```bash
git clone https://github.com/yourname/weather-app.git
cd weather-app
```


2. Install backend dependencies
```bash
pip install fastapi uvicorn python-dotenv requests
```


3. Add your `.env` file inside `/backend`
```
WEATHER_API_KEY=your_api_key_here
```

4. Run the backend
```bash
cd backend
uvicorn main:app --reload
```

5. Open the frontend
Open `frontend/index.html` in your browser.

## 📄 License
MIT License