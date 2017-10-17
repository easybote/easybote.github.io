const http = require('http');

const server = http.createServer();

server.on('request',(req, res)=>{
	res.writeHead(200,{'Content-Type':'text/html'});
    res.end(`	
	<!doctype>
	<html>
	    <meta charset="utf-8">	
	    <head>
		<div class="head">		     		 
		<title >Основы Node.js</title>
		</div>
		<style>
	.title{
		text-float:center;
		margin:10px;
        background:#43853d;		
	}
	.head{
		background:green;
		hight:20%;
	}
    </style>	         
        </head>
		<body>
		<h1 class="title">Основы</h1>
		<button onclick="alert('AA')">Нажми</button>
		</body>
    </html>    	
		`);   	
});

server.listen(3000, ()=>console.log("сервера работает"));