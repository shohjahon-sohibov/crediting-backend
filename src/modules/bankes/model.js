const PG = require('../../lib/postgres')

class Bankes extends PG {
    getCalculate(id1, id2) {
        return this.fetchAll(`
        SELECT 
        ((h.house_meter_square * h.house_price_per_meter) / (c.credit_duration * 12)) AS monthly
        FROM
            houses h,
            credits c
        WHERE
            house_id = $1 AND credit_id = $2;
        `, id1, id2)
    }
}

module.exports = new Bankes();