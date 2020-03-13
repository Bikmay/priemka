'use strict'
 class TableAbitur(){
 	constructor(){}

static ConnectInsertAbitur(let datas){
	datas[0]='090320';
	datas[1='Иванов';]
	datas[2]='Пётр';
	datas[3]='Владимирович';
	datas[4]='90';
	datas[5]='85';
	datas[6]='80';
	datas[7]='Не требуется';	
	datas[8]='Бюджетное';

			const {Pool, Client}=require('pg');
			const connectionString='postgressql://postgres:username@passport:localhost/namedatabase';
			const data='INSERT  INTO entrant(entrant_id,name,bals_of_russian,bals_of_math,bals_of_third,need_campus,type_edu) data($1,$2,$3,$4,$5,$6,$7,$8,$9)';
			client.query(text,values,(err,res)=>{	
		if(err){
			console.log(err.stack)
			} else{console.log(res.rows[0])	
	}
})
	pool.end();}
}

class TableSpec(){
constructor(){}

static ConnectInsertSpec(let data1,bals_of_russian,bals_of_math,bals_of_third){

sum=bals_of_russian+bals_of_math+bals_of_third;

	data1[0]='entrant_id';
	data1[1]=sum;
	
	const {Pool, Client}=require('pg');
	const connectionString='postgressql://postgres:username@passport:localhost/namedatabase';
	const data='INSERT  INTO sp_090304(entrant_id, total) data1($1,$2) RETURNING ID ';
	client.query(text,values,(err,res)=>{
			if(err){
				console.log(err.stack)
			} else{console.log(res.rows[0])

	
				}
				})
		pool.end();
					}					
	

}


