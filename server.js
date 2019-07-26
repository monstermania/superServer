const 
    express = require('express'),
    app = express(),
   // quotes = require('./db/mongoose'),
    mongoose = require('./db/mongoose')
    Person = require('./models/person')
    bodyParser = require('body-parser')
    path = require('path')
    port = process.env.port || 8000;
    //MIDDLEWARE CONNECTION
    app.use(express.json());
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ extended: true}));

    app.use(express.static(__dirname + '/public'));
 
    //ROUTES
        // ROOT/HOME Route
    // app.get('/', (req, res) => {
    //     res.json({'success': true});
    // });

    // app.get('/quotes', (req, res) => {
    //     res.json({'success' : true, quotes})
    // })
        

        //(READ ALL) INDEX: load ALL autoes
        //(READ ONE) FIND/SHOW: ONE SPECIFIC QUOTE
        // app.get('/quotes/:id', (req, res) =>{
        //     let quote = quotes.find(x => x.id == req.params.id);
        //     quotes.quote = req.body.quote;
        //     res.json({'success': true, 'message' : 'Updated'})
        // })
        // //CREATE: QUOTE
        app.post('/person', async (req, res) =>{
            console.log(req.body);          
     

            var person = new Person({
                    name: req.body.name,
                    age: req.body.age,
                    ifFun: req.body.ifFun
                });

            await person.save();

            res.status(200).send(person);
    })

        // app.post('/quotes', (req, res) =>{
        //     quotes.update({...req.body, id});
        //     id++;
        //     res.json({'success' : true, quotes})
        // })
        // //UPDATE: QUTOE
    app.patch('/person/:id', async (req, res) =>{
        console.log(req.params.name)
        await Person.findOneAndUpdate({ name: req.params.name}, {isFun: false});
        res.status(200).send(`Updated: ${req.params.name}`);
    });
        // //DEYSTROY: QUOTE



    app.listen(port, err => {
        console.log(err || `Application is listening on PORT ${port} `)
});


