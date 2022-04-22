const PG = require('../../lib/postgres');

class Companies extends PG {
    getCompanies() {
        return this.fetchAll(
            `SELECT 
                * 
            FROM
                companies`
        )
    }
}

module.exports = new Companies();