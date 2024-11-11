// Show Admin Login Modal
function showAdminLogin() {
    document.getElementById('admin-login').classList.remove('hidden');
}

// Verify Admin Password
function verifyPassword() {
    const password = document.getElementById('admin-password').value;
    if (password === 'vsk') {
        document.getElementById('admin-login').classList.add('hidden');
        document.getElementById('admin-panel').classList.remove('hidden');
    } else {
        alert('Incorrect Password!');
    }
}

// Add Content Function
function addContent() {
    const content = document.getElementById('admin-text').value;
    if (content.trim() !== '') {
        const newElement = document.createElement('p');
        newElement.textContent = content;
        document.getElementById('dynamic-content').appendChild(newElement);
        document.getElementById('admin-text').value = '';
    }
}
