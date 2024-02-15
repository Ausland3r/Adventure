document.addEventListener("DOMContentLoaded", function() {
    const colors = ["Красный", "Оранжевый", "Желтый", "Зеленый", "Голубой", "Синий", "Фиолетовый"];
    const colors_copy = ["Красный", "Оранжевый", "Желтый", "Зеленый", "Голубой", "Синий", "Фиолетовый"];
    const colorStyles = ["red", "orange", "yellow", "SeaGreen", "cyan", "blue", "violet"];

    // Дополнительные цвета для текста, чтобы увеличить шансы на уникальность, чтобы не совсем сильно сливались с фоном
    const textColors = ["maroon", "chocolate", "gold", "lime", "teal", "navy", "purple", "black", "gray"];


    const proverbs = [
        "Молчание — золото, а речь — серебро",
        "Что посеешь, то и пожнешь",
        "Кто рано встает, тому Бог подает",
        "Семь раз отмерь, один раз отрежь",
        "Всяк кулик свое болото хвалит"
    ];


    


    const gameContainer = document.getElementById("colorGame");

    const startLevelButton = document.getElementById("startLevelButton");
    const modal = document.getElementById("levelDescriptionModal");
    const timerElement = document.getElementById("timer");
    const gameInfoElement = document.getElementById("gameInfo");
    const levelElement = gameInfoElement.querySelector("h2");


    const hearts = document.querySelectorAll('.hearts-container img');
    let lives = hearts.length;

    let currentIndex = 0;

    function gameOver() {
        // Ваш код для обработки завершения игры (например, вывод сообщения о проигрыше)
        alert("Вы проиграли");
    }

    function removeHeart() {
        if (lives > 0) {
            hearts[lives - 1].style.display = 'none';
            lives--;
        }
        if (lives === 0) {
            gameOver();
        }
    }

    function completeLevel1() {
        // Очищаем содержимое контейнера с цветами
        const gameContainer = document.getElementById("colorGame");
        gameContainer.innerHTML = '';
    
        // Показываем модальное окно с описанием второго уровня
        const level1Modal = document.getElementById("level1DescriptionModal");
        level1Modal.style.display = "block";
    }



    let interval; // Переменная для хранения идентификатора интервала

    function startTimer(duration) {
        let timer = duration;
        clearInterval(interval); // Остановка предыдущего интервала, если таковой был
    
        interval = setInterval(function () {
            let percentage = (timer / duration) * 100;
            progressBar.style.width = percentage + "%";
            timerElement.textContent = timer;
            if (--timer < 0) {
                clearInterval(interval);
                timerElement.textContent = "Время вышло!";
                removeHeart();
            }
        }, 1000);
    }
    


    window.onload = function() {
        modal.style.display = "block";
    }
    startLevelButton.onclick = function() {
        modal.style.display = "none";
        startTimer(30, timerElement);
        // Здесь можно добавить дополнительный код для начала уровня игры
            var img = document.getElementById("animatedImage");
            var img1 = document.getElementById("animatedImage1");
            var speechBubble = document.getElementById("speechBubble");
            var typingText = document.getElementById("typingText");
        
            speechBubble.style.display = "block";

    img.style.display = "block"; // Показываем изображение
    img.style.opacity = 1; // Запускаем анимацию появления
    img1.style.display = "block"; // Показываем изображение
    img1.style.opacity = 1; // Запускаем анимацию появления

    setTimeout(function() {
        typingText.style.width = typingText.scrollWidth + "px";
    }, 100);

    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function getRandomTextColor(excludeColor) {
        let textColor = textColors[Math.floor(Math.random() * textColors.length)];
        // Проверяем, чтобы цвет текста не совпадал с фоновым цветом
        while (textColor === excludeColor) {
            textColor = textColors[Math.floor(Math.random() * textColors.length)];
        }
        return textColor;
    }

    

    function generateColorWords() {
        shuffleArray(colors);
        shuffleArray(colorStyles);

        const gameFrameRect = gameContainer.getBoundingClientRect(); // Получаем размеры контейнера

        colors.forEach((color, index) => {
            const word = document.createElement("div");
            word.classList.add("color-word");
            const backgroundColor = colorStyles[index % colorStyles.length];
            word.style.backgroundColor = backgroundColor;
            // Получаем случайный цвет текста, который не совпадает с фоновым цветом
            const textColor = getRandomTextColor(backgroundColor);
            word.style.color = textColor;
            word.textContent = color;


            word.onclick = function() {
                const originalBackgroundColor = this.style.backgroundColor;
                const originalTextColor = this.style.color;
                const textContent = this.textContent.trim();

                if (textContent === colors_copy[currentIndex]) {
                    // Если выбранный цвет правильный, двигаемся к следующему цвету
                    currentIndex++;
                    this.style.backgroundColor = "green";
                    this.style.color = "white";
                    setTimeout(() => {
                        this.style.backgroundColor = originalBackgroundColor;
                        this.style.color = originalTextColor;
                    }, 1000); // Задержка 1 секунда

                    if (currentIndex === colors.length) {
                        // Пользователь выбрал все цвета в правильном порядке, можно выполнить действия по завершению уровня
                        alert('Вы выиграли!');
                        
                        // Дополнительные действия, когда пользователь выигрывает
                        completeLevel1();
                    }
                } else {
                    // Если выбранный цвет неправильный, удаляем сердечко
                    removeHeart();
                    this.style.backgroundColor = "red";
                    this.style.color = "white";
                    setTimeout(() => {
                        this.style.backgroundColor = originalBackgroundColor;
                        this.style.color = originalTextColor;
                    }, 1000); // Задержка 1 секунда
                }

            };
            gameContainer.appendChild(word);
        });
    }




    function level2(){
        document.getElementById("startLevelButton1").addEventListener("click", function() {
            // Скрываем модальное окно с описанием второго уровня
            const level1Modal = document.getElementById("level1DescriptionModal");
            level1Modal.style.display = "none";
            startTimer(30, timerElement);
            levelElement.textContent = "Уровень: 2";


            const randomProverb = proverbs[Math.floor(Math.random() * proverbs.length)];
            const proverbWords = randomProverb.split(" ");
            const wordContainer = document.getElementById("colorGame");
            shuffleArray(proverbWords);
            proverbWords.forEach((word) => {
                const wordElement = document.createElement("div");
                wordElement.classList.add("proverb-word");
                wordElement.textContent = word;
                wordContainer.appendChild(wordElement);
                
                wordElement.draggable = true; // Устанавливаем перемещаемость
                wordElement.setAttribute("data-word", word);


                wordElement.addEventListener("dragstart", (event) => {
                    event.dataTransfer.setData("text/plain", word); // Сохраняем данные о перемещаемом элементе
                });

                wordElement.addEventListener("drop", (event) => {
                    event.preventDefault(); // Предотвращаем действия по умолчанию
                    const draggedWord = event.dataTransfer.getData("text/plain"); // Получаем данные о перемещаемом элементе
                    if (draggedWord !== word) {
                        const draggedElement = document.querySelector(`.proverb-word[data-word="${draggedWord}"]`);
                        const dropTargetIndex = Array.from(wordContainer.children).indexOf(wordElement);
                        const draggedIndex = Array.from(wordContainer.children).indexOf(draggedElement);
                        if (dropTargetIndex < draggedIndex) {
                            wordContainer.insertBefore(draggedElement, wordElement.nextSibling);
                        } else {
                            wordContainer.insertBefore(draggedElement, wordElement);
                        }
                    }
                });
                wordContainer.appendChild(wordElement); // Добавляем слово в контейнер
            });


            // Здесь можно добавить код для начала второго уровня игры
        });




    }



    generateColorWords();
    level2();

    
});
