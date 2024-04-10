window.onload = function() {
    var h1 = document.querySelector('h1');
    h1.style.textAlign = 'center';
    h1.style.color = 'purple';

    window.addEventListener('dblclick', function() {
        var currentTime = new Date();
        alert(currentTime);
    });
    var checkbox = document.querySelector('#toggle');
    var emailBox = document.querySelector('#emailBox');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            emailBox.classList.remove('hidden');
        } else {
            emailBox.classList.add('hidden');
        }
    });
}