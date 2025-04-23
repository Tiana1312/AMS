import 'module-alias/register';
import "reflect-metadata";
import express from 'express';
import { router } from "@/routes";
import config from "@/config"
import { AppDataSource } from '@/database/data-source';

const app = express();
 
AppDataSource.initialize()
  .then(() => {
  })
  .catch((error) => console.log(error))

app.use("/", router);

app.listen(config.app.PORT, () => {
  console.log(`Server is running at ${config.app.HOST_NAME}:${config.app.PORT}`);
});

