(function() {
    "use strict";

    let sendMessageButton = document.querySelector('.php-email-form button[type="submit"]');
    sendMessageButton.addEventListener('click', function(event) {
        event.preventDefault();

        let name = document.querySelector('.php-email-form input[name="name"]').value;
        let message = document.querySelector('.php-email-form textarea[name="message"]').value;

        let encodedMessage = encodeURIComponent(`My name is ${name}. ${message}`);
        let whatsappLink = `https://wa.me/254757169030?text=${encodedMessage}`;

        window.open(whatsappLink, '_blank');
    });

})();