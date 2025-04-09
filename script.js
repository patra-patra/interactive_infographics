document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.timeline-btn');
    const windowsSvg = document.getElementById('windows-svg');

    const yearColors = {
        '1970': 'black',
        '1980': 'white',
        '1990': '#3357FF',
        '2000': '#F033FF',
        '2010': '#FF33F0'
    };

    const yearContents = {
        '1970': [
            "Чёткость - главный принцип: команды понятные,",
            "реакция системы предсказуема.",
            "  ",
            "Появилась обратная связь: сообщения об ошибках",
            "- часть интерфейса.",
            "  ",
            "Эра эффективности: дизайн оценивали по одному",
            "критерию - помогает ли достичь цели?",
        ],
        '1980': [
            "Графические интерфейсы (GUI) заменяют текстовые",
            "заменяют текстовые команды.",
            "  ",
            "Эстетика и функции слились воедино. Интерфейс ",
            "впервые стал средством коммуникации.",
            " ",
            "Цвета и форма начали управлять вниманием.",
            "Например, кнопка 'Закрыть' выделялась красным,",
            "чтобы пользователю было легче её найти.",
        ],
        '1990': [
            "Расцвет скевоморфизма",
            "и реалистичных интерфейсов"
        ],
        '2000': [
            "Доминирование плоского",
            "дизайна и минимализма"
        ],
        '2010': [
            "Современные тенденции:",
            "неоморфизм, стеклоформность"
        ]
    };

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const year = this.getAttribute('data-year');
            const color = yearColors[year];
            const content = yearContents[year];

            windowsSvg.innerHTML = '';

            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const windowGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
                    windowGroup.setAttribute('class', `window window-${year}`);
                    windowGroup.setAttribute('transform', `translate(${10 + i * 20}, ${10 + i * 20})`);

                    const rectHeight = year === '1970' ? 220 : 200;

                    // --- Вся отрисовка внутри одного блока ---
                    if (year === '1980') {
                        // Голубая верхняя панель
                        const titleBar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        titleBar.setAttribute('x', '30');
                        titleBar.setAttribute('y', '30');
                        titleBar.setAttribute('width', '350');
                        titleBar.setAttribute('height', '24');
                        titleBar.setAttribute('fill', 'cyan');
                        titleBar.setAttribute('stroke', 'black');
                        windowGroup.appendChild(titleBar);

                        // Красный квадрат-кнопка под крестик
                        const closeBox = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        closeBox.setAttribute('x', '356');
                        closeBox.setAttribute('y', '30');
                        closeBox.setAttribute('width', '24');
                        closeBox.setAttribute('height', '24');
                        closeBox.setAttribute('fill', 'red');
                        closeBox.setAttribute('stroke', 'black');
                        closeBox.setAttribute('rx', '0');
                        closeBox.setAttribute('ry', '0');
                        windowGroup.appendChild(closeBox);

                        // Кнопка-крестик
                        const closeX = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        closeX.setAttribute('x', '364');
                        closeX.setAttribute('y', '47');
                        closeX.setAttribute('font-size', '12');
                        closeX.setAttribute('fill', 'black');
                        closeX.setAttribute('pointer-events', 'none');
                        closeX.textContent = '✖';
                        windowGroup.appendChild(closeX);
                    }

                    // Белый фон окна (или черный и т.п.)
                    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    rect.setAttribute('x', '30');
                    rect.setAttribute('y', '30');
                    rect.setAttribute('width', '350');
                    rect.setAttribute('height', rectHeight);
                    rect.setAttribute('fill', color);
                    rect.setAttribute('rx', '0');
                    rect.setAttribute('ry', '0');
                    rect.setAttribute('class', 'window-rect');
                    windowGroup.insertBefore(rect, windowGroup.firstChild); // чтобы фон был позади всех

                    // Заголовок
                    const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
                    title.setAttribute('x', '205');
                    title.setAttribute('y', '50');
                    title.setAttribute('class', 'window-title');
                    title.setAttribute('text-anchor', 'middle');
                    title.textContent = year === '1970' ? '*************** 1970 ***************' : year;
                    windowGroup.appendChild(title);

                    // Содержимое
                    const contentText = document.createElementNS("http://www.w3.org/2000/svg", "text");
                    contentText.setAttribute('x', '50');
                    contentText.setAttribute('y', '70');
                    contentText.setAttribute('class', 'window-content');

                    content.forEach((line, index) => {
                        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                        tspan.setAttribute('x', '50');
                        tspan.setAttribute('dy', index === 0 ? '0' : '15');
                        tspan.textContent = line;
                        contentText.appendChild(tspan);
                    });

                    windowGroup.appendChild(contentText);

                    windowsSvg.appendChild(windowGroup);

                    setTimeout(() => {
                        windowGroup.style.opacity = '1';
                    }, 50);
                }, i * 200);
            }

            buttons.forEach(btn => btn.setAttribute('fill', '#007bff'));
            this.setAttribute('fill', color);
        });
    });

    const firstButton = document.querySelector('.timeline-btn[data-year="1970"]');
    if (firstButton) {
        firstButton.click();
    } else {
        console.error('Кнопка 1970 не найдена!');
    }
});
