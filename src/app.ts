import express, { Application, Request, Response, NextFunction} from "express";
import bodyParser from "body-parser";
import _ from "lodash";

import "dotenv/config"
import Routes from "./Routes";
import Connect from "./connect";

const app: Application = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req: Request, res: Response) => {
    res.send("TS App is Running, you sure?");
});


const PORT = process.env.PORT||3000;
const db = "mongodb://localhost:27017/test"


Connect({ db })
Routes({ app })

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
  })