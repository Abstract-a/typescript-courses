//* Variable Declarations & Inference
// let temperature = 6 //! inference
// let temperature = 6
// const humidity = 79

// temperature = 'warm' //! type-checking
// let humidity = 79 //! literal type

// //* A type as a set of allowed values

// temperature = 23 //✔️ (1)  - re-assignability of a let
// temperature = 23
// temperature = humidity //! (2) - type-checking
// humidity = temperature //! (3) - number is not of type `79`
// humidity = temperature
// humidity = 79
// humidity = 79 //✔️ (4) - 79 is of type `79`
// humidity = 78 //! (5) - 78 is not of type `79`

// let temp2 = 19 //! temp2's type is { all numbers }
// let humid2 = 79 as const //! humidity's type is { 79 }
// let humid2 = 79 as const

// humid2= 22
// temp2 = 23 //! Is each member in { 23 } also in { all numbers }?
// temp2 = humid2 //! Is each member in { 79 } also in { all numbers }?

// humid2 = temp2 //! Is each member in { all numbers } also in { 79 }?
// humid2 = 79 //! Is each member in { 79 } also in { 79 }
// humid2 = 78 //! Is each member in { 78 } also in { 79 }

// //* Implicit `any` and type annotations

// //between 500 and 1000
// export const RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500

// let startTime = new Date()
// let endTime: Date

// setTimeout(() => {
//   endTime = 0
//   endTime = new Date()
// }, RANDOM_WAIT_TIME)
// export const RANDOM_WAIT_TIME = Math.round(Math.random()*500)  + 500
// let startTime = new Date()
// let endTime:Date
// setTimeout(() => {
//   // endTime = 0
//   endTime = new Date()
// }, RANDOM_WAIT_TIME);
// here when we declare let endTime; it has an implicit any type, which is bad because when we assign it after, it still has that implicit any, so give it its type when you declare it
// //* Type Casting

// let fem = new Date('Jan 1, 2012')
// let date1 = fem
// let date2 = fem as any
// date1 inherits the type of fem

// let frontEndMastersFounding = new Date('Jan 1, 2012')
// let date1 = frontEndMastersFounding
// let date2 = frontEndMastersFounding as any

// const humid3 = 79 as number //✔️ is 79 a number? If so, this is safe!
// const humid3 = 79 as number
// let date3 = "oops" as any as Date
// date3.toISOString()
// red flag as we can see date3 is a string but typescript is not throwing an error when using toISOString() even tho it is not a date, that is because the any type is higher than the Date type

// let date3 = 'oops' as any as Date //! TypeScript thinks this is a Date now, but it's really a string

// date3.toISOString() //! what do we think will happen when we run this? 💥

// let date4 = 'oops' as Date

// //! Function arguments and return values

// function add(a: number, b: number): number {
//   return a + b // strings? numbers? a mix?
// }

// const result = add(3, 4)
// const p = new Promise(result)

// when we first didn't use types on our function we were able to pass the result to the Promise because it is an any and the promise expects a cb, but after adding types typescript catches the err

// function add(a: number, b: number) {
//   if (Math.random() > 0.5) {
//     return a + b
//   }
// }

// const result = add(3, 4)
// someone might expect result to be of type number because the return types of the func should be infered and infer number but we have a branch that returns undefined that someone might forget about, so it's best to be explicit and give the type to your function return

export default {}
