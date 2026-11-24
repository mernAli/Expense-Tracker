# Expense Tracker

Mobile-first expense tracking web app built on the MERN stack. Log daily expenses by category and view a monthly report with charts. Users sign in with email and password, verified by OTP.

## Tech Stack
- **Client:** React (Vite), Tailwind CSS
- **Server:** Node.js, Express, Mongoose
- **Database:** MongoDB Atlas
- **Email:** Brevo SMTP (Nodemailer, from Phase 2)

## Folder Structure
```
expense-tracker/
├── client/   # React app
└── server/   # Express API
    └── src/  # config, middleware, routes (models/controllers added per phase)
```

## Getting Started

### 1. Server
```bash
cd server
npm install
cp .env.example .env    # then fill in MONGO_URI
npm run dev
```
Check it: http://localhost:5000/api/health

### 2. Client
```bash
cd client
npm install
npm run dev
```
Open http://localhost:5173

## Environment Variables (`server/.env`)
| Variable | Purpose |
|---|---|
| `PORT` | API port (default 5000) |
| `CLIENT_URL` | Allowed frontend origin for CORS |
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET`, `JWT_REFRESH_SECRET` | Token signing (Phase 2) |
| `SMTP_*`, `EMAIL_FROM` | Brevo email settings (Phase 2) |

Never commit `.env`.

## Roadmap
1. Project setup (current)
2. Auth backend
3. Auth screens
4. Expenses and categories
5. Monthly report
6. PWA and deployment
