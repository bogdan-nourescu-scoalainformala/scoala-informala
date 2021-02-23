var arr = [1,1,2,3,4,5,6,8];
arr.sort((a,b)=>a-b);

arr = [
	{
		prenume:"",
		varsta:""
	}
];

arr.map((item)=>({
	...item,
	name:"My Name"
}));


setTimeout(()=>{
	console.log("this is a callback");
},200);

async function ajax({succes, fail}){
	let result = await fetch(url);
	if(result.statusCode === 200){
		succes(result);
	}else{
		if(typeof fail === "function"){
			fail(result);
		}
	}
}






//callback
ajax({
	success:(response)=>{
		ajax({
			success:(response)=>{
				ajax({
					
				})
			},
			fail:(response)=>{
				console.log("after ajax is finished this is called if failure");
			}
		})
	},
	fail:(response)=>{
		console.log("after ajax is finished this is called if failure");
	}
});

ajax(url1).then(()=>{
	ajax(url2).then(()=>{
		ajax(url3)
	})
})
ajax(url1).then(()=>{
	return ajax(url2)
}).catch((err)=>{
	//err
})
async function x(){
	try{
		let y = await ajax(url1)
	}catch(e){
		//if fail
	}
	await ajax(url2)
	await ajax(url3)
}
async function x(){
	await Promise.all([
		ajax(url1),
		ajax(url2),
		ajax(url3)
	])
}











class Promise{
	constructor(callback){
		this.state = "pending";
		this.result = null;
		
		let resolve = function (param){
			this.state = "resolved";
			this.result = param;
			this.thenCallback(this.result);
		}
		let reject = function (param){
			this.state = "rejected";
			this.result = param;
			this.catchCallback(this.result);
		}
		
		setTimeout(()=>{
			callback(resolve, reject);
		},1);
		
	}
	then(thenCallback){
		this.thenCallback = thenCallback;
		return this;
	}
	catch(catchCallback){
		this.catchCallback = catchCallback;
		return this;
	}
}	
ajax(url1)
.then(()=>{
	return ajax(url2)
})
.catch((err)=>{
	//err
})



function delayedUpperCase(parameter){
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			if (typeof parameter === 'string') {
				parameter = parameter.toUpperCase();
				resolve(parameter);
			} else {
				reject(parameter);
			}
		}, 500)
	})
}

async wait(milis){
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, milis)
	})
}
async function delayedUpperCase(parameter){
	await wait(500);

	
	if (typeof parameter === 'string') {
		parameter = parameter.toUpperCase();
		return parameter;
	} else {
		throw new Error(parameter);
	}
}

console.log(delayedUpperCase('string'));
console.log(delayedUpperCase(7));
