let totalMoves = 0;

const doTowerOfHanoi = (numberOfDisks, fromRod = 'A', toRod = 'C', auxRod = 'B') => {
    if (numberOfDisks === 1) {
        move(fromRod, toRod);
    } else {
        doTowerOfHanoi(numberOfDisks - 1, fromRod, auxRod, toRod);
        move(fromRod, toRod);
        doTowerOfHanoi(numberOfDisks - 1, auxRod, toRod, fromRod);
    }
    
    function move(fromRod, toRod) {
        console.log(`${fromRod} => ${toRod}`);
        totalMoves++;
    }
}

const towerOfHanoi = numberOfDisks => {
    doTowerOfHanoi(numberOfDisks);
    console.log(`Total moves: ${totalMoves}`);
}

exports.towerOfHanoi = towerOfHanoi;