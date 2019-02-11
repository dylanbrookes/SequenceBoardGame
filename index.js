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


class Deck {
    constructor() {
        let type = ["spade", "diamond", "club", "heart"];
        let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
        let deck = new Array();

        for(var i = 0; i < type.length; i++)
        {
            for(var x = 0; x < value.length; x++)
            {
                var card = {Value: value[x], Suit: type[i]};
                deck.push(card);
            }
        }

        this.cards = deck;
    }

    
    assignPlayerCards() {
        var tempArray = [];

        for (var i = 0; i < 13; i++) {
            var randomNumber = Math.floor(Math.random() * this.cards.length);
            var tempCard = this.cards[randomNumber];
    
            // delete card from deck
            this.cards.splice(randomNumber, 1);

            tempArray.push(tempCard);
        }
        return tempArray;
    }
}

function main() {
    let gameDeck = new Deck();
    player1.cards = gameDeck.assignPlayerCards();
    console.log(player1);
}


main();



