function firstPromise(fn) {
	// ...Please fill in here

	return fn
}
let count = 1
let promiseFunction = () =>
	new Promise(rs =>
		window.setTimeout(() => {
			rs(count++)
		})
	)
let firstFn = firstPromise(promiseFunction)
firstFn().then(console.log) // 1
firstFn().then(console.log) // 1
firstFn().then(console.log) // 1
