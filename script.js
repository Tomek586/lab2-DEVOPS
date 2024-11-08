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


