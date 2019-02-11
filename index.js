// for (var column = 0; column < data.length; column++) {
//     // get each column
//     for (var row = 0; row < data.length; row++) {
//         // get column's row value
//         if (data[column][row]['value'] === null)
//         console.log(data[column][row]);
//     }
// }


class Player {
    constructor(id) {
        this.id = id;
        this.cards = null;
    }
}

let playerArray = [
    player1 = new Player(1),
    player2 = new Player(2),
    player3 = new Player(3),
    player4 = new Player(4) 
];

console.log(playerArray[3]);