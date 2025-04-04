import express from 'express';
import { router } from "./routes/healthCheckRoutes";

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json()); 
app.use('/healthCheck', router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
