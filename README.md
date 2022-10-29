# Processo Seletivo Rede D'or - Desafio técnico

<img src="https://i.imgur.com/PW0yftO.gif" width="50%" align="center">

### Requisitos:
* Front-end
  * Criação de um app em React com um campo de texto "CEP" e um botão ENVIAR.
  * O botão "Enviar" deve submeter os dados para consulta ao back-end.
  * Ao receber o resultado, apresentar na tela o endereço do CEP informado, formatado de
forma clara para a leitura do usuário.

* Back-end
  * Criar um back-end em Node.js.
  * Ao receber a requisição, o sistema deve buscar o endereço do CEP informado através da API https://ws.apicep.com/cep.json?code=XXX, onde XXX é o cep.
  
* Observações:
  * Se preocupe com detalhes do front-end como validação do campo, máscara, etc
  * Se preocupe em dar as mensagens corretas de acordo com cada código HTTP (200, 400,
404, 500)
  * Seja criativo e fique a vontade para incluir outros componentes que achar interessante.