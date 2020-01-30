# Desafio `academia node FICR`

Neste desafio você deverá desenvolver uma api que retorna um currículo dinâmico. Para isso, você deverá comunicar-se com dois serviços para capturar informações. A api do Facebook e a api do Github.

## Especificações do projeto

* Utilizar o [express](https://www.npmjs.com/package/express)

* Utilizar algum pattern para estruturar o projeto

* O projeto deverá ser publicado no github

* Publicar o projeto no [Heroku](https://www.heroku.com/)

* Caso o usuário acesse uma rota que não foi especificada, deverá ser apresentado para ele uma mensagem de com o status 404

## Pontos extras

* Publicar o projeto no [Heroku](https://www.heroku.com/) utilizando dockerfile

* Criar testes utilizando [Jest](https://www.npmjs.com/package/jest)

* Utilizar ferramentas de qualidade de código: [Eslint](https://www.npmjs.com/package/eslint) e [EditorConfig](https://editorconfig.org/)

* Implementar as requisições aos serviços em paralelo, visto que um serviço não depende do outro

* Sinta-se livre para adicionar features ao seu gosto. Exemplo: tradução do conteúdo utilizando flags na requisição, como mostrado abaixo.

````http
  GET  /api/curriculo?lang=en_us
````

## Requisitos técnicos

* O projeto deve conter a seguinte rota:

````http
  GET  /api/curriculo
````

* A rota deve conter a seguinte resposta:

````json
  {
    "nome": "Fulano Silva",
    "data_nascimento": "12/12/1994",
    "endereco": "Rua fulano de tal, 256 - Pe",
    "email": "fulano@gmail.com",
    "genero": "Masculino",
    "bio": "Full Stack developer and Mobile developer",
    "foto": "https://imagem-do-perfil",
    "formacao": [
      {
        "instituicao": "ficr",
        "curso": "ADS",
        "inicio": "12/12/2014",
        "termino": "01/04/2020"
      }
    ],
    "experiencia_profissional": [
      {
        "empresa": "Accenture",
        "funcao": "Engenheiro de Software",
        "atividade": "Desenvolver api de integraçoes com servicos externos",
        "inicio": "12/12/2014",
        "termino": "atual"
      },
      {
        "empresa": "Ficr",
        "funcao": "Engenheiro de Software",
        "atividade": "Desenvolver api de integraçoes com servicos externos",
        "inicio": "12/12/2014",
        "termino": "atual"
      },
      {
        "empresa": "Google",
        "funcao": "Engenheiro de Software",
        "atividade": "Desenvolver api de integraçoes com servicos externos",
        "inicio": "12/12/2014",
        "termino": "atual"
      }
    ],
    "github": {
      "perfil": "https://github.com/fulano",
      "alguns_repositorios": [
        {
          "size": 49,
          "name": "academia-nodejs-ficr",
          "url": "https://api.github.com/repos/mizamelo/academia-nodejs-ficr"
        },
        {
          "size": 37,
          "name": "academia-php",
          "url": "https://api.github.com/repos/mizamelo/academia-php"
        },
        {
          "size": 23,
          "name": "academia-php2",
          "url": "https://api.github.com/repos/mizamelo/academia-php2"
        }
      ]
    }
  }

````

  * Devem ser listados os 3 primeiros repositórios ordenados do maior para o menor pelo  campo 'size'
  
## Pronto para começar o desafio?
* Faça um "fork" desse repositório na sua conta do Github
* Crie uma branch com o seu nome e sobrenome ex: robson-santos
* Após completar o desafio, crie um "pull request" nesse repositório comparando a sua branch com a master
