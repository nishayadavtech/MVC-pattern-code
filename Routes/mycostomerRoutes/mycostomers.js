
const express = require('express');
const mycustomerRouter = express.Router();
const  {getCustomer, patchCustomer, deleteCustomer, putCustomer, postCustomer} = require('../../Controller/Customer/customerController');

mycustomerRouter.get('/viewitem', getCustomer);
mycustomerRouter.patch('/updateitem/:id', patchCustomer);
mycustomerRouter.delete('/deleteitem/:id', deleteCustomer);
mycustomerRouter.put('/updateitem/:id',putCustomer);
mycustomerRouter.post('/additem', postCustomer);

module.exports = mycustomerRouter;

