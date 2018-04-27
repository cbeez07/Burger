import { createConnection } from "mysql";

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burger_db'
});

connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
    
});

export default connection;