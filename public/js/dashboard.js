document.addEventListener('DOMContentLoaded', () => {
    validateSession();
    // Additional initialization logic
});

function validateSession() {
    fetch('/check-session', { credentials: 'include' })
        .then(response => {
            if (!response.ok) {
                window.location.href = '/login.html';
            } else {
                // Load user-specific data
                loadUserData();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            window.location.href = '/login.html';
        });
}

function loadUserData() {
    // Fetch and display user-specific data like username, financial status, etc.
}

document.getElementById('logout-button').addEventListener('click', () => {
    fetch('/logout', {
        method: 'POST',
        credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/login.html';
        }
    })
    .catch(error => console.error('Logout Error:', error));
});
