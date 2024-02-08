document.addEventListener('DOMContentLoaded', function() {
    const drawCardButton = document.getElementById('draw-card-button');
    const cardDisplay = document.getElementById('card-display');
    const drawnCardsDisplay = document.getElementById('drawn-cards');
    
    let cards = ['エース', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'ジャック', 'クイーン', 'キング'];
    let drawnCards = [];
    
    drawCardButton.addEventListener('click', function() {
        if (cards.length === 0) {
            cardDisplay.textContent = 'デッキにカードがありません！';
        } else {
            const randomIndex = Math.floor(Math.random() * cards.length);
            const randomCard = cards[randomIndex];
            cards.splice(randomIndex, 1); // デッキから引いたカードを削除
            drawnCards.push(randomCard); // 引かれたカードを drawnCards 配列に追加
            cardDisplay.textContent = '引いたカード: ' + randomCard;
            drawnCardsDisplay.textContent = '引かれたカード: ' + drawnCards.join(', ');
        }
    });
});
