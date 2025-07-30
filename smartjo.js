document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('orderForm');
    const requiredFields = ['fullName', 'email', 'phone', 'address'];

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        requiredFields.forEach((fieldId) => {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            } else {
                field.classList.remove('error');
            }
        });

        if (!isValid) {
            alert('Please fill in all required fields.');
            return;
        }

        const name = document.getElementById('fullName').value.trim();

        // Create and display success message
        const successMessage = document.createElement('div');
        successMessage.textContent = `Thank you for your order, ${name}! We'll be in touch shortly.`;
        successMessage.style.background = '#d4edda';
        successMessage.style.color = '#155724';
        successMessage.style.padding = '1em';
        successMessage.style.borderRadius = '8px';
        successMessage.style.marginTop = '1em';
        successMessage.style.textAlign = 'center';
        form.parentElement.appendChild(successMessage);

        form.reset();
        form.querySelector('button[type="submit"]').disabled = true;

        setTimeout(() => {
            successMessage.remove();
            form.querySelector('button[type="submit"]').disabled = false;
        }, 5000);
    });
});
