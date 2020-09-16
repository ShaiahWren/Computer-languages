const db = require('./conn.js');

class LangList {
    constructor (language, status_title) {
        this.language = language;
        this.status_title = status_title;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT language, status_title FROM languages INNER JOIN ranking ON languages.rank = ranking.id;`);
            return response;
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = LangList;