const express = require('express')
const router = express.Router()

const Companies = require('./companies/company')
const Complex =  require('./complex/complex');
const Houses = require('./houses/houses')
const Bankes = require('./bankes/bankes')
const CreditsDuration = require('./creditsDuration/creditsDuration')

router  
    .get('/companies', cors(), Companies.GET_COMPANIES)
    .get('/complexes', cors(), Complex.GET_COMPLEXES)
    .get('/houses', cors(), Houses.GET_HOUSES)
    .get('/bankes', cors(), Bankes.GET_BANKES)
    .get('/credits', cors(), CreditsDuration.GET_CREDITS)

module.exports = router