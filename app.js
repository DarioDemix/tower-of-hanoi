const { towerOfHanoi } = require('./towerOfHanoiCore');
const { rl } = require('./readLine');

async function start() {
    let wantToContinue = 'y';
    while (wantToContinue !== 'n') {
        await play();
        wantToContinue = await rl.ask("Continue? (y/n): ")
    }
    rl.close();

    async function play() {
        const numberOfDisks = await rl.ask("Insert the number of disks: ");
        towerOfHanoi(numberOfDisks);
    }
}

start();