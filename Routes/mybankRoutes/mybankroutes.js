const express = require('express');
const BankRouter = express.Router();
const  {getBank, patchBank, deleteBank, putBank, postBank} = require('../../Controller/Bank/mybankController');
BankRouter.get('/viewitem', getBank);
BankRouter.patch('/updateitem/:id', patchBank);
BankRouter.delete('/deleteitem/:id', deleteBank);
BankRouter.put('/updateitem/:id',putBank);
BankRouter.post('/additem', postBank);

module.exports = BankRouter;


