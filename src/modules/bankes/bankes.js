const model = require('./model')

module.exports = {
    GET_BANKES: async(req, res) => {
        const { houseID, creditID } = req.query
        res.json(await model.getCalculate(houseID, creditID))
    }
}