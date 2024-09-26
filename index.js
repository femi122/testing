const mysql = require('mysql2');

// Create a connection to the remote database
const connection = mysql.createConnection({
    host: 'Baridoosam-joelintschool.com.ng', // Replace with your remote server's IP address or hostname
    user: 'qjinnawk_user', // Your database username
    password: 'TW*p@xSgGOh8', // Your database password
    database: 'qjinnawk_barido', // Your database name
    port: 3306 // Optional: specify the port if it's different from the default
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

// Define the data to insert
const data = {
    id: 9,
    name: 'John Doe',
    email: 'john.doe@example.com',
    created_at: new Date('2024-07-08 03:00:10') // Use a JavaScript Date object for timestamp
};

// Insert the data into the tester table
const query = 'INSERT INTO tester (id, name, email, created_at) VALUES (?, ?, ?, ?)';
const values = [data.id, data.name, data.email, data.created_at];

connection.execute(query, values, (err, results) => {
    if (err) {
        console.error('Error inserting data:', err);
    } else {
        console.log('Data inserted successfully:', results);
    }

    // Close the database connection
    connection.end();
});
