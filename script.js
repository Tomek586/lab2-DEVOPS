const animatedText = document.getElementById('animatedText');
const clickableText = document.getElementById('clickableText');

// Ustawienia powiększenia dla obu napisów
let scaleMainText = 1;
let scaleClickableText = 1;

// Funkcja do zmiany rozmiaru głównego tekstu
function changeMainTextSize(event) {
    if (event.detail === 1) {
        // Jedno kliknięcie - powiększ
        scaleMainText += 0.2;
    } else if (event.detail === 2) {
        // Dwa kliknięcia - pomniejsz
        scaleMainText = Math.max(1, scaleMainText - 0.2); // Minimalny rozmiar to 1
    }
    animatedText.style.transform = `scale(${scaleMainText})`;
}

// Funkcja do zmiany rozmiaru klikalnego tekstu
function changeClickableTextSize(event) {
    scaleClickableText += 0.2; // Powiększ za każdym kliknięciem
    clickableText.style.transform = `scale(${scaleClickableText})`;
}

// Dodaj nasłuchiwacze zdarzeń
animatedText.addEventListener('click', changeMainTextSize);
clickableText.addEventListener('click', changeClickableTextSize);

// Funkcja do pobierania użytkowników (opcjonalna część)
async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:3000/api/users');
        const users = await response.json();
        
        const userList = document.getElementById('user-list');
        userList.innerHTML = '';
        
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// Wywołaj funkcję przy załadowaniu strony
window.onload = fetchUsers;
