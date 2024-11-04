document.getElementById('compareButton').addEventListener('click', function() {
    const array1 = document.getElementById('array1').value.split(',').map(item => item.trim());
    const array2 = document.getElementById('array2').value.split(',').map(item => item.trim());

    const commonCountries = array1.filter(country => !array2.includes(country));

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    commonCountries.forEach(country => {
        const li = document.createElement('li');
        li.textContent = country;
        resultElement.appendChild(li);
    });
});
