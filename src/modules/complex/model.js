const PG = require('../../lib/postgres')

class Complexes extends PG {
    getComplexById(id) {
        return this.fetchAll(`
            SELECT
                *
            FROM
                complexes
            WHERE
                company = $1
        `, id)
    }
}

module.exports = new Complexes()