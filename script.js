document.addEventListener('DOMContentLoaded', function() {
    const drawCardButton = document.getElementById('draw-card-button');
    const cardDisplay = document.getElementById('card-display');
    const drawnCardsDisplay = document.getElementById('drawn-cards');
    
    let cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    let drawnCards = [];
    
    drawCardButton.addEventListener('click', function() {
        if (cards.length === 0) {
            cardDisplay.textContent = 'No more cards in the deck!';
        } else {
            if (drawnCards.length < 5) {
                const cardsToDraw = Math.min(5 - drawnCards.length, cards.length);
                for (let i = 0; i < cardsToDraw; i++) {
                    const randomIndex = Math.floor(Math.random() * cards.length);
                    const randomCard = cards[randomIndex];
                    cards.splice(randomIndex, 1); // Remove drawn card from deck
                    drawnCards.push(randomCard); // Add drawn card to drawnCards array
                }
                cardDisplay.textContent = 'You drew: ' + drawnCards.join(', ');
                drawnCardsDisplay.textContent = 'Drawn cards: ' + drawnCards.join(', ');
            } else {
                const randomIndex = Math.floor(Math.random() * cards.length);
                const randomCard = cards[randomIndex];
                cards.splice(randomIndex, 1); // Remove drawn card from deck
                drawnCards.push(randomCard); // Add drawn card to drawnCards array
                cardDisplay.textContent = 'You drew: ' + randomCard;
                drawnCardsDisplay.textContent = 'Drawn cards: ' + drawnCards.join(', ');
            }
        }
    });
});
