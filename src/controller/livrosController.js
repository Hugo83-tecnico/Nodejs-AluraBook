import { obterLista, obterListaPorId, createLista, updateLista, deleteItemListaPorId } from "../servicos/livrosServicos.js";


class Livros{

    getLivros(req,res){

        try{
            res.send(obterLista());
        }catch(e){
            res.status(500).send(e.message);
        }
    };

    getLivroPorId(req,res){

        const id = parseInt(req.params.id);

        try{
            if(id && Number(id)){
                const busca = obterListaPorId(id);
                res.send(busca);
            }else{
                res.status(422).send("Id inválido!");
            }

        }catch(e){
            res.status(500).send(e.message);
        }
    };

    createLivro(req,res){

        const novoDadoJson = req.body;

        try{
            createLista(novoDadoJson)
            res.status(201).send("Dados foram salvos");
        }catch(e){
            res.status(500).send(e.message);
        }
    };

    updateLivro(req,res){

        const id = parseInt(req.params.id);
       
        try{
            if(id && Number(id)){
                const corpoRequiscao = req.body;

                updateLista(id,corpoRequiscao);
                res.status(201).send("Salvo com sucesso!");
            }else{
                res.status(422).send("Id inválido!");
            }
           
        }catch(e){
            res.status(500).send(e.message);
        }
       
    };

    deleteItemListaPorId(req,res){

        const id = parseInt(req.params.id);

        try{
            if(id && Number(id)){
                const teste = deleteItemListaPorId(id);

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

export default Livros;