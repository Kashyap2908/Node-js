/* 
Write node.js script to print “Welcome to Home Page” with two links 
containing two pages named as “About Us” and “Contact Us” on 
home page of server. If user request for About Us page it should 
display “Welcome to LJ University” in bold font-style with blue 
color and if user request for Contact Us page it should display 
“Email:abc@ljinstitutes.edu.in” in italic font-style with red color if 
any other request is requested it shows “Page not found” message in 
plaintext
*/

var http=require('http')
http.createServer(function(req,res){
    if(req.url==="/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>Welcome to Home Page</h1><a href='/about'>About Us</a><br><a href='/contact'>Contact Us</a>")
        res.end()
    }else if(req.url==="/about"){
        res.writeHead(200,{"content-type": "text/html"})
        res.write(`
            <h1 style="color:blue;"><b>Welcome to LJ University</b></h1>
            `)
    }else if(req.url==="/contact"){
        res.writeHead(200,{"content-type": "text/html"})
        res.write("<h1 style='color:red;'><i>Email:abc@ljinstitutes.edu.in</i></h1>")
        res.end()
    }else{
        res.writeHead(404,{"content-type": "text/plain"})
        res.write("Page not found")
        res.end()
    }
}).listen(8005)