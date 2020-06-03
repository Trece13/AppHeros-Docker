const app = require('./app');

async function main(){
    await app.listen(4000);
    console.log("Heros service is runing...")
}

main();