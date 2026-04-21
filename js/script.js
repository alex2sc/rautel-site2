function mobileMenu() {
    var x = document.getElementsByTagName("navbar") [0];
    if (x.className === "") {
        x.className += "mobile";
    } else {
        x.className = "";
    }
}

function toggleDark() {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('dark-toggle');
    if (document.body.classList.contains('dark')) {
        btn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        btn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Aplică tema salvată la încărcarea paginii
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('dark-toggle').textContent = '☀️';
    }
});
