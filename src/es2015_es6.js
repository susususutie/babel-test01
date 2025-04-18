/** ES2015 (ES6) */

// let const
let x = 10
const y = 20
console.log(x, y)

// 箭头函数
const add = (a, b) => a + b
add(1, 2)

// 模板字符串
const name = 'Alice'
const greeting = `Hello, ${name}!`
console.log(greeting)

// 解构赋值
const person = { name: 'Bob', age: 30 }
const { name: personName, age: personAge } = person
console.log(personName, personAge)

// 默认参数
const multiply = (a, b = 1) => a * b
function f1(a, ...rest) {
  return a
}
console.log(multiply(5))
console.log(multiply(5, 2))
console.log(f1(1, 2))

// 扩展运算符
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combined = [...arr1, ...arr2]
console.log(combined)

// Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved!')
  }, 1000)
})
promise.then(message => {
  console.log(message)
})

// 类
class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(`${this.name} makes a noise.`)
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name)
  }
  static wow() {
    console.log('Wow!')
  }
  get id() {
    return this.name.length
  }
  set id(value) {
    this.name = value
  }
  tell() {
    super.speak()
  }
  speak() {
    console.log(`${this.name} barks.`)
  }
}
const dog = new Dog('Rex')
dog.speak()

// 新字符串方法
const str = 'Hello, World!'
console.log(str.startsWith('Hello'))
console.log(str.endsWith('!'))
console.log(str.repeat(3))

// 新数组方法
const numbers = [1, 2, 3, 4, 5]
const newNumbers = numbers.map(num => num * 2)
console.log(newNumbers)

// async/await
const fetchData = async () => {
  const response = await promise
  console.log(response) // Promise resolved!
}
fetchData()

// Set
const mySet = new Set([1, 2, 3, 4, 5])
mySet.add(6)
mySet.delete(2)
mySet.has(3)
mySet.forEach(value => {
  console.log(value)
})
const myArray = [...mySet]
console.log(myArray)

// Map
const myMap = new Map([
  ['name', 'Alice'],
  ['age', 30],
])
myMap.set('gender', 'female')
console.log(myMap)

// WeakMap
const weakMap = new WeakMap()
const obj1 = {}
const obj2 = {}
weakMap.set(obj1, 'value1')
console.log(weakMap)

// WeakSet
const weakSet = new WeakSet()
const obj3 = {}
weakSet.add(obj3)
weakSet.has(obj3)
weakSet.delete(obj3)
console.log(weakSet)

// Symbol
const uniqueSymbol = Symbol('description')
const anotherSymbol = Symbol('description')
console.log(uniqueSymbol === anotherSymbol)
