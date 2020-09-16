const host = "lallah.db.elephantsql.com";
const database = "ijogfcrz";
const user = "ijogfcrz";
const password = "HDWhm784uJ1e_KuSOUo4ytLZnBpNMoup";

const pgp = require('pg-promise')( {
    query: function (event)  {
        console.log("QUERY:", event.query)
        
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,

}

const db = pgp(options);

module.exports = db;