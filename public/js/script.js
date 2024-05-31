document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = document.getElementById('skills').value;

    
    const formData = {
        username: username,
        password: password,
        gender: gender,
        skills: skills
    };

    
    fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert('An error occurred: ' + data.error);
        } else {
            alert('You\'re logged in successfully');
            console.log('Success:', data);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });

    // Reset form
    document.getElementById('userForm').reset();
});
