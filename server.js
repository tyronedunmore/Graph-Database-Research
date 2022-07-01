//import dependencies in file
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
let neo4j = require('neo4j-driver');

let app = express();


// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// middle ware for body parser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));




// neo4j connections
const driver = neo4j.driver("bolt://3.86.252.82:7687", 
							neo4j.auth.basic("neo4j", "sections-winches-nonavailability"), 
							{
						    /* encrypted: 'ENCRYPTION_OFF' */
						        });

const query =
  `
  MERGE (SOC:Project {name: 'School of Code', Id: 568, industry: ['education','web3','B2C'], projectStage: 'scoping'})   

  `;


const session = driver.session({database:"neo4j"});

session.run(query)
  .then((result) => {
    result.records.forEach((record) => {
        console.log(record.get('name'));
    });
    session.close();
    driver.close();
  })
  .catch((error) => {
    console.error(error);
  });




// set up
app.get("/", function(req,res){
    res.send('IT WORKS');
})

app.listen(4000);
console.log('Server Started on Port 3000')

// export
module.exports = app;