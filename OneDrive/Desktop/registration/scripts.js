// public/scripts.js
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Create an object to store form data
    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value,
        fullName: document.getElementById('fullName').value,
        dateOfBirth: document.getElementById('dateOfBirth').value,
        phoneNumber: document.getElementById('phoneNumber').value,
    };

    // Log the form data to verify it's correct
    console.log('Form Data:', formData);

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            document.getElementById('message').innerText = data.message;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('message').innerText = 'Error registering user.';
        });
});
// public/scripts.js
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Create an object to store form data
    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value,
        fullName: document.getElementById('fullName').value,
        dateOfBirth: document.getElementById('dateOfBirth').value,
        phoneNumber: document.getElementById('phoneNumber').value,
    };

    // Log the form data to verify it's correct
    console.log('Form Data:', formData);

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            document.getElementById('message').innerText = data.message;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('message').innerText = 'Error registering user.';
        });
});
