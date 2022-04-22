const model = require('./model')

module.exports = {
    GET_COMPLEXES: async(req, res) => {
        try{
            const { companyID } = req.query
            res.send(await model.getComplexById(companyID))
        }catch(err) {
        res.send({
            message: "server error"
        })
        }

    }
}