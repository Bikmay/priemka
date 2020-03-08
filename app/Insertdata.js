'use strict';
class TableAbitur{
	constructor(){
		this.values=['090320','Пётр','90','85','80','Не требуется','Бюджетное'];//здесь наверное 
		this.values1=['090320','total'];										//должен быть вызов файла из которого 
																				//будут передаваться данные в массив
	}
		//подключение к таблице абитуриентов
		ConnectInsertAbitur(){
			const {Pool, Client}=require('pg');
			const connectionString='postgressql://postgres:username@passport:localhost/namedatabase';
			const data='INSERT  INTO entrant(entrant_id,name,bals_of_russian,bals_of_math,bals_of_third,need_campus,type_edu) values($1,$2,$3,$4,$5,$6,$7)';
			const values=['090320','Пётр','90','85','80','Не требуется','Бюджетное'];

	client.query(text,values,(err,res)=>{	
		if(err){
			console.log(err.stack)
			} else{console.log(res.rows[0])	
	}
})
	pool.end();}
}
class tableSpec{
	constructor(){
		
	}
//Подключение к таблице направлений		}
ConnectInsertSpec(){
	const {Pool, Client}=require('pg');
	const connectionString='postgressql://postgres:username@passport:localhost/namedatabase';
	const data='INSERT  INTO sp_090304(entrant_id, total) values($1,$2)';
	const values=['090320','total  '];

		client.query(text,values,(err,res)=>{
			if(err){
				console.log(err.stack)
			} else{console.log(res.rows[0])

	
				}
				})
		pool.end();
					}																						


}


