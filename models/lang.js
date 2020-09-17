const { response } = require('express');
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
    static async getAllStatuses() {

    }
    static async updateStatus(rank, language) {
        try {
            const response =  await db.result(`UPDATE languages SET rank = $1 WHERE language = $2`, [rank, language]);
            return response;
        } catch (error) {
            console.error("ERROR:", error);
            return error;
        }
   
   
    }
}

module.exports = LangList;