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
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
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

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Utilizado para testes e exemplos:

* [NZ-ZORRO](https://ng.ant.design/)
* [Angular](https://angular.io/)
* [Node.js](https://nodejs.org/)


<!-- GETTING STARTED -->
## Vamos começar?

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```JS
   const API_KEY = 'ENTER YOUR API';
   ```


<!-- CONTACT -->
## Contato

Lucas Rodrigo Frederico - [LinkedIn](https://www.linkedin.com/in/lucas-rodrigo-frederico-39ab67169/) - lucas.frederico@outlook.com.br


