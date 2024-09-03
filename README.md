# Pokémon Search App

## Descrição

O Pokémon Search App é uma aplicação simples desenvolvida em Angular que permite aos usuários buscar informações sobre qualquer Pokémon utilizando a PokéAPI. A aplicação exibe os resultados em cards colapsáveis, e os usuários podem visualizar mais detalhes sobre cada Pokémon em uma modal.

## Funcionalidades

- Busca de Pokémon por nome.
- Exibição de resultados em cards com nome, tipo e sprite do Pokémon.
- Exibição de mais detalhes sobre o Pokémon em uma modal.
- Histórico de pesquisas anteriores.
- Mensagem amigável caso nenhuma pesquisa tenha sido feita ainda.

## Tecnologias Utilizadas

- Angular 17
- TypeScript
- SCSS para estilização
- PokéAPI para buscar os dados dos Pokémon

## Requisitos

- Node.js (versão 14 ou superior)
- Angular CLI

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Oconzz/pokemon.git
   cd pokemon

2. Instale as deps: 
npm install

3. Inicie o servidor de desenvolvimento:
ng serve

4. Acesse a aplicação:
   Abra o navegador e acesse http://localhost:4200.

   Rodando os Testes
Para rodar os testes unitários: ng test
Isso iniciará o Karma, o test runner do Angular, e rodará todos os testes implementados no projeto.

Estrutura do Projeto
src/app/components: Contém os componentes da aplicação, incluindo a busca de Pokémon, exibição dos cards e modal de detalhes.
src/app/services: Serviços para fazer requisições HTTP à PokéAPI.
src/assets: (Atualmente não utilizado) Espaço reservado para ícones e outras mídias.
src/styles.scss: Arquivo global de estilos.
Deploy
A aplicação pode ser facilmente publicada em plataformas como Vercel, Netlify ou GitHub Pages. Após o deploy, o link para a aplicação online deve ser adicionado aqui.

Contribuição
Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias ou correções de bugs.



