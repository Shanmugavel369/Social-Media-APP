// import mysql from "mysql2";

// const dbConfig = {
//     host: "localhost",
//     user: "root",
//     password: "1Q2W3E@rr",
//     database: "social"
// };

// let connection;

// function handleDisconnect() {
//     connection = mysql.createConnection(dbConfig);

//     connection.connect((err) => {
//         if (err) {
//             console.error('Error connecting to the database:', err);
//             setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
//         } else {
//             console.log('Connected to the database');
//         }
//     });

//     connection.on('error', (err) => {
//         console.error('Database error:', err);
//         if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR') {
//             handleDisconnect(); // Reconnect on connection lost or fatal error
//         } else {
//             throw err;
//         }
//     });
// }

// handleDisconnect();

// export { connection as db };

import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"1Q2W3E@rr",
  database:"social"
})

