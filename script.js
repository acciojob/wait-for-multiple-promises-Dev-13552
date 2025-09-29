//your JS code here. If required.
const table = document.querySelector("#output")

function randomTime(){
	return (Math.random() * 2 + 1);
}

const promise1 = new Promise((res, rej)=>{
	const time = randomTime()
	setTimeout(()=>{
		res(time)
	}, time*1000)
})


const promise2 = new Promise((res, rej)=>{
	const time = randomTime()
	setTimeout(()=>{
		res(time)
	}, time*1000)
})


const promise3 = new Promise((res, rej)=>{
	const time = randomTime()
	setTimeout(()=>{
		res(time)
	}, time*1000)
})

Promise.all([promise1, promise2,promise3])
.then((results)=>{
	let total = 0
	const loading = document.querySelector("#loading")
	loading.remove()
	results.forEach((result, index)=>{
		const row = document.createElement('tr')
		row.innerHTML = `<td>Promise ${index+1}</td><td>${result.toFixed(3)}</td>`
		table.appendChild(row)
	})
		total = Math.max(...results)
		const row = document.createElement('tr')
		row.innerHTML = `<td>Total</td><td>${total.toFixed(3)}</td>`
		table.appendChild(row)
		
})

