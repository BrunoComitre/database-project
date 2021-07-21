# Arquitetura

Índice
- [Arquitetura](#arquitetura)
  - [`.vscode/`](#vscode)
  - [`mongodb/` - Pasta das Aplicações](#mongodb---pasta-das-aplicações)
  - [`scripts/` - Arquivos executáveis](#scripts---arquivos-executáveis)
  - [`START GUIDE`](#start-guide)
  - [`Deploy com Docker`](#deploy-com-docker)
  - [Extra](#extra)
    - [Por que `MongoDB` e não banco de dados"x"?](#por-que-mongodb-e-não-banco-de-dados-x)
    - [Migrations/criação de banco de dados](#migrationscriação-de-banco-de-dados)

&nbsp;

***

## `.vscode/`

Certifique-se de seguir as mesmas diretrizes especificadas em [`settings.json`](.vscode/settings.json).

Todos os arquivos de configuração existem na pasta [`.vscode`](.vscode/) e **deve ser rastreado pelo git**.

   - [`launch.json`](.vscode/launch.json) (SE NECESSÁRIO). É onde todos os scripts de linha de comando pré-configurados estão como a execução de um debugar o ambiente de desenvolvimento;
   - [`settings.json`](.vscode/settings.json) é responsável pelas configurações do editor, como comprimento de linha, regras e formatar automaticamente ao salvar.

***

## `mongodb/` - Pasta das Aplicações

Armazena todos os arquivos necessários (e gerados) para gerar compilações para a plataforma Docker.

***

## `scripts/` - Arquivos executáveis

`scripts/` tem alguns scripts utilitários, como uma maneira fácil de executar `tests` dentro e `run-tests.sh` para executar todos os testes de uma vez.

```shell
Necessário Implementação
```

***

## START GUIDE

Criar Rede Docker: ``` $ docker network create mongodb-network ```

Construir Imagem: ``` $ docker-compose build ```

Rodar Container: ``` $ docker-compose up ``` ou  ``` $ docker-compose up -d ```, para modo detached.

O aplicativo estará disponível no ``` localhost//127.0.0.1 ``` em seu navegador.

Parar Container: ``` $ docker-compose stop ```

Em seguida, crie o arquivo .env (ou renomeie e modifique .env) na raiz do projeto e defina as variáveis de ambiente para o aplicativo:

***

## Deploy com Docker

Você deve ter as ferramentas docker e docker-compose instaladas para trabalhar com o material desta seção. Primeiro, crie o arquivo .env como na seção Começo rápido ou modifique o exemplo .env MONGO_HOST deve ser especificado como db ou docker-compose.yml modificado. Depois é só executar:

``` docker-compose up -d ```

O aplicativo estará disponível no ``` localhost//127.0.0.1 ``` em seu navegador.

***

## Extra

Esses são pontos que não estão diretamente relacionados à estrutura de pastas e cada responsabilidade, mas coisas que também
permeia o conhecimento necessário para compreender totalmente esta arquitetura.

### Por que `MongoDB` e não banco de dados"x"?

[`MongoDB`](https://github.com/mongodb) é um dos poucos bancos de dados realmente fáceis de usar, suporta web e fornece uma quantidade razoável de funcionalidade, como reatividade e consultas complexas.

Usamos [MongoDB](https://docs.mongodb.com/manual/installation/) para consultas de banco de dados, para instalar.

Depois de instalar o MongoDB, crie um banco de dados;

TODO: Adicionar Shell se existir
```shell
➜  Adicionar Shell se existir
```

***

### Migrations/criação de banco de dados

TODO: Estudar o que é o migrations, descobrindo uma forma mais útil, implementar na pasta scripts

```shell
➜  Adicionar Shell se existir
```

***
