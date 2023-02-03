var citations= [
    '\"Ouh Pinaise !.\"\n\n-Homer Simpson',
    '\"Mmmh un doonut!\"\n-Homer Simpson',
    '\"Va te faire shampooiner!\"\n-Bart Simpson',
    '\"Essayer c\'est le premier pas vers l\'échec.\"\n-Homer Simpson',
    '\"Essayer c\'est le premier pas vers l\'échec.\"\n-Homer Simpson',
    '\"Pourquoi ai-je le sentiment qu\'un jour je vais décrire cela à un psychiatre?\"\n-Lisa Simpson',
    '\"C\'est pas parce que je m\'en fous que je comprends pas.\"\n-Homer Simpson',
    '\"Vive l\'alcool. La cause et la solution à tous nos problèmes.\"\n-Homer Simpson',
    '\"Pitètre que demain en te réveillant tu seras mort.\"\n-Homer Simpson',
    '\"Je ne peux pas promettre que je vais essayer, mais je vais essayer d\'essayer\"\n-Bart Simpson',
    '\"Si tu ne fais jamais rien, tu ne feras jamais d\'erreurs.\"\n-Homer Simpson',
    '\"Je pense juste que c\'est un fantasme. Si vous croyez aux anges, pourquoi pas des monstres marins, des licornes ou des lutins?\"\n-Lisa Simpson',
    '\"Télévision : Professeur. Mère. Maîtresse\"\n-Homer Simpson',
    '\"Normalement, je prie pas. Mais si t\'es là-haut, sauve moi Superman.\"\n-Homer Simpson'

]


function newQuote(){
    var randomNumber = Math.floor(Math.random()*citations.length);
    document.getElementById('citations').innerHTML = citations[randomNumber];
}

newQuote()