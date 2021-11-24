# Backend
  - tecnologias
    - nodejs, mysql.

  - instalação
    - instalar o mysql server versão mais atual.
    - instalar o nodejs.

  - configuração
    - Acessando o diretorio pelo terminal executar o seguinte comando: "npm install".
    - Após ser instalado os pacotes de dependencias do projeto.
    - Executar o seguinte comando: "npm start".
    - Estara rodando no ambiente localhost pela porta padrão 3333.
    - Em "connection" coloque os valores do seu ambiente local definido do mysql server.

  - banco de dados
   - Executar os comandos do arquivo "cnab.sql", onde serár criado selecionado o banco e criado as tabelas e valores automatico por esse aqui com comando sql.

  - utilização api
    - Obter todos o "shops" [GET]
      - url: http://localhost:3333/shops

    - Obter todas as "remessas" [GET]
      - url: http://localhost:3333/remessas

    - Criar novas remessas [POST]
     - url: http://localhost:3333/remessas
     - body: dados da remessa "payload"
