import express from 'express';
import config from 'config'
import connect from '../database/mongodb';
import LOG from '../utils/logger';
import { openRoutes } from '../routes/public/openRoutes';

const PORT = config.get('port');
const APP = express();

try {
  APP.listen(PORT, async ()=>{
    LOG.info(`App is running at http://localhost:${PORT}`)
      await connect();
      openRoutes(APP)
    })
}

catch(error:any) {
  LOG.error(`🔥 App is crashing`)
}

 


