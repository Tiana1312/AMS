import * as dotenv from 'dotenv';
import { DataSource } from "typeorm";
import config from "../config";

dotenv.config();

console.log('DB_PASSWORD:', process.env.DB_PASSWORD); // Add this
export const AppDataSource = new DataSource({
    type: config.db.type,
    host: config.db.host,
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    synchronize: false,
    logging: true,
    entities: config.app.isDev
        ? ["src/**/*.entity.ts"]
        : ["dist/**/*.entity.js"],
    subscribers: [],
    migrations: config.app.isDev
    ? ["src/database/migrations/*.ts"]
    : ["dist/database/migrations/*.js"],
    migrationsRun: false,
})




