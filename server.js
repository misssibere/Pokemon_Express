require('dotenv').config();
const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const Pokemons = require('./models/Pokemons');

app.set('view engine', 'jsx');
app.use(express.urlencoded({extended: true}));

app.set('view engine' , 'jsx' );
app.engine('jsx', require('express-react-views').createEngine());

//wellcome page
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    UseUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

app.get('/' ,(req, res) => {
    res.send("Welcome Page");
})

// app.get('/pokemon', (req, res) => {
//Index
// app.get('/pokemon' ,(req, res) => {
//     res.send(pokemon);
// });

app.get('/pokemon/', (req, res) => {
    res.render('Index', { pokemon : pokemon});
  });


// app.get('/pokemon/:indexOfPokemonArray', function(req, res){
    // res.send(pokemon[req.params['indexOfPokemonArray']]);
// });  
// })
app.get('/pokemon', (req, res) => {
    Pokemons.find({}).then((allPokemons) => {
        res.render('Index' , {pokey: allPokemons});

// app.get('/pokemon/:indexOfPokemonArray', function(req, res){
//     res.render(pokemon[req.params['indexOfPokemonArray']])
    })

});

// });
//New
app.get('pokemon/new', (req, res)=>{
    res.render('New')
})

app.get('/pokemon/:indexOfPokemonArray', function(req, res){
    res.render('Show' , {
        pokey: pokemon[req.params.indexOfPokemonArray]
        });
    });  
// create

app.post('/pokemon', (req, res) =>{

    Pokemons.create(req.body)
    .then((createdPokemon) => {
      res.redirect('/pokemon')
    })
    .catch(error => {
      console.error(error)
    });

})

/// Show
app.get('/pokemon/:id' , (req,res) => {
    //res.send(pokemon[req.params.index]);
    Pokemons.findOne({_id: req.params.id}).then((foundPokemon) =>{
       // res.send(foundVegetable)
       res.render('Show' , {
        pokey: foundPokemon
       })
    }).catch(error =>{
        console.error(error)
    })
})


//Port Listining 
app.listen(3000, () => {
    console.log('listening on port 3000');

});
    console.log("Listening on port 3000");
})


