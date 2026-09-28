let 
    divFan = document.querySelector('.box .fan'),
    turnOff = document.querySelector('.box .off'),
    turnOn = document.querySelector('.box .on'),
    buttons = document.querySelectorAll('.box ul li'),
    one = document.querySelector('.box .one'),
    two = document.querySelector('.box .two'),
    three = document.querySelector('.box .three'),
    sound = document.querySelector('.box audio');

    turnOff.onclick = function() {
        turnOffButtons();
    }

    turnOn.onclick = function(){
        turnOffButtons();
        sound.play();
        sound.volume = 0.1;
        sound.playbackRate = 1;
        this.classList.add('active');
        divFan.classList.add('turnOn');
    }

    one.onclick = function() {
        turnOffButtons();
        sound.play();
        sound.volume = 0.3;
        sound.playbackRate = 1.25;
        this.classList.add('active');
        divFan.classList.add('turnOne');
    }

    two.onclick = function() {
        turnOffButtons();
        sound.play();
        sound.volume = 0.5;
        sound.playbackRate = 1.5;
        this.classList.add('active');
        divFan.classList.add('turnTwo');
    }

    three.onclick = function() {
        turnOffButtons();
        sound.play();
        sound.volume = 1;
        sound.playbackRate = 1.75;
        this.classList.add('active');
        divFan.classList.add('turnThree');
    }
function turnOffButtons() {
    sound.pause();
    sound.currentTime = 0;

    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    divFan.classList.remove('turnOn', 'turnOne', 'turnTwo', 'turnThree')
};