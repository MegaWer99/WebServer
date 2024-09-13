//const express = require('express')
import express from 'express'
//const path = require('path')
import path from 'path'

export const StartServer = (options) => {
    const { port, public_path='public'} = options
    
    const app = express()

    //midleware
    app.use(express.static(public_path))

    app.get('*', (req, res) =>{
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.send(indexPath)
    })

    app.listen(port, () => {
        console.log(`ESCUCHANDO EN EL PUERTO 3000`)
    })

}

//module.exports = {
//    StartServer
//}