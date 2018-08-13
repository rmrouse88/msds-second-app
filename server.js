const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const proxy = require('http-proxy-middleware')

// const myObserver = Rx.Observable.create((observer, params) => {
//     observer.next(request.get())
// })

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
