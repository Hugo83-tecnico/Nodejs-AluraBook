import express from "express";
import Favoritos from "../controller/favoritosController.js";


const routerFavoritos = express.Router();
const livrosFavoritos = new Favoritos();


routerFavoritos.get('/favoritos', livrosFavoritos.getFavoritos);

routerFavoritos.post('/favoritos/:id', livrosFavoritos.postFavoritos);

routerFavoritos.delete('/favoritos/:id', livrosFavoritos.deleteItemFavoritoPorId);


export default routerFavoritos;