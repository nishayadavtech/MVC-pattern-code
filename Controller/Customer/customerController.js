const connection = require('../../Model/dbConnect');

const getCustomer = (req, res) => {
    console.log("gvjgdgj",res)
    let query = 'SELECT * FROM item';
    connection.query(query, function(error, result){
        if(error){
            console.log("Error", error.sqlMessage);
            res.status(500).send("Database error");
        }
        else{
            res.send(result);
        }
    })
}

const postCustomer = (req, res) => {
    let data = req.body;
    let query = "INSERT INTO item SET ?";

    connection.query(query,data, function(error, result){
        if (error){
            console.log("Error...", error.sqlMessage);
        }
        else{
            res.send(result);
        }
    })
}


const deleteCustomer =(req,res)=>{
    const data = req.params.id
    const query = 'DELETE FROM item WHERE id = ?'
    connection.query(query, data, function(error, result){
        if (error){
            console.log("Error...", error.sqlMessage);
        }
        else{
            res.send(result);
        }
    })
}

const patchCustomer =(req, res) => {
    const data = [req.body.Phoneno,req.params.id];
    console.log(data)

    const query = "UPDATE item SET  price = ? WHERE id = ?";
    connection.query(query,data,function (error, result) {
        if (error) {
            console.log("Error...", error.sqlMessage);
            res.status(500).send("Database error");
        } else {
            res.send( result );
        }
    });

};


const putCustomer= (req, res) => {
    const data = [
       req.body.id, req.body.itemname,req.body.price,req.body.qty,req.params.id];

    const query = "UPDATE item SET itemname = ?, price, qty = ?, WHERE id = ?";
    
    connection.query(query, data, function (error, result) {
        if (error) {
            console.log("Error...", error.sqlMessage);
        } else {
            res.send(result);
        }
    });
};


module.exports = {getCustomer, patchCustomer, deleteCustomer, putCustomer, postCustomer}



