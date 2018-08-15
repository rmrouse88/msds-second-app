const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const proxy = require('http-proxy-middleware')
const Twitter = require('twitter')
const rx = require('rxjs')

require('dotenv').config()

client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET  
})

let params = {track:'javascript', filter_level: 'none'}
    
let stream = client.stream('statuses/filter', params)

const app = express()

app.listen(3000, () => {
    console.log("App listening on 3000")
})

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

