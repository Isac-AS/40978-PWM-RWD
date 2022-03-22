var inputs = document.querySelectorAll('input[type=email]');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('blur', function(event) {
        event.target.classList.add('interacted');
    }, false);
}