document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.classList.add('focus');
        });
        input.addEventListener('blur', () => {
            if (input.value != "") input.classList.add('has-value');
            else input.classList.remove('has-value');
        });
    });
});
