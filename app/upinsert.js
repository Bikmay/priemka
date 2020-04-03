'use strict';
 class TableAbitur{
 	constructor(){}

static ConnectInsertAbitur(let datas[]){
	

			const {Pool, Client}=require('pg');
			const connectionString='postgressql://postgres:username@passport:localhost/namedatabase';
			const data='INSERT  INTO entrant(name,bals_of_russian,bals_of_math,bals_of_third,need_campus,type_edu) data($1,$2,$3,$4,$5,$6,$7,$8,$9)';
			client.query(text,values,(err,res)=>{	
		if(err){
			console.log(err.stack)
			} else{console.log("good")	
	}
})
	pool.end();}
}

class TableSpec{
constructor(){}

static ConnectInsertSpec( let datas){



	
	
	const {Pool, Client}=require('pg');
	const connectionString='postgressql://postgres:username@passport:localhost/namedatabase';
	const data='INSERT  INTO table_name(entrant_id, total) data1($1,$2) RETURNING ID ';
	client.query(text,values,(err,res)=>{
			if(err){
				console.log(err.stack)
			} else{console.log("Good")

	
				}
				})
		pool.end();
					}					
	

}


