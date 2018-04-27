import "./config/connection";

// selectAll()
// insertOne()
// updateOne()
const orm = {
    selectAll: (tableInput, cb) => {
        let queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // INSERT INTO burgers (burger_name, devoured) VALUES ('cheeseburger', true);

    insertOne: (vals, cb) => {
        let queryString = 'INSERT INTO burgers (burger_name) VALUES (?);';
        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }, 
    // UPDATE burgers SET devoured=true WHERE id=1;
    updateOne: (devourID, cb) => {
        let queryString = 'UPDATE burgers SET devoured=false WHERE id=?';
        connection.query(queryString, devourID, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

export default orm;