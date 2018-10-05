import * as express from 'express'
import * as bodyParser from 'body-parser'
import { uci } from "./routes/translator";

class App {
    public app: express.Application 
    public uciRoutes: uci = new uci();

    constructor(){
        this.app = express()
        this.config()
        this.uciRoutes.routes(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json())
        //support application/x-www-form-urlencoded post data 
        this.app.use(bodyParser.urlencoded({
            extended: false
        }))
    }
}

export default new App().app