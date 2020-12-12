## Processo de Execução

- Clonar o projeto do github;
- Executar o comando: npm install;
- Executar os comandos descritos em scripts do arquivo package.json;


## Primeiro Passo

[] - Executar o comando: npm init --yes
    (Esse comando serve para iniciar um projeto em node com configurção padrão)

[] - Executar o comando: npm i -D cypress@5.6.0
    (Esse comando serve para instalar o framework do Cypress na versão mais estável 5.6.0)

[] - Executar o comando: npx cypress open
    (Esse comando serve para iniciar o projeto Cypress)

## Segundo Passo

[] - Configurar o arquivo cypress.json;
    (Configurar os dados da aplicação a ser validada e reconhecimento do autocomplete referente ao cypress)

[] - Configurado os comandos de interação com o sistema (URL) definida;

[] - Execução do script desenvolvido;

[] - Comando para executar em headless: npx cypress run

## Terceiro Passo

[] - Restruturar as validações e os comandos para ambranger a cobertura de qualidade;

[] - Como pegar dados usando o invoke, para extrair de um bloco de textos;

[] - Como escrever os dados que deseja em um arquivo;

[] - Como utilizar o backgroundlogin para já está autenticado na aplicação sem precisar realizar o login;

[] - Abstrair o login; (Utilizando no commands.js que são palavras reservadas para serem configuradas e usadas em todos os testes, sem precisar repetir o mesmo código) - Comandos personalizados (Foi configurado no arquivo index.d.ts, como o projeto reconhecer o autocomplete para comandos personalizados)

## Quarto Passo

[] - Instalando as bibliotecas necessárias: cypress-multi-reporters, mocha, mochawesome, mochawesome-merge, mochawesome-report-generator

[] - Configurando o arquivo cypress.json para atender ao relatório a ser gerado;

[] - Criando o arquivo de configuração para o relatório, no reporter-config.json;# semana-agilizei-02
