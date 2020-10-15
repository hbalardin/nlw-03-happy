<!-- título -->
<h1 style="display: flex; align-items: center; justify-content: center">
  <img alt="Happy" title="Happy" src="./github/icon.svg" style="margin-right: 12px;"/>
  Happy
</h1>

<!-- descrição -->
<h2 align="center">
  Leve felicidade para o mundo. <br>
  Visite orfanatos e mude o dia de muitas crianças.
</h2>

---

<!-- banner -->
<h1 align="center">
  <img alt="landing-page" title="landing-page" src="./github/landing.svg">
</h1>

<!-- status -->
<h3 align="center"><b>Status: Em andamento 👷</b></h3>

<!-- badges -->
<p align="center">
  <img src="https://img.shields.io/github/languages/count/hbalardin/nlw-03-happy?color=FBD666">
  <img src="https://img.shields.io/github/repo-size/hbalardin/nlw-03-happy?color=37AFCB"/>
  <a href="https://www.linkedin.com/in/hbalardin/">
    <img src="https://img.shields.io/badge/made%20by-Henrique%20Balardin-FBD666">
  </a>
  <img src="https://img.shields.io/github/last-commit/hbalardin/nlw-03-happy?color=37AFCB"/>
  <img alt="GitHub license" src="https://img.shields.io/github/license/hbalardin/nlw-03-happy?color=FBD666">
</p>

---

<!-- index -->
<p align="center">
  <a href="#-sobre">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-executando-o-projeto">Executando o projeto</a> •
  <a href="#-licença">Licença</a> •
  <a href="#-versões-do-readme">Versões do README</a>
</p>

---

## 📄 Sobre

O objetivo do **Happy** é tornar as visitas a orfanatos mais acessíveis, proporcionando uma experiência única, tanto para o visitante tanto para as crianças.

Este projeto foi desenvolvido durante a terceira edição da **NLW (Next Level Week)**. 

A **NLW** é um evento online de uma semana,  disponibilizado pela **RocketSeat**, focado em por a mão na massa. O conteúdo fica disponível apenas durante o evento.

---

## 🔝 Funcionalidades

- Cadastrar um novo orfanato.
- Listar os orfanatos próximos de sua região.
- Criar rota até um orfanato via Google Maps.

---

## 🔨 Tecnologias

Estas são as principais tecnologias utilizadas na construção do projeto:

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

---

## 🚀 Executando o projeto

Antes de qualquer coisa, você precisa ter  o [Git](https://git-scm.com), o [Yarn](https://yarnpkg.com/) e o [Node.js](https://nodejs.org/en/) instalado na sua máquina. Feito isso, você pode prosseguir.

### 📂 Instalando dependências

```bash
# Clone este repositório:
$ git clone https://github.com/hbalardin/nlw-03-happy

# Acesse à pasta do projeto:
cd nlw-03-happy

# Vá à pasta backend:
cd backend

# Instale as depêndencias:
yarn

# Vá à pasta web:
cd ../web

# Instale as depêndencias:
yarn

# Vá à pasta mobile:
cd ../mobile

# Instale as depêndencias:
yarn

# Volte à pasta do projeto:
cd ..
```

---

### 💾 Rodando o servidor (back-end)

Antes de rodar o servidor pela primeira vez, você precisa criar o banco de dados.

```bash
# Vá à pasta backend:
cd backend

# Crie o banco de dados:
yarn typeorm migration:run

# Execute o backend em modo de desenvolvimento:
yarn dev
```

---

### 💻 Rodando a aplicação web (front-end)

Com o servidor rodando, abra um novo terminal e entre na pasta do projeto.

```bash
# Vá à pasta web:
cd web

# Execute o site em modo de desenvolvimento:
yarn start
```
Caso a página não abrir automaticamente, acesse: http://localhost:3000

---

## 📋 Licença

Esse repositório está sobe a licença [MIT](https://github.com/hbalardin/nlw-03-happy/blob/master/LICENSE.md).

---

## 🚀 Entre em contato!
Desenvolvido por [Henrique Balardin](https://www.linkedin.com/in/hbalardin).

---

## 🚩 Versões do README

- [Português 🇧🇷](https://github.com/hbalardin/nlw-03-happy/blob/master/README.md) | [Inglês 🇺🇸 (soon)](https://github.com/hbalardin/nlw-03-happy/blob/master/README-en.md)
