import fs from 'fs';


export function obterFavoritos(){
    return JSON.parse(fs.readFileSync("favoritos.json"));
};

export function guardarEmFavoritos(id){

    const leArquivosLivrosJson = JSON.parse(fs.readFileSync("livros.json"));
    const leArquivosFavoritosJson = JSON.parse(fs.readFileSync("favoritos.json"));

    const livro = leArquivosLivrosJson.find((item)=> item.id === id);

    fs.writeFileSync("favoritos.json",JSON.stringify([...leArquivosFavoritosJson,livro]));


};

export function deletarItemFavoritoPorId(id){

    let leArquivosJson = obterFavoritos();
    const index = leArquivosJson.findIndex((item)=> item.id === id);
    
    if(index === -1){
        return true;
    };

    leArquivosJson.splice(index,1);
    fs.writeFileSync("favoritos.json", JSON.stringify(leArquivosJson))

}
