'use strict';

let messages = function(messages){
    document.querySelector('.messages').textContent=messages;
}

// random numbers genarater
let secreatNumber = Math.trunc(Math.random()*20)+1

let score = 20;

let highscore = 0;

document.querySelector('.hidden').textContent = '?';

document.querySelector('.button--02').addEventListener('click',function
(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // input null
    if(!guess){
        // document.querySelector('.messages').textContent='⛔️ No number!';
        messages('⛔️ No number!')


    }else if(guess === secreatNumber){
        // document.querySelector('.messages').textContent='🎉 Correct Number!';
        messages('🎉 Correct Number!')
        document.querySelector('.hidden').textContent = secreatNumber;

        document.querySelector('body').style.backgroundImage = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(48,253,45,1) 100%)';
        if(score>highscore){
            highscore = score
            document.querySelector('.highscore').textContent=highscore;
        }
        
    }else if (guess !== secreatNumber) {
        guess>secreatNumber?  messages('📈 Too high!'): messages('📉 Too low!');
        if(score>1){
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            // document.querySelector('.score').textContent = '💥 You lost the game!';
            messages('💥 You lost the game!')
            document.querySelector('.score').textContent = 0;
        }
    }
    // }else if(guess > secreatNumber){
    //     document.querySelector('.messages').textContent='📈 Too high!';
    //     if(score>1){
    //         score--
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         // document.querySelector('.score').textContent = '💥 You lost the game!';
    //         messages('💥 You lost the game!')
    //     }
        

    // }else if(guess < secreatNumber){
    //     // document.querySelector('.messages').textContent='📉 Too low!';
    //     messages('📉 Too low!')
    //     if(score>1){
    //         score--
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         // document.querySelector('.score').textContent = '💥 You lost the game!';
    //         messages( '💥 You lost the game!')
    //     }

    // }else if(guess === secreatNumber){
    //     // document.querySelector('.messages').textContent='🎉 Correct Number!';
    //     messages('🎉 Correct Number!')
    //     document.querySelector('.hidden').textContent = secreatNumber;
    //     if(score>highscore){
    //         highscore = score
    //         document.querySelector('.highscore').textContent=highscore;
    //     }
    // }
})


// re set button....

document.querySelector('.button--01').addEventListener('click',function
(){
    score = 20;

    secreatNumber = Math.trunc(Math.random()*20)+1

    document.querySelector('body').style.backgroundImage = 'linear-gradient(50deg,rgb(214, 146, 18),rgb(196, 49, 49))';

    console.log(document.querySelector('.hidden').textContent = '?');


    // document.querySelector('.messages').textContent='Start guessing...';
    messages('Start guessing...')

    document.querySelector('.score').textContent= score;

    document.querySelector('.guess').value = '';
    
})
