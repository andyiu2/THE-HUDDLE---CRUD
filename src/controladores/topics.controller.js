const {getAll, create} = require('../modelos/topics.model')

const home = (req, res) => {
    const topics = getAll()
    console.log(topics)
    res.render('index', {topics : topics})
}

const agregar = (req, res) => {
    console.log(req.body)
    const {topic} = req.body
    
  
    console.log(`TOPIC CONTROLLER: ${topic}`); // Verifica que no imprima [object Object]
    
    const add = create(topic)
    res.status(201).json(add)
    
}

module.exports = {
    home,
    agregar
}
