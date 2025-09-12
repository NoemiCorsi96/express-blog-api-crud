//Milestone 1

const posts= require('../data/post')

//index 
const index= (req, res) => {

    res.json(posts)
}

//show
const show= (req, res) => {

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

}

//store 
const store= (req, res) => {
    res.send('Create a new post')
}

//update 
const update= (req, res) => {
  res.send('Update the entire single post with ID:' + req.params.id)
}

//modify 
const modify= (req, res) => {
  res.send('Partial update for the single post with ID:' + req.params.id)
}

//destroy

const destroy= (req, res) => {
  const { id } = req.params
  console.log(id);


  const post = posts.find(item => item.id === parseInt(id))
  console.log(post);

  if (!post) {

    return res.status(404).json({
      error: true,
      message: 'Resource not found'
    })
  }

  posts.splice(posts.indexOf(post), 1);
  console.log(posts);

  res.sendStatus(204)
}


//esporto le azioni 
module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}
//fare le prove con Postman per vedere se funziona
//Con Postman funziona! 