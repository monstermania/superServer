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
    // GET ALL PEOPLE ROUTE (INDEX)
        app.get('/person', async (req, res) =>{
            console.log(`finding ALL results`);
            const results = await Person.find({});
            res.status(200).send(results);
        })
    // GET ONE PERSON
    app.get('/person/:id/', async (req, res) =>{
        console.log(`finding ${req.params.id}`);
        const result = await Person.find({_id: req.params.id});
        res.status(200).send(result);
    })

        //(READ ALL) INDEX: load ALL autoes
        //(READ ONE) FIND/SHOW: ONE SPECIFIC QUOTE
        // app.get('/quotes/:id', (req, res) =>{
        //     let quote = quotes.find(x => x.id == req.params.id);
        //     quotes.quote = req.body.quote;
        //     res.json({'success': true, 'message' : 'Updated'})
        // })

        app.patch('/person/:id', async(req, res) => {
            console.log(req.params.id);

            await Person.findOneAndUpdate({_id: req.params.id},
                    {
                name: req.body.name,
                age: req.body.age,
                ifFun: req.body.ifFun
                            });

            res.status(200).send(`Updated: ${req.params.id}`);

        });
        

    //     // //CREATE: QUOTE
        app.post('/person', async (req, res) =>{
            console.log(req.body);          
     
            // res.status(200).send('Hello Response')

            var person = new Person(
                {
                    name: req.body.name,
                    age: req.body.age,
                    ifFun: req.body.ifFun
                });

            await person.save();

            res.status(200).send(person);
        })

    //     // app.post('/quotes', (req, res) =>{
    //     //     quotes.update({...req.body, id});
    //     //     id++;
    //     //     res.json({'success' : true, quotes})
    //     // })
    //     // //UPDATE: QUTOE
    // // app.patch('/person/:id', async (req, res) =>{
    // //     console.log(req.params.name)
    // //     await Person.findOneAndUpdate({ name: req.params.name}, {isFun: false});
    // //     res.status(200).send(`Updated: ${req.params.name}`);
    // // });
    // //     // //DEYSTROY: QUOTE
            app.delete('/person/:id', async (req, res) =>{
                console.log(req.params.id);
                await Person.findOneAndUpdate({_id: req.params.id});
                res.status(200).send(`Deleted this id`)
            })


    app.listen(port, err => {
        console.log(err || `Application is listening on PORT ${port} `)
});


