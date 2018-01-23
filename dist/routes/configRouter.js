"use strict";
const express_1 = require('express');
const ConfigData = require('../envelope_config');
class ConfigRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getConfig(req, res, next) {
        res.send(ConfigData);
    }
    init() {
        this.router.get('/testing', this.getConfig);
    }
}
exports.ConfigRouter = ConfigRouter;
const configRouter = new ConfigRouter();
configRouter.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configRouter.router;
