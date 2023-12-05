// Ten skrypt będzie uruchamiany na każdej stronie, która pasuje do określonych wzorców w manifest.json
function clickLoginButton() {
    if (window.location.href.includes("www.qustodio.com")) {
        const loginButton = document.querySelector('a[data-tracking-id="header-login-link"]');
        if (loginButton) {
            loginButton.click();
        } else {
            console.log("Nie znaleziono przycisku logowania na stronie głównej.");
        }
    }
}

function checkAndFillLoginForm() {
    if (window.location.href.includes("auth.qustodio.com")) {
        const emailField = document.querySelector('.form-email');
        const passwordField = document.querySelector('.form-password');
        const loginButton = document.querySelector('.js-form-button');

        if (emailField && passwordField && loginButton) {
            emailField.value = 'pomocnekontko@gmail.com'; // Zaktualizuj dane logowania
            passwordField.value = 'Nastale123!'; // Zaktualizuj hasło
            loginButton.click();
        } else {
            setTimeout(checkAndFillLoginForm, 1000); // Sprawdź ponownie po 1 sekundzie
        }
    }
}

clickLoginButton();
checkAndFillLoginForm();
