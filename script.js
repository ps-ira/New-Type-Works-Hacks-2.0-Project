function validateForm(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const num = document.getElementById('num').value;
    const studentId = document.getElementById('si').value;
    const hobbies = document.getElementById('hb').value;
    const msgbox = document.getElementById('message');

    let message = '';

    if (name === '') {
        message += 'Please enter your name.<br>';
        msgbox.style.color = 'red';
    }
    if (age === '') {
        message += 'Age is required.<br>';
        msgbox.style.color = 'red';
    } else if (age < 5 || age > 18) {
        message += 'Age must be between 5 and 18.<br>';
        msgbox.style.color = 'red';
    }

    if (num === '') {
        message += 'Phone number is required.<br>';
        msgbox.style.color = 'red';
    } else if (num.toString().length < 11) {
        message += 'Phone number must be at least 11 digits.<br>';
        msgbox.style.color = 'red';
    }

    if (studentId === '') {
        message += 'Student ID is required.<br>';
        msgbox.style.color = 'red';
    }

    if (hobbies === '') {
        message += 'Hobbies are required.<br>';
        msgbox.style.color = 'red';
    }

    if (message) {
        msgbox.innerHTML = message;
        return false;
    }

    msgbox.innerHTML = "Form submitted successfully!";
    msgbox.style.color = 'green';
    return true;
}
