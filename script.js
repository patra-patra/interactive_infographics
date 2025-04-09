document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.timeline-btn');
    const contentContainer = document.getElementById('content-container');

    // Цвета для каждого года
    const yearColors = {
        '1970': 'black',
        '1980': '#33FF57',
        '1990': '#3357FF',
        '2000': '#F033FF',
        '2010': '#FF33F0'
    };

    // Тексты для каждого года
    const yearContents = {
        '1970': 'Эпоха текстовых интерфейсов и командной строки',
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

            // Очищаем предыдущий контент
            contentContainer.innerHTML = '';

            // Создаем 3 каскадных окна
            for (let i = 0; i < 3; i++) {
                const windowElement = document.createElement('div');
                windowElement.className = 'window';
                windowElement.style.backgroundColor = color;
                windowElement.style.left = (50 + i * 20) + 'px';
                windowElement.style.top = (20 + i * 20) + 'px';
                windowElement.style.zIndex = i;

                // Добавляем заголовок окна
                const title = document.createElement('div');
                title.className = 'window-title';
                title.textContent = year;

                // Добавляем содержимое окна
                const windowContent = document.createElement('div');
                windowContent.className = 'window-content';
                windowContent.textContent = content;

                windowElement.appendChild(title);
                windowElement.appendChild(windowContent);
                contentContainer.appendChild(windowElement);

                // Анимация появления с задержкой
                setTimeout(() => {
                    windowElement.style.opacity = '1';
                    windowElement.style.transform = `translate(${i * 10}px, ${i * 10}px)`;
                }, i * 100);
            }

            // Подсвечиваем активную кнопку
            buttons.forEach(btn => btn.setAttribute('fill', '#007bff'));
            this.setAttribute('fill', color);
        });
    });
});