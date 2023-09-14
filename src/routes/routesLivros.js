import express from "express";
import Livros from "../controller/livrosController.js";
import Favoritos from "../controller/favoritosController.js";



const routerLivros = express.Router();
const livrosController = new Livros();
const livrosFavoritos = new Favoritos();


routerLivros.get('/', (req, res)=>{ 
    res.status(200).send('Curso de Node'); 
});

routerLivros.get('/livros',livrosController.getLivros);
routerLivros.get('/livros/:id',livrosController.getLivroPorId);

routerLivros.get('/favoritos', livrosFavoritos.getFavoritos);

routerLivros.post('/livros',livrosController.createLivro);
routerLivros.post('favoritos/:id', livrosFavoritos.postFavoritos)

routerLivros.put('/livros/:id', livrosController.updateLivro);

routerLivros.delete('/livros/:id', livrosController.deleteItemListaPorId);
routerLivros.delete('/favoritos/:id', livrosFavoritos.deleteItemFavoritoPorId);



export default routerLivros;