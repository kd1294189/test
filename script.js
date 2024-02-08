document.addEventListener('DOMContentLoaded', function() {
    const drawCardButton = document.getElementById('draw-card-button');
    const cardDisplay = document.getElementById('card-display');
    const drawnCardsContainer = document.getElementById('drawn-cards-container');
    
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
            displayDrawnCards(); // 引かれたカードを表示
            cardDisplay.textContent = '引いたカード: ' + randomCard;
        }
    });

    // 引かれたカードを表示する関数
    function displayDrawnCards() {
        drawnCardsContainer.innerHTML = ''; // 札山の表示をクリア
        drawnCards.forEach(function(card, index) {
            const cardButton = document.createElement('button');
            cardButton.textContent = card;
            cardButton.classList.add('drawn-card-button');
            cardButton.addEventListener('click', function() {
                returnCardToDeck(index); // クリックされたカードを札山に戻す
            });
            drawnCardsContainer.appendChild(cardButton);
        });
    }

    // クリックされたカードを札山に戻す関数
    function returnCardToDeck(index) {
        const returnedCard = drawnCards.splice(index, 1)[0]; // 引かれたカードを drawnCards 配列から削除
        cards.push(returnedCard); // 札山に戻す
        displayDrawnCards(); // 引かれたカードを再表示
    }
});
