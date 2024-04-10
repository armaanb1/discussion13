window.onload = function(){
    var text = document.querySelector('#billing');
    console.log(text.value.trim());
    var checkbox = document.querySelector('input[name="useBilling"]');
    var homeText = document.querySelector('#home');
    checkbox.addEventListener('change', function(){
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                homeText.value = text.value;
                homeText.disabled = true;
            } else {
                homeText.value = '';
                homeText.disabled = false;
            }
        });
    })
}