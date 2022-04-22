const model = require('./model')

module.exports = {
    GET_HOUSES: async(req, res) => {
        const { complexID } = req.query
        res.json(await model.getHouses(complexID))
    }
}