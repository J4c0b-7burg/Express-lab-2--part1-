const express = require('express')

const app = express();
const PORT = 3000

const array8 = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes",
 "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now",
  "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good",
   "Very doubtful"];
   
   

app.get('/greetings/:name', (request, response) => {
    console.log(request.params)
    response.send(`Wow! Hello there, ${request.params.name}`)
})

app.get('/tips/:total/:tipPercent', (request, response) => {
    response.send(`Your tip is %${request.params.tipPercent}`)
})

app.get('/magic8/:question', (request, response) => {
    const answer = array8[Math.floor(Math.random()*array8.length)];
    response.send(`You asked ${request.params.question}? <h1>${answer}</h1>`)
})

app.listen(PORT, () => {
    console.log(`Currently listening to ${PORT}`);
});