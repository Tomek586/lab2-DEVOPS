const animatedText = document.getElementById('animatedText');

// Ustawienia powiększenia
let scale = 1;

// Funkcja do zmiany rozmiaru tekstu
function changeSize(event) {
    if (event.detail === 1) {
        // Jedno kliknięcie - powiększ
        scale += 0.2;
    } else if (event.detail === 2) {
        // Dwa kliknięcia - pomniejsz
        scale = Math.max(1, scale - 0.2); // Minimalny rozmiar to 1
    }
    animatedText.style.transform = `scale(${scale})`;
}

// Dodaj nasłuchiwacz zdarzeń
animatedText.addEventListener('click', changeSize);

