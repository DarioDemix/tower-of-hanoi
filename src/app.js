const { towerOfHanoi } = require('./towerOfHanoiCore');
const { rl } = require('./readLine');

async function start() {
    let wantToContinue = 'y';
    while (wantToContinue !== 'n') {
        const numberOfDisks = await rl.ask("Insert the number of disks: ");
        towerOfHanoi(numberOfDisks);
        wantToContinue = await rl.ask("Continue? (y/n): ")
    }
    rl.close();

}

start();