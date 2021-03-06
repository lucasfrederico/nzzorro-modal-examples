<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/zorro-logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Modais com NZ-ZORRO</h3>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Atalhos</summary>
  <ol>
    <li><a href="#sobre-o-projeto">Sobre</a></li>
    <li><a href="#utilizado-para-testes-e-exemplos">Ferramentas</a></li>
    <li><a href="#vamos-começar">Começando</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o projeto

Projeto simples, com objetivo de educação no contexto técnico de criação de modais, utilizando o NzModalService do nosso amigo NZ-ZORRO. Essa forma de criação de modais, garante que ao precisarmos exibir o modal ao usuário, garantimos que após ele for fechado, não irá sobrar informações lá dentro, gerando possíveis bugs, falhas ou complicações mais severas.

Vantagens de criar o modal dessa forma e não da forma tradicional, com o componente <nz-modal>:
* Sem preocupações com bugs em relação à valores antigos em memória
* Velocidade na criação de novos modais
* Organização de código
* Disparar o modal de outros componentes, uma vez exposto através de um service
  
Desvantagens:
* Há relatos e experiências que a utilização dessa forma de instaciação de modais, tem um problema direto com o navegador Internet Explorer (nosso amigo IE). O problema conseguiu ser contornado em algumas situações, mas em projetos que possuem necessidade de rodar no IE, não é aconselhável.

### Utilizado para testes e exemplos:

* [NZ-ZORRO](https://ng.ant.design/)
* [Angular](https://angular.io/)
* [Node.js](https://nodejs.org/)


<!-- GETTING STARTED -->
## Vamos começar?

Nos passos a seguir, está o passo a passo para criar o modal da forma recomendada.

### Etapas

1. [Criar o componente](https://angular.io/tutorial/toh-pt3) do modal
2. [Criar o service](https://angular.io/tutorial/toh-pt4) do modal
3. Adicionar o service na parte de providers do seu **NgModule**
4. Adicionar o componente na parte de **entryComponents** do seu **NgModule**
5. Adicionar o [código de criação do modal](https://github.com/lucasfrederico/nzzorro-modal-examples/blob/main/src/app/pages/welcome/modal-example/modal-example.service.ts#L24), no service
6. Chamar a função do service, do lugar necessário à exibir o modal


<!-- CONTACT -->
## Contato

Lucas Rodrigo Frederico - [LinkedIn](https://www.linkedin.com/in/lucas-rodrigo-frederico-39ab67169/) - lucas.frederico@outlook.com.br


