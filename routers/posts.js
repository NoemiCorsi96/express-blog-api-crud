//importo express
const express = require('express');
//creo l'istanza principale
const router = express.Router()

//vado a copiare tutte le rotte farre in server.js, cambio app=>router
// creo l'array con id
const posts = [
  {
    id: 1,
    titolo: "Ciambellone",
    contenuto: "Un classico dolce soffice da colazione, semplice e genuino.",
    immagine: "/img/ciambellone.jpeg",
    tags: ["dolci", "colazione", "cucina"]
  },
  {
    id: 2,
    titolo: "Cracker alla Barbabietola",
    contenuto: "Snack croccanti e colorati, perfetti come aperitivo o spezza-fame.",
    immagine: "/img/cracker_barbabietola.jpeg",
    tags: ["snack", "salati", "barbabietola"]
  },
  {
    id: 3,
    titolo: "Pane Fritto Dolce",
    contenuto: "Ricetta tradizionale: pane fritto arricchito con zucchero, semplice ma irresistibile.",
    immagine: "/img/pane_fritto_dolce.jpeg",
    tags: ["tradizione", "dolci", "frittura"]
  },
  {
    id: 4,
    titolo: "Pasta alla Barbabietola",
    contenuto: "Un primo piatto colorato e ricco di gusto, con tutta la dolcezza della barbabietola.",
    immagine: "/img/pasta_barbabietola.jpeg",
    tags: ["primi", "barbabietola", "cucina"]
  },
  {
    id: 5,
    titolo: "Torta Paesana",
    contenuto: "Dolce rustico tipico lombardo a base di pane raffermo, latte e cacao.",
    immagine: "/img/torta_paesana.jpeg",
    tags: ["tradizione", "dolci", "lombardia"]
  }
];

//lista post 
router.get('', (req, res) => {
    //cosi restituisco la frase 'lista dei post'
    //res.send('Lista dei post')
    //con il comando seguente lo visualizzo in formato json
    res.json(posts)
})

//show 
router.get('/:id', (req, res) => {

  const { id } = req.params
  console.log(id);


  const post = posts.find(item => item.id === parseInt(id))
  console.log(post);
  
  if(!post) {

    res.status(404).json({
      error: true,
      message: 'Resource not found'
    })
  }

  //res.send('Show the single pizza with ID:' + req.params.id)
  res.json(post)

})


//store

router.post('', (req, res) => {
    res.send('Create a new post')
})

// update
router.put('/:id', (req, res) => {
  res.send('Update the entire single post with ID:' + req.params.id)
})

// modify (U)
router.patch('/:id', (req, res) => {
  res.send('Partial update for the single post with ID:' + req.params.id)
})

// destroy (D)
router.delete('/:id', (req, res) => {
  res.send('Delete the single post with ID:' + req.params.id)
})



//esporto
module.exports = router;
