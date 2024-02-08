document.addEventListener('DOMContentLoaded', function() {
    const drawCardButton = document.getElementById('draw-card-button');
    const cardDisplay = document.getElementById('card-display');
    const drawnCardsDisplay = document.getElementById('drawn-cards');
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
        drawnCardsDisplay.textContent = '引かれたカード: ' + drawnCards.join(', ');
        drawnCardsContainer.innerHTML = ''; // 札山の表示をクリア
        drawnCards.forEach(function(card, index) {
            const cardElement = document.createElement('div');
            cardElement.textContent = card;
            cardElement.classList.add('drawn-card');
            cardElement.dataset.index = index; // カードのインデックスを data 属性に設定
            cardElement.addEventListener('click', function() {
                returnCardToDeck(index); // クリックされたカードを札山に戻す
            });
            drawnCardsContainer.appendChild(cardElement);
        });
    }

    // クリックされたカードを札山に戻す関数
    function returnCardToDeck(index) {
        const returnedCard = drawnCards.splice(index, 1)[0]; // 引かれたカードを drawnCards 配列から削除
        cards.push(returnedCard); // 札山に戻す
        displayDrawnCards(); // 引かれたカードを再表示
    }
});
