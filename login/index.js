document.getElementById('loginForm').addEventListener
('submit', function (event) 
 {
    event.preventDefault(); // Prevent the form from submitting

    // Fetch the values from the input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Add your authentication logic here (not implemented in this example)
    // For a real application, you would typically send the data to a server
    // for validation and further processing.
    // This example only shows how to fetch the input values.

    console.log('Email:', email);
    console.log('Password:', password);
 }
);
