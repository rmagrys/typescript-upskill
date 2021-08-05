import express, {Request, Response} from 'express';
import config from 'config';
import log from "./logger";
import connect from "./db/connect";
import routes from "./routes";

const PORT = config.get("port")  as number;
const HOST = config.get("host") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
routes(app);


app.listen(PORT, HOST, () => {
    log.info(`Server listening at http://${HOST}:${PORT}`);
    connect();



})