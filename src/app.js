import express from "express";
import cors from "cors"
import routerLivros from "./routes/routesLivros.js";
import routerFavoritos from "./routes/routesFavoritos.js";


const app = express();
app.use(cors({origin:"*"}));
app.use(express.json());
app.use(routerLivros);
app.use(routerFavoritos);

export default app;