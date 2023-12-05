chrome.action.onClicked.addListener(function(tab) {
    // Otwórz nową kartę z qustodio.com
    chrome.tabs.create({ url: "https://www.qustodio.com/en/" }, function(newTab) {
        // Po otwarciu nowej karty, content.js zostanie uruchomiony
    });
});

// Brak dodatkowych działań w background.js, cała logika jest w content.js
