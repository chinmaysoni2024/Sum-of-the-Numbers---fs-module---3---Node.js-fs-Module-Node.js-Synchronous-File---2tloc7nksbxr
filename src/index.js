const fs = require('fs')
const path = require('path')

const inputfilepath = path.join(__dirname,'input.txt')
const outputfilepath = path.join(__dirname,'output.txt')
const data  = fs.readFileSync(inputfilepath,'utf-8')
const res  = data.split("\n")
let sum = 0
for (let i of res){
    const number  = Number(i.split(" ")[1])
    sum +=number
}
fs.writeFileSync(outputfilepath,sum.toString())
