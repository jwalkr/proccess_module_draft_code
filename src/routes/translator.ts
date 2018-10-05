
import {Request, Response} from "express";
//load to my local database file
import Uci = require('../db.json' );

export class uci{

    //received the express instance from app.ts file
    public routes(app); void{
        app.route('/Uci')
        .get((req: Request, res: Response)=> {
            res.status(200).send(Uci);
        })

    
}


