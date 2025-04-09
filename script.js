document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.timeline-btn');
    const windowsSvg = document.getElementById('windows-svg');

    const yearColors = {
        '1970': 'black',
        '1980': 'white',
        '1990': '#BDBDBD',
        '2000': '#5a9bd5',
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
            "Юзабилити вышло на первый план. Важен был не только",
            "внешний вид, но и то, насколько быстро пользователь",
            "может найти нужную информацию.",
            "  ",
            "Появление первых принципов адаптивности.Ведь сайты ",
            "открывались на самых разных устройствах, от массивных",
            "ЭВМ до первых персональных компьютеров.",
        ],
        '2000': [
            "Эпоха Windows XP и Vista:",
            "  ",
            "Появился фирменный стиль Aero -",
            "полупрозрачные элементы и градиенты",
            "  ",
            "Акцент на удобство и эстетику",
            "  ",
            "Закруглённые углы и мягкие тени"
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

                    if (year === '1980') {
                        const titleBar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        titleBar.setAttribute('x', '30');
                        titleBar.setAttribute('y', '30');
                        titleBar.setAttribute('width', '350');
                        titleBar.setAttribute('height', '24');
                        titleBar.setAttribute('fill', 'cyan');
                        titleBar.setAttribute('stroke', 'black');
                        windowGroup.appendChild(titleBar);

                        const closeBox = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        closeBox.setAttribute('x', '356');
                        closeBox.setAttribute('y', '30');
                        closeBox.setAttribute('width', '24');
                        closeBox.setAttribute('height', '24');
                        closeBox.setAttribute('fill', 'red');
                        closeBox.setAttribute('stroke', 'black');
                        windowGroup.appendChild(closeBox);

                        const closeX = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        closeX.setAttribute('x', '364');
                        closeX.setAttribute('y', '47');
                        closeX.setAttribute('font-size', '12');
                        closeX.setAttribute('fill', 'black');
                        closeX.setAttribute('pointer-events', 'none');
                        closeX.textContent = '✖';
                        windowGroup.appendChild(closeX);
                    }

                    if (year === '1990') {
                        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
                        const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
                        gradient.setAttribute('id', 'titleGradient');
                        gradient.setAttribute('x1', '0%');
                        gradient.setAttribute('x2', '100%');
                        gradient.setAttribute('y1', '0%');
                        gradient.setAttribute('y2', '0%');

                        const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                        stop1.setAttribute('offset', '0%');
                        stop1.setAttribute('stop-color', '#000084');

                        const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                        stop2.setAttribute('offset', '100%');
                        stop2.setAttribute('stop-color', '#0A0EC5');

                        gradient.appendChild(stop1);
                        gradient.appendChild(stop2);
                        defs.appendChild(gradient);
                        windowGroup.appendChild(defs);

                        const titleBar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        titleBar.setAttribute('x', '32');
                        titleBar.setAttribute('y', '32');
                        titleBar.setAttribute('width', '347');
                        titleBar.setAttribute('height', '24');
                        titleBar.setAttribute('fill', 'url(#titleGradient)');
                        windowGroup.appendChild(titleBar);

                        const closeBox = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        closeBox.setAttribute('x', '357');
                        closeBox.setAttribute('y', '34');
                        closeBox.setAttribute('width', '20');
                        closeBox.setAttribute('height', '20');
                        closeBox.setAttribute('fill', '#BDBDBD');
                        closeBox.setAttribute('stroke', 'black');
                        closeBox.setAttribute('rx', '1');
                        closeBox.setAttribute('ry', '1');
                        windowGroup.appendChild(closeBox);

                        const closeX = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        closeX.setAttribute('x', '362');
                        closeX.setAttribute('y', '48');
                        closeX.setAttribute('font-size', '12');
                        closeX.setAttribute('fill', 'black');
                        closeX.setAttribute('font-family', 'Arial');
                        closeX.textContent = '✖';
                        windowGroup.appendChild(closeX);
                    }

                    if (year === '2000') {
                        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
                        const aeroGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
                        aeroGradient.setAttribute('id', 'aeroGradient');

                        const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                        stop1.setAttribute('offset', '0%');
                        stop1.setAttribute('stop-color', '#d2e8ff');

                        const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                        stop2.setAttribute('offset', '50%');
                        stop2.setAttribute('stop-color', '#a0c8ff');

                        const stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                        stop3.setAttribute('offset', '100%');
                        stop3.setAttribute('stop-color', '#5a9bd5');

                        aeroGradient.appendChild(stop1);
                        aeroGradient.appendChild(stop2);
                        aeroGradient.appendChild(stop3);
                        defs.appendChild(aeroGradient);

                        // Добавляем фильтр для свечения текста
                        const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
                        filter.setAttribute('id', 'glow');
                        const feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
                        feGaussianBlur.setAttribute('stdDeviation', '2');
                        feGaussianBlur.setAttribute('result', 'coloredBlur');
                        filter.appendChild(feGaussianBlur);

                        const feMerge = document.createElementNS("http://www.w3.org/2000/svg", "feMerge");
                        const feMergeNode1 = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
                        feMergeNode1.setAttribute('in', 'coloredBlur');
                        const feMergeNode2 = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
                        feMergeNode2.setAttribute('in', 'SourceGraphic');
                        feMerge.appendChild(feMergeNode1);
                        feMerge.appendChild(feMergeNode2);
                        filter.appendChild(feMerge);

                        defs.appendChild(filter);
                        windowGroup.appendChild(defs);

                        // Основное окно (белая часть) с закругленными нижними углами
                        const mainWindow = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        mainWindow.setAttribute('d', 'M32,56 L32,236 C32,236 32,242 38,242 L382,242 C388,242 388,236 388,236 L388,56');
                        mainWindow.setAttribute('fill', 'white');
                        mainWindow.setAttribute('stroke', 'grey');
                        mainWindow.setAttribute('stroke-width', '1');
                        windowGroup.appendChild(mainWindow);

                        // Верхняя панель (синяя часть) с скруглением только сверху
                        const titleBar = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        titleBar.setAttribute('d', 'M32,56 L32,32 C32,32 32,26 38,26 L382,26 C388,26 388,32 388,32 L388,56');
                        titleBar.setAttribute('fill', 'url(#aeroGradient)');
                        titleBar.setAttribute('stroke', 'grey');
                        mainWindow.setAttribute('stroke-width', '1');

                        // Внутренняя белая обводка
                        const innerStroke = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        innerStroke.setAttribute('d', 'M34,54 L34,34 C34,34 34,28 38,28 L382,28 C386,28 386,34 386,34 L386,54');
                        innerStroke.setAttribute('fill', 'none');
                        innerStroke.setAttribute('stroke', 'white');
                        innerStroke.setAttribute('stroke-width', '1');

                        windowGroup.appendChild(titleBar);
                        windowGroup.appendChild(innerStroke);

                        const redGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
                        redGradient.setAttribute('id', 'redGradient');
                        redGradient.setAttribute('x1', '0%');
                        redGradient.setAttribute('y1', '100%');
                        redGradient.setAttribute('x2', '0%');
                        redGradient.setAttribute('y2', '0%');

                        const redStop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                        redStop1.setAttribute('offset', '0%');
                        redStop1.setAttribute('stop-color', '#8B0000'); // тёмно-красный

                        const redStop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                        redStop2.setAttribute('offset', '100%');
                        redStop2.setAttribute('stop-color', '#FF7F7F'); // бледно-красный

                        redGradient.appendChild(redStop1);
                        redGradient.appendChild(redStop2);
                        defs.appendChild(redGradient); // не забудь, уже добавлен в windowGroup выше

                        const closeBtn = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        closeBtn.setAttribute('x', '356');
                        closeBtn.setAttribute('y', '37');
                        closeBtn.setAttribute('width', '25');
                        closeBtn.setAttribute('height', '16');
                        closeBtn.setAttribute('rx', '4');
                        closeBtn.setAttribute('ry', '4');
                        closeBtn.setAttribute('fill', 'url(#redGradient)');
                        closeBtn.setAttribute('stroke', 'white');
                        closeBtn.setAttribute('stroke-width', '1');
                        windowGroup.appendChild(closeBtn);

                        const closeX = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        closeX.setAttribute('x', '366');
                        closeX.setAttribute('y', '49');
                        closeX.setAttribute('fill', 'white');
                        closeX.setAttribute('font-size', '10');
                        closeX.textContent = 'x';
                        windowGroup.appendChild(closeX);

                        // Заголовок
                        const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        title.setAttribute('x', '42');
                        title.setAttribute('y', '50');
                        title.setAttribute('class', 'window-title');
                        title.setAttribute('text-anchor', 'start');
                        title.setAttribute('filter', 'url(#glow)');
                        title.textContent = '2000';
                        windowGroup.appendChild(title);
                    }

                    if (year === '2010') {
                        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
                        windowGroup.appendChild(defs);

                        // Основное окно (белая часть) с закругленными нижними углами
                        const mainWindow = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        mainWindow.setAttribute('d', 'M32,56 L32,236 C32,236 32,242 38,242 L382,242 C388,242 388,236 388,236 L388,56');
                        mainWindow.setAttribute('fill', 'white');
                        mainWindow.setAttribute('stroke', 'grey');
                        mainWindow.setAttribute('stroke-width', '1');
                        windowGroup.appendChild(mainWindow);

                        // Верхняя панель (простая синяя заливка без градиента)
                        const titleBar = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        titleBar.setAttribute('d', 'M32,56 L32,32 C32,32 32,26 38,26 L382,26 C388,26 388,32 388,32 L388,56');
                        titleBar.setAttribute('fill', '#5a9bd5'); // Сплошной цвет вместо градиента
                        titleBar.setAttribute('stroke', 'grey');
                        titleBar.setAttribute('stroke-width', '1');
                        windowGroup.appendChild(titleBar);

                        // Внутренняя белая обводка
                        const innerStroke = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        innerStroke.setAttribute('d', 'M34,54 L34,34 C34,34 34,28 38,28 L382,28 C386,28 386,34 386,34 L386,54');
                        innerStroke.setAttribute('fill', 'none');
                        innerStroke.setAttribute('stroke', 'white');
                        innerStroke.setAttribute('stroke-width', '1');
                        windowGroup.appendChild(innerStroke);

                        // Кнопка закрытия (упрощенная версия)
                        const closeBtn = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        closeBtn.setAttribute('x', '356');
                        closeBtn.setAttribute('y', '37');
                        closeBtn.setAttribute('width', '25');
                        closeBtn.setAttribute('height', '16');
                        closeBtn.setAttribute('rx', '4');
                        closeBtn.setAttribute('ry', '4');
                        closeBtn.setAttribute('fill', '#FF33F0'); // Фиолетовый цвет вместо градиента
                        closeBtn.setAttribute('stroke', 'white');
                        closeBtn.setAttribute('stroke-width', '1');
                        windowGroup.appendChild(closeBtn);

                        const closeX = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        closeX.setAttribute('x', '366');
                        closeX.setAttribute('y', '49');
                        closeX.setAttribute('fill', 'white');
                        closeX.setAttribute('font-size', '10');
                        closeX.textContent = 'x';
                        windowGroup.appendChild(closeX);

                        // Заголовок без свечения
                        const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        title.setAttribute('x', '42');
                        title.setAttribute('y', '50');
                        title.setAttribute('class', 'window-title');
                        title.setAttribute('text-anchor', 'start');
                        title.textContent = '2010';
                        windowGroup.appendChild(title);
                    }

                    // === ВСТАВКА: убираем универсальный прямоугольник для 2000 ===
                    if (year !== '2000' && year !== '2010') {
                        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        rect.setAttribute('x', '30');
                        rect.setAttribute('y', '30');
                        rect.setAttribute('width', '350');
                        rect.setAttribute('height', year === '1970' ? 220 : 200);
                        rect.setAttribute('fill', color);
                        rect.setAttribute('rx', year === '2000' ? '10' : '0');
                        rect.setAttribute('ry', year === '2000' ? '10' : '0');
                        rect.setAttribute('class', 'window-rect');
                        windowGroup.insertBefore(rect, windowGroup.firstChild);

                        const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        title.setAttribute('x', '205');
                        title.setAttribute('y', '50');
                        title.setAttribute('class', 'window-title');
                        title.setAttribute('text-anchor', 'middle');
                        title.textContent = year === '1970' ? '*************** 1970 ***************' : year;
                        windowGroup.appendChild(title);
                    }

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
