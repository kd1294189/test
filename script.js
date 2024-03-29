document.addEventListener('DOMContentLoaded', function() {
    const drawCardButton = document.getElementById('draw-card-button');
    const cardDisplay = document.getElementById('card-display');
    const drawnCardsDisplay = document.getElementById('drawn-cards');
    const handContainer = document.getElementById('hand');
    

    let cards = ['リンゴ×1','リンゴ×2','リンゴ×3', 
    'スイカ×1', 'スイカ×2', 'スイカ×3',  
    'ブドウ×1',  'ブドウ×2', 'ブドウ×3', 
    'レタス×1',  'レタス×2', 'レタス×3',
    'トマト×1', 'トマト×2', 'トマト×3', 
    'キノコ×1', 'キノコ×2', 'キノコ×3'];

    //使用カード
    let drawnCards = [];

    //  直前カード
    let last = "";
    let last_cnt = 0;

    //  取得食料
    let cnt = 0
    

    
    drawCardButton.addEventListener('click', function() {

        if (cards.length === 0) {
            cardDisplay.textContent = '探したが食料はもうありませんでした…ゲームオーバー';
            process.exit();

        } else {

            const randomIndex = Math.floor(Math.random() * cards.length);
            const randomCard = cards[randomIndex];

            cards.splice(randomIndex, 1); // デッキから引いたカードを削除
            drawnCards.push(randomCard); // 引かれたカードを drawnCards 配列に追加

            /*
            if(last == randomCard){

                cardDisplay.textContent = '見つけた食料:' + randomCard + ' 食料没収！！';

                cnt -= last_cnt;
            }*/


            cnt += parseInt( randomCard[4]);

            if(cnt > 20){

                cardDisplay.textContent = '見つけた食料:' + randomCard + ' 食料が溢れました！ゲームオーバー';
                drawnCardsDisplay.textContent = '食料数:　' + String(cnt);

            }


            else if(cnt == 20){

                cardDisplay.textContent = '見つけた食料:　' + randomCard + ' 食料がたまりました！クリア';
                drawnCardsDisplay.textContent = '食料数:　' + String(cnt);
                
            }

            else{

                cardDisplay.textContent = '見つけた食料:　' + randomCard;
                drawnCardsDisplay.textContent = '食料数:　' + String(cnt);
                
                /*
                last = randomCard;
                last_cnt = parseInt( randomCard[4]);
                */

            }

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
                //cards.push(drawnCards[i]);
                //drawnCards.splice(i, 1);
                //renderHandButtons();
            });
            
            handContainer.appendChild(cardButton);
        }
        
    }
});
