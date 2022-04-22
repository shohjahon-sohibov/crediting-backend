const model = require('./model')

module.exports = {
    GET_CREDITS: async(_, res) => {
        res.json(await model.getCredits())
    }
}