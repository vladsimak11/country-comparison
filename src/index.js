document.getElementById('compareButton').addEventListener('click', function() {
    const array1 = document.getElementById('array1').value.split(',').map(item => item.trim());
    const array2 = document.getElementById('array2').value.split(',').map(item => item.trim());

    // Знаходимо елементи, яких немає в другому масиві
    const missingInArray2 = array1.filter(country => !array2.includes(country));
    // Знаходимо елементи, яких немає в першому масиві
    const missingInArray1 = array2.filter(country => !array1.includes(country));

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    // Додаємо результати для елементів, які відсутні в array2
    if (missingInArray2.length > 0) {
        const title1 = document.createElement('h3');
        title1.textContent = 'Відсутні в другому масиві:';
        resultElement.appendChild(title1);

        missingInArray2.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country;
            resultElement.appendChild(li);
        });
    }

    // Додаємо результати для елементів, які відсутні в array1
    if (missingInArray1.length > 0) {
        const title2 = document.createElement('h3');
        title2.textContent = 'Відсутні в першому масиві:';
        resultElement.appendChild(title2);

        missingInArray1.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country;
            resultElement.appendChild(li);
        });
    }

    // Якщо всі елементи співпадають
    if (missingInArray2.length === 0 && missingInArray1.length === 0) {
        resultElement.innerHTML = '<p>Усі елементи співпадають в обох масивах.</p>';
    }
});
