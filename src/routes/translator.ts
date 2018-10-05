
import {Request, Response} from "express";
//load to my local database file
import pokemons = require('../db.json' );

export class pokemons{

    //received the express instance from app.ts file
    public routes(app); void{
        app.route('/pokemons')
        .get((req: Request, res: Response)=> {
            res.status(200).send(pokemons);
        })

    }
}


