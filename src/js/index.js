/*
  o que devemos fazer? - quando passar o mouse em cima do peronagem na lista temos que adicionar a borda azul de seleção da imagem pequena do personagem e mostrar a imagem , o nome e texto grande do personagem que está selecionado.
     OBJETIVO 1 - Quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo.
         PASSO 1 - Pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles;
         PASSO 2 - Adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse.
         PASSO 3 - Verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele;
         
     OBJETIVO 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, a discrição e o nome do personagem grande.
        PASSO 1 - Pegar o elemento do personagem grande e adicionar as informações nele;
        PASSO 2 - Alterar a imagem do personagem grande;
        PASSO 3 - Alterar o nome do personagem grande;
        PASSO 4 - Alterar a descrição dp personagem grande.
*/

//OBJETIVO 1 - Quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo. 
//PASSO 1 - Pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles;

const personagens = document.querySelectorAll('.personagem');

// PASSO 2 - Adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse;

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth <450) {
            window.scrollTo({top:0, behavior: 'smooth'});
        }


        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado');

        //PASSO 3 - Verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele;

        //OBJETIVO 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, a discrição e o nome do personagem grande.
        
        //PASSO 1 - Pegar o elemento do personagem grande e adicionar as informações nele;

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
       
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
        

    })
})
    







