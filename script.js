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
            if (drawnCards.length === 0) {
                // Draw 5 cards on first click
                for (let i = 0; i < 5; i++) {
                    const randomIndex = Math.floor(Math.random() * cards.length);
                    const randomCard = cards[randomIndex];
                    cards.splice(randomIndex, 1); // Remove drawn card from deck
                    drawnCards.push(randomCard); // Add drawn card to drawnCards array
                }
            } else {
                // Draw 1 card on subsequent clicks
                const randomIndex = Math.floor(Math.random() * cards.length);
                const randomCard = cards[randomIndex];
                cards.splice(randomIndex, 1); // Remove drawn card from deck
                drawnCards.push(randomCard); // Add drawn card to drawnCards array
            }
            
            // Update drawn cards display
            drawnCardsDisplay.textContent = 'Drawn cards: ' + drawnCards.join(', ');
        }
    });
});
