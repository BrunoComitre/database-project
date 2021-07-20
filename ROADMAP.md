# ROADMAP

Como um projeto que poderá ter continuidade, segue algumas ideias de implementações futuras.

## TO-DO

- Essencial
  - [ ] Existe aplicação TDD outside In, DDD, BDD no Docker
  - [ ] Ver requirements para Docker
  - [ ] Definir ambientes desenvolvimento, qa, staging, production, teste
  - [ ] Documentar
  - [ ] O nome do arquivo no banco de dados e pesquisa junto a Data/hora modificada
  - [ ] Armazene/exiba estatísticas do arquivo carregado
  - [ ] Uploads subsequentes
  - [ ] Adicionar extração via PDF
  - [ ] Adicionar movimento via drag and drop
  - [ ] Armazenamento de imagens

***

## Confira 8 boas práticas do MongoDB!

Retirado de: [MongoDB: o que é e como usar o banco de dados NoSQL?](https://blog.betrybe.com/dados/mongodb-tudo-sobre/)

### 1 - Use compressão e otimize recursos
O MongoDB possui um serviço de compressão robusto implementado no seu motor de armazenamento WiredTiger que encurta nomes, mas se você quiser melhorar ainda mais a performance, evite campos com nomes grandes.

Outra boa prática para otimização de recursos é separar o armazenamento, a maior parte do acesso aos dados terá um desempenho melhor em discos de acesso aleatório como SSDs porém, o Mongo armazena os ‘logs’ de forma sequencial podendo estes serem armazenados em discos tradicionais como RAID.

### 2 - Execute um único MongoDB por servidor
Aqui é preciso deixar expícito que não estamos falando sobre clusterização ou sharding como já foi falado nesse artigo. O que estamos falando aqui é da execução do mesmo processo mongod executado lado a lado no mesmo servidor.

Isso é considerado uma má prática, pois haverá um tipo de ‘concorrência’ pelos recursos do servidor resultando em uma perda geral de desempenho.

### 3 - Armazene os dados do registro em um único documento
Uma das fraquezas do MongoDB é a inconsistência dos dados. Se eles estiverem espalhados em diferentes documentos, o risco de isso acontecer aumenta.

Além disso, as buscas tem uma performance muito melhor quando rodam em um único documento.

### 4 - Evite documentos grandes
Apesar do MongoDB possuir uma boa compressão para gerenciamento de arquivos binários, esse tipo de armazenamento deve ser sempre evitado. Um dos motivos é justamente a limitação do tamanho de cada documento para 16 MB. A boa notícia é que documentos ocupam muito menos espaço que linhas e dificilmente uma linha chega a este tamanho.

### 5 - Evite informações desnecessárias: índices, nomes, etc.
Existem vários problemas em utilizar informações desnecessárias em um banco de dados, desde perda de performance até complexidade de manutenção. Geralmente, um banco com muitos dados desnecessários é resultado de uma má modelagem. Na dúvida, vale rever a regra de negócio.

### 6 - Use covered queries quando possível
Segundo a documentação do MongoDB, uma busca coberta (covered query) pode ser usada quando: ‘Todos os campos da consulta são partes do índice’ e ‘todos os campos na mesma consulta retornam o índice’.

Caso esses requisitos sejam atendidos, usar um índice pode dar um grande ganho de desempenho na busca, visto que o mongo não precisará mais ler estes dados, somente extraí-los do índice, o que é muito mais rápido.

### 7 - Use inserções em massa quando necessário
Bancos NoSQL são otimizados para receberem uma grande quantidade de dados em alta velocidade, portanto, é uma boa prática aproveitar esse benefício.

Deve-se pensar nisso ao criar a regra de inserção de dados da aplicação de modo que esse recurso seja bem aproveitado.

### 8 - Faça backups diários
Fazer backups é sempre importante, e, como o MongoDB lida com muitos dados, acidentes podem causar danos irreparáveis. A vantagem é que, como os documentos são geralmente leves, os backups são rápidos de serem realizados e recuperados, o que faz com que seja uma boa prática fazer backups diariamente.

Devemos sempre medir as necessidades do nosso negócio ao escolher qual tipo de banco de dados usar. O MongoDB veio como uma necessidade para suprir o grande fluxo de informações que veio com a Web 2.0, porém nem sempre é a melhor opção.

Algumas aplicações dependem de relacionamentos específicos que são mais consistentes em bancos SQL, aplicações mais simples ou legadas podem funcionar melhor com bancos tradicionais e uma migração pode se tornar um trabalho dispendioso ou desnecessário.

***
