const pool = require("./db");
const sql = "SELECT * FROM customer.todo";

function result(err, res){
    try{
        console.log(res.rows);        
    }catch(err){
        console.error(err.message);
    }
}

pool.query(sql,result);
pool.end();