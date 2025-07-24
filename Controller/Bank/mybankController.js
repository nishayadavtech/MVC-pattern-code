const connection = require('../../Model/dbConnect');

const getBank = (req, res) => {
 let query = 'SELECT * FROM bank';
    connection.query(query, function(error, result){
        if(error){
            console.log("Error", error.sqlMessage);
            
        }
        else{
            res.send(result);
        }
    })
}

const postBank = (req, res) => {
    let data = req.body;
    let query = "INSERT INTO bank SET ?";

    connection.query(query,data, function(error, result){
        if (error){
            console.log("Error...", error.sqlMessage);
        }
        else{
            res.send(result);
        }
    })
}


const deleteBank =(req,res)=>{
    const data = req.params.id
    const query = 'DELETE FROM bank WHERE id = ?'
    connection.query(query, data, function(error, result){
        if (error){
            console.log("Error...", error.sqlMessage);
        }
        else{
            res.send(result);
        }
    })
}

const patchBank =(req, res) => {
    const data = [req.body.Phoneno,req.params.id];
    console.log(data)

    const query = "UPDATE bank SET  Phoneno = ? WHERE id = ?";
    connection.query(query,data,function (error, result) {
        if (error) {
            console.log("Error...", error.sqlMessage);
            res.status(500).send("Database error");
        } else {
            res.send( result );
        }
    });

};

const putBank= (req, res) => {
    const data = [ req.body.id, req.body.bankname, req.body.accountno, req.body.Phoneno, req.params.id];

    const query = "UPDATE bank SET bankname = ?,accountno, Phoneno = ?, WHERE id = ?";
    
    connection.query(query, data, function (error, result) {
        if (error) {
            console.log("Error...", error.sqlMessage);
        } else {
            res.send(result);
        }
    });
};


module.exports = {getBank, patchBank, deleteBank, putBank, postBank}



