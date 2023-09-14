import fs from 'fs';

export function obterLista(){
    return JSON.parse(fs.readFileSync("livros.json"));
};

export function obterListaPorId(id){
    return JSON.parse(fs.readFileSync("livros.json")).filter((item)=> item.id === id);
};

export function createLista(novoDadoJson){
    let leArquivosJson = obterLista();
    fs.writeFileSync("livros.json", JSON.stringify([...leArquivosJson, novoDadoJson]))
};

export function updateLista(id,corpoRequiscao){
    let leArquivosJson = obterLista();
    const index = leArquivosJson.findIndex((item)=> item.id === id);

    leArquivosJson[index] = corpoRequiscao;

    fs.writeFileSync("livros.json", JSON.stringify(leArquivosJson));

   
};

export function deleteItemListaPorId(id){

    let leArquivosJson = obterLista();
    const index = leArquivosJson.findIndex((item)=> item.id === id);
    
    if(index === -1){
        return true;
    };

    leArquivosJson.splice(index,1);
    fs.writeFileSync("livros.json", JSON.stringify(leArquivosJson))

}