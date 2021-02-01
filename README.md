# Voices Everywhere

Welcome to the source code for our team, Voices Everywhere, website! Our team is Ayelet Drazen, Baker Sharp, Krishan Nair, and Taylor Lallas.

## Our Project

Wite a description of our project here someday.

## CS147

Write a description of CS147here at some point.

## Team Install and Setup

Start by cloning/downloading this repo.

This project uses `yarn` as a package manager (it's basically the same thing as `npm`). Make sure you have the right yarn version with the command:

```console
yarn --version
```

Which should say `1.22.5` or later. If you have yarn version 2.0 this stuff may not work the same way, I haven't checked. So I'd recommend making sure you're on yarn 1.0 with version `1.22.5` or later. I can also help if you don't have yarn or have the wrong version.

Next, install all the packages needed to run the website using this command:

```console
yarn install
```

Now you can boot up the localhost version of the website with:

```console
yarn start
```

This command will open up a browser window to the localhost website. Most changes are reflected live without having to restart the server or refresh the page.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.