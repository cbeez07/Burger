const orm = require("../config/orm");

let burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },
    insertOne: (vals, cb) => {
        orm.insertOne(vals, (res) => {
            cb(res);
        });
    },
    updateOne: (devourID, cb) => {
        orm.updateOne(devourID, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;