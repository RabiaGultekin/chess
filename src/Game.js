import { Chess } from "chess.js";
import { BehaviorSubject } from "rxjs";

const chess = new Chess();

const subjectGame = new BehaviorSubject()

export default subjectGame

export const initGame = () => {
    updateGame();
}

export const move = (from, to) => {
    console.log(from, to);
    const moveOperation = chess.move({from, to})
    if(moveOperation){
        updateGame();
    }
}

const updateGame = () => {
    subjectGame.next({chess: chess.board()})
}
