const API_URL = 'http://localhost:3000'


async function agregar() {
  const input = document.getElementById('topic_input');
  console.log(input);

  await fetch('http://localhost:3000/topic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // indica que se envia JSON
    },
    body: JSON.stringify({ topic: input.value }) // convierte el objeto a string
  });

}