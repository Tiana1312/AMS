"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("Project Initialized Successfully!");
// Thi is the main app setup. It initializes express and load routes
const express_1 = __importDefault(require("express"));
//import healthCheckRoutes from './routes/healthCheckRoutes';
//const express = require("express")
const app = (0, express_1.default)();
//const app = require("./src/index.js");
const PORT = process.env.PORT || 7000;
const healthCheckRoutes = require("./routes/healthCheckRoutes");
app.use(express_1.default.json()); //enable JSON parsing in the request body
app.use('/healthCheck', healthCheckRoutes);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
module.exports = app;
//# sourceMappingURL=index.js.map