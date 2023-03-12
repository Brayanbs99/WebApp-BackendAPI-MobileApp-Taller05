const express = require('express');
const cors = require('cors');
const app = express();
const { v4: uuidv4 } = require('uuid');

app.use(cors());
app.use(express.json());

let movies = [
  {id: uuidv4(), title: 'Avatar', year: 2010, director: 'Andrea Soto', genre: 'Action'},
  {id: uuidv4(), title: 'Star Wars', year: 1990, director: 'Brayan Brenes', genre: 'Action'},
  {id: uuidv4(), title: 'Fast and Furious 2', year: 2005, director: 'Mauricio Brenes', genre: 'Action'}
];

app.get('/movies', (req, res) => {
  res.json(movies);
});


app.get('/movies:/:id', (req, res)=> {
  const id = parseInt(req.params.id);
  if (movie){
    res.json(movie);
  }else{
    res.status(404).send('Movie not found')
  }
});

app.post('/movies', (req, res)=> {
  const movie = req.body;
  if(!movie.title || !movie.director || !movie.genre || !movie.year){
    return res.status(400).json({ error: 'Missing required fields'});
  }
  movie.id = uuidv4();
  movies.push(movie);
  res.json(movie);
})

const PORT = 3001;
app.listen(PORT, () =>{
  console.info(`Server running on port ${PORT}`);
});