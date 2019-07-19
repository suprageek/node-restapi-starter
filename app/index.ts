import * as http from 'http';
import express, { Application } from 'express';
import * as config from './core/config';

import Routes from "./routes";
import Locale from "./core/locale";
import Logger from "./core/logger";
import dbConnection from "./core/db/connect";

const port: number = config.SERVER_PORT;

const app: Application = express();

// Cron.init();
Routes.init(app);

const server: http.Server = http.createServer(app);

server.listen(port, async() => {
  await dbConnection();

  (new Locale());

  Logger.info(`Server started - ${port}`);
});


export default server;
