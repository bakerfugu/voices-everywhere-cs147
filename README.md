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

*If this says anything other than `1.22.5`, ask me about it. This is unlikely to be a problem, but I think it's the most likely thing to go wrong while setting this up assuming y'all have git working.*

Next, install all the packages needed to run the website using this command:

```console
yarn install
```

Now you can boot up the localhost version of the website with:

```console
yarn start
```

This command will open up a browser window to the localhost website. Most changes are reflected live without having to restart the server or refresh the page.

After making any changes, push them up to the repo and let me know so I can deploy them. (Also I will need to add y'all as collaborators to the git repo so let me know the first time before you do this so we don't have to deal with pull requests.)

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.