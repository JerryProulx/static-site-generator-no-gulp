import compileSass from './tasks/compileSass';
import compileJS from './tasks/compileJS';
import compileHB from './tasks/compileHB';
import DevServer from './tasks/DevServer';

let server = new DevServer();

async function start(){
    await compileHB();
    await compileSass();
    await compileJS();
    await server.startServer();
}
async function restart(){
    await compileHB();
    await compileSass();
    await server.reload();
}


start();
