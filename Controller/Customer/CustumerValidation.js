const joi = require ("joi");

const CustomerSchema = joi.object({
    id: joi.number().required(),
    itemname: joi.string().required(),
    price: joi.number().required(),
    qty: joi.number().required(),

})

const validateSchema = (req,res,next) => {
    const {error} = CustomerSchema.validate(req.body);
    if(error){
        return res.send('Invalid req');

    }
    // return res.send("Added Successfully....");
    next()
}

module.exports = validateSchema;
