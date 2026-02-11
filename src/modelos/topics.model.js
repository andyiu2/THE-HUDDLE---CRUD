const topics = [
    {id : 1, name : "Andy"},
    {id : 2, name : "JS"},
    {id : 3, name : "Node"}
]

const getAll = () => topics

const create = (topic) => {
    const newTopic = {
        id: 50,
        name: topic
    }

    topics.push(newTopic)

    console.log("Desde el modelo:", topics); 
    return topics
}

module.exports = {
    getAll, 
    create
}