# Stjernelog

Stjernelog is a web application for astronomy enthusiasts who want to log their astronomical observations. The app will also provide weather forecasts to help users find the best conditions for stargazing.

## Getting started

```bash
npm install
npm run start-dev
```

The server runs on http://localhost:9090.

## Project structure

- `app.js`: Main application entry point. Configures the Express server and registers the routers.
- `routers/`: Contains the API route handlers for authentication, observations, targets and weather forecasts.
- `.env.example`: Lists the environment variables the application will use, without their values.

## API endpoints

| Method | Endpoint          | Status          |
| ------ | ----------------- | --------------- |
| GET    | /api/observations | Placeholder     |
| GET    | /api/targets      | Placeholder     |
| GET    | /api/forecasts    | Placeholder     |
| POST   | /api/signup       | Not implemented |
| POST   | /api/login        | Not implemented |

## Planned features

- Log astronomical observations, including notes and optional photos.
- Browse astronomical targets such as planets, stars and deep-sky objects.
- Retrieve cloud cover and weather forecasts through an external weather API
- User registration and login.
- Optional email notifications when clear skies are forecasted.
