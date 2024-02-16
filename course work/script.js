document.addEventListener("DOMContentLoaded", function() {
    const colors = ["Красный", "Оранжевый", "Желтый", "Зеленый", "Голубой", "Синий", "Фиолетовый"];
    const colors_copy = ["Красный", "Оранжевый", "Желтый", "Зеленый", "Голубой", "Синий", "Фиолетовый"];
    const colorStyles = ["red", "orange", "yellow", "SeaGreen", "cyan", "blue", "violet"];

    // Дополнительные цвета для текста, чтобы увеличить шансы на уникальность, чтобы не совсем сильно сливались с фоном
    const textColors = ["maroon", "chocolate", "gold", "lime", "teal", "navy", "purple", "black", "gray"];

    let Userscore = 0;
    const proverbs = [
        "Цыплят по осени считают",
        "Что посеешь, то и пожнешь",
        "Кто рано встает, тому Бог подает",
        "Не зная броду, не суйся в воду",
        "Всяк кулик свое болото хвалит",
        "Без труда не выловить рыбку из пруда",
        "Хочешь есть калачи - не сиди на печи"
    ];

    const alphabetWords = ["Абажур", "Баклажан", "Ваза", "Груша", "Дом", "Еж", "Жемчуг", "Заяц", "Икра", "Кот", "Луна", "Море", "Нос", "Овца", "Парк", "Рыба", "Солнце", "Телефон", "Улица", "Фонарь", "Хлеб", "Цветок", "Чашка", "Шапка", "Щука", "Электроника", "Юла", "Яблоко"];


    const wordsByPartOfSpeech = [
        ["стол", "книга", "яблоко", "мышь", "дом", "автомобиль", "чашка"], // Существительные
        ["красивый", "большой", "хороший", "умный", "веселый", "интересный", "смелый"], // Прилагательные
        ["читать", "писать", "бегать", "плавать", "говорить", "смотреть", "работать"], // Глаголы
        ["быстро", "медленно", "тихо", "громко", "внимательно", "легко", "тщательно"] // Наречия
    ];
    



    let users = [
        { name: "Лимонохват", score: 510 },
        { name: "Бимо", score: 750 },
        { name: "Джейк", score: 650 },
        { name: "Гантер", score: 500 },
        { name: "Стив", score: 400 }
    ];
    
    // Функция для отображения списка пользователей на странице
    function renderLeaderboard(users) {
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        users.forEach((user, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${index + 1}. ${user.name} - ${user.score}`;
            userList.appendChild(listItem);
        });
    }
    
    // Сортировка пользователей по убыванию их рейтинга
    function sortUsersByScore(users) {
        return users.slice().sort((a, b) => b.score - a.score);
    }
    
    // Обновление списка пользователей на странице
    function updateLeaderboard() {
        const sortedUsers = sortUsersByScore(users);
        renderLeaderboard(sortedUsers);
    }
    
    // Добавление нового пользователя в рейтинговую таблицу
    function addUserToLeaderboard(name, score) {
        users.push({ name, score });
        updateLeaderboard();
    }







    


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
        location.reload();
    }

    function removeHeart() {
        if (lives > 0) {
            hearts[lives - 1].style.display = 'none';
            lives--;
            Userscore -= 50;
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

    function completeLevel2(){
            // Очищаем содержимое контейнера с цветами
            const gameContainer = document.getElementById("colorGame");
            gameContainer.innerHTML = '';
        
            // Показываем модальное окно с описанием второго уровня
            const level1Modal = document.getElementById("level2DescriptionModal");
            level1Modal.style.display = "block";
    }

    const partsOfSpeech = ["Существительные", "Прилагательные", "Глаголы", "Наречия"];

    const randPoF = Math.floor(Math.random() * partsOfSpeech.length)

    function completeLevel3(){
        // Очищаем содержимое контейнера с цветами
        const gameContainer = document.getElementById("colorGame");
        gameContainer.innerHTML = '';
    
        // Показываем модальное окно с описанием второго уровня
        const level1Modal = document.getElementById("level3DescriptionModal");


        // Случайный выбор части речи
        const randomPartOfSpeech = partsOfSpeech[randPoF];

        // Вывод выбранной части речи в модальное окно
        const descriptionParagraph = document.querySelector("#level3DescriptionModal p");
        descriptionParagraph.textContent = `Выбирай только эту часть речи: ${randomPartOfSpeech}`;
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
                    Userscore+=200;
                    setTimeout(() => {
                        this.style.backgroundColor = originalBackgroundColor;
                        this.style.color = originalTextColor;
                    }, 1000); // Задержка 1 секунда

                    if (currentIndex === colors.length) {
                        // Пользователь выбрал все цвета в правильном порядке, можно выполнить действия по завершению уровня
                       // alert('Вы выиграли!');
                        
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
            const proverbWithoutSpaces = randomProverb.replace(/\s/g, "");
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

                wordContainer.addEventListener("dragover", (event) => {
                    event.preventDefault(); // Предотвращаем действия по умолчанию
                });
                
                wordContainer.addEventListener("dragenter", (event) => {
                    event.preventDefault(); // Предотвращаем действия по умолчанию
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
                    const arrangedProverb = wordContainer.textContent;
                    if (arrangedProverb === proverbWithoutSpaces) {
                      //  alert("Поздравляем! Поговорка упорядочена верно!");
                      Userscore+=200;
                        completeLevel2();
                    }
                });
                wordContainer.appendChild(wordElement); // Добавляем слово в контейнер

            });

        });
    }
    function level3(){
        document.getElementById("startLevelButton2").addEventListener("click", function() {
            // Скрываем модальное окно с описанием второго уровня
            const level1Modal = document.getElementById("level2DescriptionModal");
            level1Modal.style.display = "none";
            startTimer(60, timerElement);

            levelElement.textContent = "Уровень: 3";

            let selectedWords = []; // Массив для хранения выбранных слов
            selectedWords = getRandomIndex(alphabetWords, 10);

            const wordContainer = document.getElementById("colorGame"); // Получаем контейнер для слов
           
             // Выбираем 10 случайных слов из массива alphabetWords
            selectedWords = getRandomWords(alphabetWords, 10);
            const alphaDict = selectedWords.slice();
            selectedWords.sort();
            // Сортируем выбранные слова в алфавитном порядке
            function getRandomIndex(max) {
                return Math.floor(Math.random() * max);
              }

              // Функция для выбора случайных слов из массива
            function getRandomWords(array, count) {
            const copy = array.slice();
            const result = [];
            for (let i = 0; i < count; i++) {
                const randomIndex = getRandomIndex(copy.length);
                result.push(copy.splice(randomIndex, 1)[0]);
            }
    return result;
        }
        let security = 0;
        // Создаем элементы для каждого выбранного слова и добавляем их в контейнер
        alphaDict.forEach(word => {
            const wordElement = document.createElement("div");
            wordElement.classList.add("alphabet-word");
            wordElement.textContent = word;
            wordContainer.appendChild(wordElement);
        });
        currentIndex = 0;
        // Отслеживаем нажатия на слова
        wordContainer.addEventListener("click", function(event) {
            const clickedWord = event.target.textContent;
            console.log(clickedWord);

            if (clickedWord === selectedWords[currentIndex]) {
                // Если выбранное слово правильное
                event.target.classList.add("correct-word"); // Делаем слово зеленым
                currentIndex++; // Переходим к следующему слову
                Userscore+=50;

                if (currentIndex === selectedWords.length) {
                    // Если все слова были выбраны верно
                  //  alert("Поздравляем! Вы завершили уровень!");
                    completeLevel3();
                    security++;
                    // Дополнительные действия по завершению уровня
                    // Например, вызов функции, которая подготовит следующий уровень или завершит игру
                }
            } else {
                // Если выбранное слово неправильное
                if(clickedWord.length < 20 && security === 0)
                {
                    removeHeart(); // Удаляем сердечко
                }

            }
        });

        });
    };

    
    function level4() {


        function getRandomWords(wordsByPartOfSpeech) {
            let selectedWords = [];
            let selectedIndexes = new Set(); // Множество для хранения уже выбранных индексов
            for (let i = 0; i < wordsByPartOfSpeech.length; i++) {
                const words = wordsByPartOfSpeech[i];
                while (selectedWords.length < (i + 1) * 2) {
                    const randomIndex = Math.floor(Math.random() * words.length);
                    if (!selectedIndexes.has(randomIndex)) {
                        selectedIndexes.add(randomIndex); // Добавляем индекс в множество выбранных
                        selectedWords.push(words[randomIndex]); // Добавляем слово в результат
                    }
                }
                selectedIndexes.clear(); // Очищаем множество выбранных индексов для следующего массива
            }
            return selectedWords;
        }
        
        

        document.getElementById("startLevelButton3").addEventListener("click", function() {
            // Скрываем модальное окно с описанием третьего уровня
            const level1Modal = document.getElementById("level3DescriptionModal");
            level1Modal.style.display = "none";
            startTimer(30, timerElement);
            levelElement.textContent = "Уровень: 4";
    
            // Получаем выбранные слова для уровня 4
            const selectedWords = getRandomWords(wordsByPartOfSpeech);
    
            // Отображаем выбранные слова в контейнере
            const wordContainer = document.getElementById("colorGame");
            selectedWords.forEach(word => {
                const wordElement = document.createElement("div");
                wordElement.classList.add("alphabet-word");
                wordElement.textContent = word;
                wordContainer.appendChild(wordElement);
            });
    
            let fin = 0;
            // Добавляем обработчик события click для слов в контейнере
            wordContainer.addEventListener("click", function(event) {

                const clickedWord = event.target.textContent;
                console.log(clickedWord);
    
                // Проверяем, к какой части речи относится выбранное слово
                switch (randPoF) {
                    case 0:
                        if (wordsByPartOfSpeech[0].includes(clickedWord)) {
                            console.log('Существительное');
                            console.log(clickedWord);
                            console.log(wordsByPartOfSpeech[0].includes(clickedWord));
                            console.log(wordsByPartOfSpeech[0]);

                            event.target.classList.add("correct-word");
                            fin++;
                        }
                        else {
                            if (clickedWord.length < 20) {
                                removeHeart();
                            }
                        }
                        break;
                    case 1:
                        console.log('Прилагательное');
                        console.log(clickedWord);
                        console.log(wordsByPartOfSpeech[1].includes(clickedWord));
                        console.log(wordsByPartOfSpeech[1]);

                        if (wordsByPartOfSpeech[1].includes(clickedWord)) {
                            event.target.classList.add("correct-word");
                            fin++;
                        }
                        else {
                            if (clickedWord.length < 20) {
                                removeHeart();
                            }
                        }
                        break;
                    case 2:
                        console.log('Глагол');
                        console.log(clickedWord);
                        console.log(wordsByPartOfSpeech[2].includes(clickedWord));
                        console.log(wordsByPartOfSpeech[2]);
                        if (wordsByPartOfSpeech[2].includes(clickedWord)) {
                            event.target.classList.add("correct-word");
                            fin++;
                        }
                        else {
                            if (clickedWord.length < 20) {
                                removeHeart();
                            }
                        }
                        break;
                    case 3:
                        console.log('Наречие');
                        console.log(clickedWord);
                        console.log(wordsByPartOfSpeech[3].includes(clickedWord));
                        console.log(wordsByPartOfSpeech[3]);

                        if (wordsByPartOfSpeech[3].includes(clickedWord)) {
                            event.target.classList.add("correct-word");
                            fin++;
                        }
                        else {
                            if (clickedWord.length < 20) {
                                removeHeart();
                            }
                        }
                        break;
                    default:
                        console.error("Неправильное значение randPoF:", randPoF);
                }

                console.log("fin = ", fin);
                if (fin >= 2) {
                    Userscore+=200;
                    const princessImage = document.getElementById("PrincessImage");
                    princessImage.style.display = "block";
    
                    const speechBubble = document.getElementById("speechBubble");
                    const typingText = document.getElementById("typingText");
                    typingText.textContent = "Молодец! Мы спасли принцессу";
                    clearInterval(interval);
                    document.getElementById("leaderboard").style.display = "block";
                    document.getElementById("inputContainer").style.display = "block";
                    document.getElementById("submitButton").addEventListener("click", function() {
                        const userNameInput = document.getElementById("userNameInput");
                        const userName = userNameInput.value.trim();
                        if (userName !== "") {
                            // Добавляем нового пользователя в таблицу с начальным рейтингом
                            addUserToLeaderboard(userName, Userscore);
                            // Очищаем поле ввода имени
                            userNameInput.value = "";
                        } else {
                            alert("Please enter a valid name!");
                        }
                    });
                    updateLeaderboard();
                }

            });


        });
    }


    generateColorWords();
    level2();
    level3();
    level4();

    
});
