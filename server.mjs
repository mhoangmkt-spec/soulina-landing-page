import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
http.createServer(async(req,res)=>{try{let p=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(p.endsWith('/'))p+='index.html';const target=path.resolve(root,'.'+p);if(!target.startsWith(root+path.sep))throw Error();const data=await fs.readFile(target);res.setHeader('Content-Type',({'html':'text/html; charset=utf-8','css':'text/css','js':'text/javascript','jpg':'image/jpeg','png':'image/png','webp':'image/webp'})[path.extname(target).slice(1)]||'application/octet-stream');res.end(data);}catch{res.writeHead(404);res.end('Not found');}}).listen(4317,'127.0.0.1',()=>console.log('http://127.0.0.1:4317'));
