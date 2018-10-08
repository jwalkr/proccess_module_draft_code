import axios from 'axios'
import {Request, Response} from "express";
//load to my local database file
// import Uci = require('../db.json' );

export class uci{

    //received the express instance from app.ts file
    public routes(app): void { //received the express instance from app.ts file         
        app.route('/translator')
        .get((req: Request, res: Response) => {   
            axios.post('https://restapiv1-restapiv1.firebaseapp.com/api/v1/ussddata', {type: 'action' , 
            TIMESTAMP: "03-OCT-2018 19:02:54" , 
            MSISDN: "182205277",
            SERVICE: "balance",
            TERMINATION_CODE: "0" ,
            NODE: "ge14101",
            ACCESS_CODE: "*141#",
            RESPONSE: "Balance Summary:\nAirtime:R3.24\nSMS:0\nData:10.00 MB",
            STATE: "200"
            })
            .then(function (server_response){
                console.log(server_response)
                res.status(200).send(server_response)
            })     
            // res.status(200).send(uci);
        })               
    }

    

        
}
    


