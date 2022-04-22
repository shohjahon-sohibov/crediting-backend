const express = require('express')
const router = express.Router()

const Companies = require('./companies/company')
const Complex =  require('./complex/complex');
const Houses = require('./houses/houses')
const Bankes = require('./bankes/bankes')
const CreditsDuration = require('./creditsDuration/creditsDuration')

router  
    .get('/companies', Companies.GET_COMPANIES)
    .get('/complexes', Complex.GET_COMPLEXES)
    .get('/houses', Houses.GET_HOUSES)
    .get('/bankes', Bankes.GET_BANKES)
    .get('/credits', CreditsDuration.GET_CREDITS)

module.exports = router