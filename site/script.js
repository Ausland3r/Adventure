document.addEventListener('DOMContentLoaded', function() {
const content = document.getElementById('image-gallery');
const contentRect = content.getBoundingClientRect();
const contentWidth = contentRect.width;
const contentHeight = contentRect.height;
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');



function endGame(){
    const image1Left = parseFloat(image1.style.left);
    const image2Left = parseFloat(image2.style.left);
    const image3Left = parseFloat(image3.style.left);
    const image4Left = parseFloat(image4.style.left);
    const image5Left = parseFloat(image5.style.left);
    const image6Left = parseFloat(image6.style.left);
    const image7Left = parseFloat(image7.style.left);

    const image1Top = parseFloat(image1.style.top);
    const image2Top = parseFloat(image2.style.top);
    const image3Top = parseFloat(image3.style.top);
    const image4Top = parseFloat(image4.style.top);
    const image5Top = parseFloat(image5.style.top);
    const image6Top = parseFloat(image6.style.top);
    const image7Top = parseFloat(image7.style.top);
    var randomChance = Math.random();
    
  
    

 

    var flag = 0;
    var progressBar = document.getElementById('progress-bar');
    
    function updateProgressBar() {
      // Вычисляем процент завершения на основе flag и обновляем прогресс бар и текст
      var percentComplete = Math.round((flag / 6) * 100);
      progressBar.style.width = percentComplete + '%';}


    if(image1Left - image5Left > 72 && image1Left - image5Left < 110)
    {
        if(image1Top - image5Top > 20 && image1Top - image5Top < 40)
        {

            flag+=1;
            updateProgressBar();
        }
        else
        {
            if (randomChance < 0.2) {
                image5.classList.toggle('not-ready');
            }
        }
    }
    else
    {
        if (randomChance < 0.2) {
            image5.classList.toggle('not-ready');
        }
    }


    if(image1Left - image2Left > -190 && image1Left - image2Left < -165)
    {
        if(image1Top - image2Top > -85 && image1Top - image2Top < -65)
        {
            flag+=1;
            updateProgressBar();
        }
        else
        {
            if (randomChance < 0.2) {
                image2.classList.toggle('not-ready');
            }
        }
    }
    else
    {
        if (randomChance < 0.2) {
            image2.classList.toggle('not-ready');
        }
    }
    if(image1Left - image3Left > -265 && image1Left - image3Left < -240)
    {
        if(image1Top - image3Top > -145 && image1Top - image3Top < -110)
        {
            flag+=1;
            updateProgressBar();
        }
        else
        {
            if (randomChance < 0.2) {
                image3.classList.toggle('not-ready');
            }
        }
    }
    else
    {
        if (randomChance < 0.2) {
            image3.classList.toggle('not-ready');
        }
    }
    if(image1Left - image4Left > -285 && image1Left - image4Left < -275)
    {
        if(image1Top - image4Top > -245 && image1Top - image4Top < -200)
        {
            flag+=1;
            updateProgressBar();
        }
        else
        {
            if (randomChance < 0.2) {
                image4.classList.toggle('not-ready');
            }
        }
    }
    else
    {
        if (randomChance < 0.2) {
            image4.classList.toggle('not-ready');
        }
    }
    if(image1Left - image6Left > -145 && image1Left - image6Left < -120)
    {
        if(image1Top - image6Top > -410 && image1Top - image6Top < -395)
        {
            flag+=1;
            updateProgressBar();
        }
        else
        {
            if (randomChance < 0.2) {
                image6.classList.toggle('not-ready');
            }
        }
    }
    else
    {
        if (randomChance < 0.2) {
            image6.classList.toggle('not-ready');
        }
    }
    if(image1Left - image7Left > 20 && image1Left - image7Left < 65)
    {
        if(image1Top - image7Top > -280 && image1Top - image7Top < -240)
        {
            flag+=1;
            updateProgressBar();
        }
        else
        {
            if (randomChance < 0.2) {
                image7.classList.toggle('not-ready');
            }
        }
    }
    else
    {
        if (randomChance < 0.2) {
            image7.classList.toggle('not-ready');
        }
    }
    if(flag >= 6)
    {
        updateProgressBar();
        image1.classList.toggle('ready');
        image2.classList.toggle('ready');
        image3.classList.toggle('ready');
        image4.classList.toggle('ready-hand');
        image5.classList.toggle('ready');
        image6.classList.toggle('ready');
        image7.classList.toggle('ready');

        alert('Всё!');
    }


}


const pieces = document.querySelectorAll('.draggable');

pieces.forEach(piece => {
    const randomX = Math.random() * (contentWidth - Math.max(piece.clientWidth, piece.clientHeight));
    const randomY = Math.random() * (contentHeight - Math.max(piece.clientWidth, piece.clientHeight));

    piece.style.left = `${randomX}px`;
    piece.style.top = `${randomY}px`;

    const randomRotation = [0, 90, 180, 270][Math.floor(Math.random() * 4)];
    let rotation = randomRotation;
    piece.rotation = randomRotation;
    piece.style.transform = `rotate(${rotation}deg)`;

    piece.addEventListener('dblclick', function() {
        rotation = (rotation + 90) % 360;
        piece.rotation = rotation;
        piece.style.transform = `rotate(${rotation}deg)`;
    });

    piece.addEventListener('mousedown', function(e) {
        e.preventDefault();
        const startX = e.clientX - parseFloat(piece.style.left);
        const startY = e.clientY - parseFloat(piece.style.top);

        function mouseMoveHandler(e) {
            const newX = e.clientX - startX;
            const newY = e.clientY - startY;

            piece.style.left = `${newX}px`;
            piece.style.top = `${newY}px`; 
        }
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);

            function mouseUpHandler() {
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
                endGame();
            }
    });
    

});

});