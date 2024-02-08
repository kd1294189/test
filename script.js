document.addEventListener('DOMContentLoaded', function() {
    const drawCardButton = document.getElementById('draw-card-button');
    const cardDisplay = document.getElementById('card-display');
    
    const cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    
    drawCardButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * cards.length);
        const randomCard = cards[randomIndex];
        cardDisplay.textContent = 'You drew: ' + randomCard;
    });
});
