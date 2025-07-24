const joi = require ("joi");

const mybankSchema = joi.object({
    id: joi.string().required(),
    bankname: joi.string().required(),
    accountno: joi.number().required(),
    phoneno: joi.number().required(),

})

const validateSchema = (req,res,next) => {
    const {error} = mybankSchema.validate(req.body);
    if(error){
        return res.send('Invalid req');

    }
    // return res.send("Added Successfully....");
    next()
}

module.exports = validateSchema;
