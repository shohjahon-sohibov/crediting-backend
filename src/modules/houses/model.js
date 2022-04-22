const PG = require('../../lib/postgres')

class Houses extends PG {
    getHouses(id) {
        return this.fetchAll(`
        SELECT 
            *
        FROM
            houses
        WHERE
            complex = $1
        `, id)
    }
}

module.exports = new Houses();