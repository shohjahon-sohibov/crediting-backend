const model = require('./model')

module.exports = {
    GET_COMPANIES: async(_, res) => {
        try {
        res.json(await model.getCompanies())
        } catch(err) {
            console.log(err);
        }
    }
}