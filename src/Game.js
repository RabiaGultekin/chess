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
    const moveOperation = chess.move({ from, to })
    if (moveOperation) {
        updateGame();
    }
}

const updateGame = () => {
    const isGameOver = chess.isGameOver();
    subjectGame.next({ chess: chess.board(), isGameOver, result: isGameOver ? getGameResult() : null })
}

const getGameResult = () => {
    if (chess.isCheckmate()) { //oyun şah/matla mı bitti?
        const winner = chess.turn() === 'w' ? 'Black' : 'White';
        return `ŞAH MAT - Kazanan : ${winner}`
    }
    else if (chess.isDraw()) {
        let reason = "50 Hamle Kuralı"
        if (chess.isStalemate) { // Eğer satranç oyununda çıkmaz döngü oluşursa reason içerisine çıkmaz döngü at. Oyunun çıkmaz döngüye yakalandı mı?
            reason = 'Çıkmaz Döngü'
        }
        else if (chess.isThreefoldRepetition) { //tekrarlanan hamleler
            reason = 'Tekrarlanan Hamle'
        }
        else if (chess.isInsufficientMaterial) { //
            reason = 'Yetersiz Malzeme'
        }
        return reason
    }
    else{
        return 'Bilinmeyen Durum'
    }
}
