// importing the express module
const express = require("express");
// creating an expres application
const app = express();
// function to add two numbers
const addTwoNumber = (n1, n2) => {
    return n1 + n2;
}
// route to handle .get requests to "/addTwoNumber"
app.get("/addTwoNumber", (req, res) => {
    // Parsing query parameters
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    // calculating the result
    const result = addTwoNumber(n1, n2);

    // html content to be sent as response
    const htmlResponse = `<html><body><h1>Result: ${result}</h1></body><br></html>`;
    
    // setting content type as html
    res.set('Content-Type', 'text/html');
    
    // sends the html response
    res.send(htmlResponse);

    // sends json response with the result
    res.json({ statuscocde: 200, data: result });
});


// defining the port for the serve
const port = 3000;

// starting the server and listening on the specified port
app.listen(port, () => {
    console.log("listening on port " + port);
});