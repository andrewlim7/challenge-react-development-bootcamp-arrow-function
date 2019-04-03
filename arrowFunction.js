//Exercise 1
//Method 1
const addAndMultiply = (x,y,z) => {
	return ((x + y) * z)
}

//Method 2
// const addAndMultiply = (x,y,z) => ((x + y) * z)

console.log(addAndMultiply(2,2,2))

const selfIntro = (name,hobby,count) => {
	return `My name is ${name}. I practice ${hobby} ${count} times a day.`
}

console.log(selfIntro('Andrew','Basketball','2'))


//Excercise 2
let squared = (x) => x * x
console.log(squared(2))

//Excercise 3
const prices = [1.00, 2.00, 3.00, 4.00]
const gst = 0.06

const pricesWithTax = prices.map(x => x + (x * gst))
console.log(pricesWithTax) // you should get [1.06, 2.12, 3.18, 4.24]

pricesWithTax1 = []
prices.forEach(function(x){
	pricesWithTax1.push(x + (x * gst))
})

console.log(pricesWithTax1)