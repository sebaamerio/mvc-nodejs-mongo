import express from "express";
import "dotenv/config";
import { routerV1 } from "./routers/v1/index.route.js";
import { routerV2 } from "./routers/v2/index.route.js";
import { handlerError } from "./middlewares/handlerError.js";

const app = express();

app.use(express.json());
app.use("/v1", routerV1);
app.use("/v2", routerV2);

app.use(handlerError);

app.listen(process.env.PORT, () => {
  console.log(`server levntado en puerto: ${process.env.PORT}`);
});
