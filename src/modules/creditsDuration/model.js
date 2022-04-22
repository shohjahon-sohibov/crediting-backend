const PG = require('../../lib/postgres')

class Credits extends PG {
    getCredits() {
        return this.fetchAll(`
        SELECT 
            *
        FROM
            credits
        `)
    }
}

module.exports = new Credits();