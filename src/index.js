const fs = require('fs')

const a  = fs.readFileSync('./input.txt','utf-8')
const b  = fs.readFileSync('./input.txt','utf-8')
const c  = fs.readFileSync('./input.txt','utf-8')

const res = Number(a) + Number(b) + Number(c)

fs.writeFileSync('output.txt', String(res))
