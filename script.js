document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.timeline-btn');
    const windowsSvg = document.getElementById('windows-svg');

    // Цвета для каждого года
    const yearColors = {
        '1970': 'black',
        '1980': '#33FF57',
        '1990': '#3357FF',
        '2000': '#F033FF',
        '2010': '#FF33F0'
    };

    // Тексты для каждого года (для 1970 года разбит на более короткие строки)
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
        '1980': 'Появление графических интерфейсов (GUI)',
        '1990': 'Расцвет скевоморфизма и реалистичных интерфейсов',
        '2000': 'Доминирование плоского дизайна и минимализма',
        '2010': 'Современные тенденции: неоморфизм, стеклоформность'
    };

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const year = this.getAttribute('data-year');
            const color = yearColors[year];
            const content = yearContents[year];

            // Очищаем предыдущие окна
            windowsSvg.innerHTML = '';

            // Создаем 3 каскадных SVG-окна
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const windowGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
                    windowGroup.setAttribute('class', `window window-${year}`);
                    windowGroup.setAttribute('transform', `translate(${10 + i * 20}, ${10 + i * 20})`);

                    // Прямоугольник окна (увеличиваем высоту для 1970 года)
                    const rectHeight = year === '1970' ? 220 : 200;
                    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    rect.setAttribute('x', '30');
                    rect.setAttribute('y', '30');
                    rect.setAttribute('width', '350');
                    rect.setAttribute('height', rectHeight);
                    rect.setAttribute('class', 'window-rect');
                    rect.setAttribute('fill', color);
                    rect.setAttribute('rx', '0');
                    rect.setAttribute('ry', '0');

                    // Заголовок окна с звездочками
                    const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
                    title.setAttribute('x', '205');
                    title.setAttribute('y', '50');
                    title.setAttribute('class', 'window-title');
                    title.setAttribute('text-anchor', 'middle');

                    if (year === '1970') {
                        title.textContent = '*************** 1970 ***************';
                    } else {
                        title.textContent = year;
                    }

                    // Содержимое окна
                    const contentText = document.createElementNS("http://www.w3.org/2000/svg", "text");
                    contentText.setAttribute('x', year === '1970' ? '50' : '205');
                    contentText.setAttribute('y', year === '1970' ? '70' : '90');
                    contentText.setAttribute('class', 'window-content');
                    contentText.setAttribute('text-anchor', year === '1970' ? 'start' : 'middle');

                    if (year === '1970') {
                        // Для 1970 года добавляем многострочный текст с меньшим межстрочным интервалом
                        content.forEach((line, index) => {
                            const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                            tspan.setAttribute('x', '50');
                            tspan.setAttribute('dy', index === 0 ? '0' : '15'); // Уменьшаем межстрочный интервал
                            tspan.textContent = line;
                            contentText.appendChild(tspan);
                        });
                    } else {
                        // Для других годов обычный текст
                        const words = content.split(' ');
                        const middle = Math.floor(words.length / 2);
                        const line1 = words.slice(0, middle).join(' ');
                        const line2 = words.slice(middle).join(' ');

                        const tspan1 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                        tspan1.setAttribute('x', '205');
                        tspan1.setAttribute('dy', '0');
                        tspan1.textContent = line1;

                        const tspan2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                        tspan2.setAttribute('x', '205');
                        tspan2.setAttribute('dy', '20');
                        tspan2.textContent = line2;

                        contentText.appendChild(tspan1);
                        contentText.appendChild(tspan2);
                    }

                    windowGroup.appendChild(rect);
                    windowGroup.appendChild(title);
                    windowGroup.appendChild(contentText);
                    windowsSvg.appendChild(windowGroup);

                    // Анимация появления
                    setTimeout(() => {
                        windowGroup.style.opacity = '1';
                    }, 50);
                }, i * 200);
            }

            // Подсвечиваем активную кнопку
            buttons.forEach(btn => btn.setAttribute('fill', '#007bff'));
            this.setAttribute('fill', color);
        });
    });

    // Инициализация - показываем первое окно при загрузке
    document.querySelector('.timeline-btn[data-year="1970"]').click();
});