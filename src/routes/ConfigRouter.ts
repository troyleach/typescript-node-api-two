import {Router, Request, Response, NextFunction} from 'express';

const ConfigData = require('../envelope_config');

export class ConfigRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }


  public getConfig(req: Request, res: Response, next: NextFunction) {
    res.send(ConfigData);
  }

  init() {
    this.router.get('/testing', this.getConfig);
  }
}

const configRouter = new ConfigRouter();
configRouter.init();

export default configRouter.router;
