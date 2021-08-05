import {Express, Request, Response} from "express";
import log from "./logger"

const routes = (app : Express) =>{

    app.get("/hello-world", (req: Request, res: Response) =>{
        res.sendStatus(200);
    })
}

export default routes;