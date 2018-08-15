const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const proxy = require('http-proxy-middleware')
const Twitter = require('twitter')
// const rx = require('rxjs')

require('dotenv').config()

const app = express()

app.listen(3000, () => {
    console.log("App listening on 3000")
})

console.log(process.env.NODE_ENV)


app.use("")


let options = {
    target: "http://178.128.146.146:8000",
    changeorigin: true,
    // onProxyReq(proxyReq, req, res) {
    //     console.log(proxyReq)
    // },
    onProxyRes(proxyRes, req, res) {
        console.log(res)
    }
}

let myProxy = proxy(options)

app.use('/predict*', myProxy)

let twitter_proxy = {
    "target": ""
}

// app.use('/twitter'
// )

