document.addEventListener('DOMContentLoaded', function() {
    const drawCardButton = document.getElementById('draw-card-button');
    const cardDisplay = document.getElementById('card-display');
    const drawnCardsDisplay = document.getElementById('drawn-cards');
    
    let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let drawnCards = [];
    
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
