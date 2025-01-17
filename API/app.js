import {createServer} from 'node:http'

createServer(async(req,res)=>{
    res.setHeader('Content-Type','application/json')
    //ajouter les headers pour les access control allow origin
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Accept,Origin, Auhorization')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH,OPTIONS')

    const url  = new URL(req.url,`http://${req.headers.host}`)


    console.log('url:',url)
}).listen(3002)