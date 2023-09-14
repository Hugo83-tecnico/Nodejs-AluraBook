// SUBINDO SERVIDOR

import app from './src/app.js';

const port = 8000;
const URL = 'http://localhost';

app.listen(port, () =>{
    console.log(`Servidor on no endereço ${URL}:${port}`);
})

