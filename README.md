# Processo Seletivo Rede D'or - Desafio técnico

### Demo (GIF):
<div align=center>
<img src="https://i.imgur.com/PW0yftO.gif" width="50%" align=center>
</div>

## Requisitos:
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

## Endpoints do Back-end:

### Endereços

```http
GET /addresses/cep/${cep}
```

#### Request:

| Params | Type      | Description              |
| :----- | :-------- | :----------------------- |
| `cep`  | `integer` | **Required**. CEP válido |


#### Response:

```json
{
  "status":200,
  "ok":true,
  "code":"68908-111",
  "state":"AP",
  "city":"Macapá",
  "district":"Jesus de Nazaré",
  "address":"Canal da Manoel Eudóxio Pereira",
  "statusText":"ok"
}
```
## Environment Variables

Para rodar o projeto, você precisa adicionar as seguintes variáveis de ambiente em seu arquivo .env

### Front-end:
`VITE_APP_API_URL = http://localhost:4000` - URL do Servidor.

### Back-end
`PORT = number` - Definir em qual porta irá rodar o servidor. Padrão: 4000.

## Rodar localmente

Clone the project

```bash
  git clone https://github.com/lemoscaio/desafio-tecnico-rede-dor.git
```

Go to the project directory

```bash
  cd desafio-tecnico-rede-dor/back-end
  ou
  cd desafio-tecnico-rede-dor/front-end
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
  ou 
  npm run dev
```

## Feito com

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)


## Autores

-   [@lemoscaio](https://www.github.com/lemoscaio) 🪐

