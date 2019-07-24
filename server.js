const 
    express = require('express'),
    app = express(),
    quotes = require('./db/mongoose'),
    port = 8000;
    //MIDDLEWARE CONNECTION
    app.use(express.json());
    var id = 2;
    //ROUTES
        // ROOT/HOME Route
    app.get('/', (req, res) => {
        res.json({'success': true});
    });

    app.get('/quotes', (req, res) => {
        res.json({'success' : true, quotes})
    })


        //(READ ALL) INDEX: load ALL autoes
        //(READ ONE) FIND/SHOW: ONE SPECIFIC QUOTE
        app.get('/quotes/:id', (req, res) =>{
            let quote = quotes.find(x => x.id == req.params.id);
            quotes.quote = req.body.quote;
            res.json({'success': true, 'message' : 'Updated'})
        })
        //CREATE: QUOTE
        app.post('/quotes', (req, res) =>{
            quotes.update({...req.body, id});
            id++;
            res.json({'success' : true, quotes})
        })
        //UPDATE: QUTOE
        //DEYSTROY: QUOTE



    app.listen(port, err => {
        console.log(err || `Application is listening on PORT ${port} `)
});


