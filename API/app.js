import {createServer} from 'node:http'
import {readUsers} from './api/usersApi.js'

createServer(async(req,res)=>{
    res.setHeader('Content-Type','application/json')
    //ajouter les headers pour les access control allow origin
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Accept,Origin, Auhorization')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH,OPTIONS')
//endpoints
    const url  = new URL(req.url,`http://${req.headers.host}`)
    const method = req.method
    let response = JSON.stringify([])
    switch(url.pathname){
        case '/users':
            if(method === 'GET'){
                response = await readUsers()
            } 
            break
        case '/checkUser':
            break
        case '/projects':
            break
            default:
                response=null
    }
    
    
    res.write(JSON.stringify(response))
    res.end()
    console.log('url:',url)
}).listen(3002)