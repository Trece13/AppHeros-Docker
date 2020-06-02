const app = require('./app');

async function main(){
    await app.listen(1313);
    console.log("Heros service is runing...")
}

main();