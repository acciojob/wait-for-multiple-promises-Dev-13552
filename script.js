//your JS code here. If required.
const table = document.querySelector("#output")

function randomTime(){
	return Math.floor(Math.random()*4)+1
}

const promise1 = new Promise((res, rej)=>{
	const time = randomTime()
	setTimeout(()=>{
		res(time)
	}, time)
})


const promise2 = new Promise((res, rej)=>{
	const time = randomTime()
	setTimeout(()=>{
		res(time)
	}, time)
})


const promise3 = new Promise((res, rej)=>{
	const time = randomTime()
	setTimeout(()=>{
		res(time)
	}, time)
})

Promise.all([promise1, promise2,promise3])
.then((results)=>{
	
	results.forEach((result, index)=>{
		const row = document.createElement('tr')
		row.innerHTML = `<td>Promise ${index+1}</td><td>${result}</td>`
		table.appendChild(row)
	})


	
	
})

