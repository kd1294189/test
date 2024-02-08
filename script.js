document.addEventListener('DOMContentLoaded', function() {
    const drawCardsButton = document.getElementById('draw-cards-button');
    const drawCardButton = document.getElementById('draw-card-button');
    const cardDisplay = document.getElementById('card-display');
    const drawnCardsDisplay = document.getElementById('drawn-cards');
    
    let cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    let drawnCards = [];
    
    drawCardsButton.addEventListener('click', function() {
        if (cards.length < 5) {
            cardDisplay.textContent = 'Not enough cards in the deck!';
        } else {
            for (let i = 0; i < 5; i++) {
                const randomIndex = Math.floor(Math.random() * cards.length);
                const randomCard = cards[randomIndex];
                cards.splice(randomIndex, 1); // Remove drawn card from deck
                drawnCards.push(randomCard); // Add drawn card to drawnCards array
            }
            cardDisplay.textContent = 'You drew: ' + drawnCards.join(', ');
            drawnCardsDisplay.textContent = 'Drawn cards: ' + drawnCards.join(', ');
        }
    });
    
    drawCardButton.addEventListener('click', function() {
        if (cards.length === 0) {
            cardDisplay.textContent = 'No more cards in the deck!';
        } else {
            const randomIndex = Math.floor(Math.random() * cards.length);
            const randomCard = cards[randomIndex];
            cards.splice(randomIndex, 1); // Remove drawn card from deck
            drawnCards.push(randomCard); // Add drawn card to drawnCards array
            cardDisplay.textContent = 'You drew: ' + randomCard;
            drawnCardsDisplay.textContent = 'Drawn cards: ' + drawnCards.join(', ');
        }
    });
});
