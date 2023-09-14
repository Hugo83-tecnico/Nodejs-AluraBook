import { obterFavoritos, guardarEmFavoritos, deletarItemFavoritoPorId } from "../servicos/favoritosServiços.js";

class Favoritos{

    getFavoritos(req,res){
        try{
            const favoritos = obterFavoritos();
            res.send(favoritos);
        }catch(e){
            res.status(500).send(e.message);
        }
    }

    postFavoritos(req,res){
        
        try{
            const id = req.params.id;
            guardarEmFavoritos(id);
            res.status(201).send("Salva com sucesso")
        }catch(e){
            res.status(500).send(e.message);
        }
    }

    deleteItemFavoritoPorId(req,res){

        try{
            const id = req.params.id;
            if(id && Number(id)){
                const teste = deletarItemFavoritoPorId(id);

                if(!teste) {
                    res.status(201).send({message:`Item foi deletado com sucesso`});
                }else{
                    res.status(422).send({message:`Item não existe ou já foi deletado`});
                }
            }else{
                res.status(422).send("Id inválido!");
            }

        }catch(e){
            res.status(500).send(e.message);
        }
    }

}

export default Favoritos;

