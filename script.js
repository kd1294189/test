document.addEventListener('DOMContentLoaded', function() {
    const drawCardButton = document.getElementById('draw-card-button');
    const cardDisplay = document.getElementById('card-display');
    const drawnCardsDisplay = document.getElementById('drawn-cards');
    const handContainer = document.getElementById('hand');
    
    //let cards = ['エース', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'ジャック', 'クイーン', 'キング'];

    let cards = ['リンゴ×1','リンゴ×2','リンゴ×3','リンゴ×4','リンゴ×5','リンゴ×6', 
    'ニンジン×1', 'ニンジン×2', 'ニンジン×3', 'ニンジン×4', 'ニンジン×5', 'ニンジン×6', 
    'ジャガイモ×1',  'ジャガイモ×2', 'ジャガイモ×3', 'ジャガイモ×4', 'ジャガイモ×5', 'ジャガイモ×6',
    'レタス×1',  'レタス×2', 'レタス×3', 'レタス×4', 'レタス×5', 'レタス×6',
    'トマト×1', 'トマト×2', 'トマト×3', 'トマト×4', 'トマト×5', 'トマト×6',
    'ピーマン×1', 'ピーマン×2', 'ピーマン×3', 'ピーマン×4', 'ピーマン×5', 'ピーマン×6'];

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
            //drawnCardsDisplay.textContent = '引かれたカード: ' + drawnCards.join(', ');
            drawnCardsDisplay.textContent = '引かれたカード:'
            renderHandButtons();
        }
    });

    function renderHandButtons() {
        handContainer.innerHTML = '';
        for (let i = 0; i < drawnCards.length; i++) {

            const cardButton = document.createElement('button');
            cardButton.classList.add('hand-button');
            cardButton.textContent = drawnCards[i];
            cardButton.addEventListener('click', function() {
                // ボタンを削除し、カードを札山に戻す
                cards.push(drawnCards[i]);
                drawnCards.splice(i, 1);
                renderHandButtons();
            });
            handContainer.appendChild(cardButton);
        }
    }
});
