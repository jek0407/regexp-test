const str = `
010-1234-5678
dog
theek0407@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aaabbbcccccdddd
http
`

// const regExp = new RegExp('the','gi')
// const regExp = 
// console.log(regExp.test(str))
// console.log(str.replace(regExp, 'AAA'))
// console.log(str.match(/\.$/gi))
// console.log(str)

console.log(
  str.match(/(?<=@).{1,}/g)
)

