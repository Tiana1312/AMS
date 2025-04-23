import dotenv from "dotenv";
dotenv.config();

const app = {
    environment: process.env.NODE_ENV || "development",
    isDev: process.env.NODE_ENV === "development",
    isProduction: process.env.NODE_ENV === "production",
    HOST_NAME: process.env.HOST_NAME || "",
    PORT: +(process.env.PORT || 7000)
}

const db = {
    type: "postgres" as const,
    host: process.env.DB_HOST || "localhost",
    port: +(process.env.PORT || 5432),
    database: process.env.DATABASE || "health-system",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "",
}

export default { app, db }

  