function Card(elenco){

    let card = document.createElement("div")
    card.classList.add("card")

    let ator = document.createElement("img")
    ator.src = elenco.ator
    ator.alt = elenco.nome_Ator

    let nome_Ator = document.createElement("h1")
    nome_Ator.innerText = elenco.nome_Ator

    let nome_Personagem = document.createElement("p")
    nome_Personagem.innerText = elenco.nome_Personagem

    card.appendChild(ator)
    card.appendChild(nome_Ator)
    card.appendChild(nome_Personagem)

    return card
}