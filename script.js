document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.timeline-btn');
    const contentContainer = document.getElementById('content-container');

    // Цвета для каждого года
    const yearColors = {
        '1970': '#FF5733',
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

            // Очищаем предыдущий контент
            contentContainer.innerHTML = '';

            // Создаем новый SVG элемент
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '200');
            svg.setAttribute('viewBox', '0 0 500 200');

            // Создаем прямоугольник с цветом года
            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute('x', '50');
            rect.setAttribute('y', '20');
            rect.setAttribute('width', '400');
            rect.setAttribute('height', '160');
            rect.setAttribute('rx', '10');
            rect.setAttribute('fill', yearColors[year]);

            // Добавляем текст
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute('x', '250');
            text.setAttribute('y', '100');
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('fill', '#fff');
            text.setAttribute('font-size', '16');
            text.setAttribute('font-family', 'Arial');
            text.textContent = yearContents[year];

            // Добавляем год в заголовок
            const yearText = document.createElementNS("http://www.w3.org/2000/svg", "text");
            yearText.setAttribute('x', '250');
            yearText.setAttribute('y', '60');
            yearText.setAttribute('text-anchor', 'middle');
            yearText.setAttribute('fill', '#fff');
            yearText.setAttribute('font-size', '24');
            yearText.setAttribute('font-weight', 'bold');
            yearText.textContent = year;

            // Собираем SVG
            svg.appendChild(rect);
            svg.appendChild(text);
            svg.appendChild(yearText);

            // Добавляем в контейнер
            contentContainer.appendChild(svg);

            // Подсвечиваем активную кнопку
            buttons.forEach(btn => btn.setAttribute('fill', '#007bff'));
            this.setAttribute('fill', yearColors[year]);
        });
    });
});