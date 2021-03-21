# Voices

![Voices Poster](https://github.com/bakerfugu/voices-everywhere-cs147/raw/main/static/assets/voices-pitch-slide-image.jpg)

Welcome to the source for the Voices project website! Our team is Ayelet Drazen, Baker Sharp, Krishan Nair, and Taylor Lallas.

## Our Project

> If walls could talk, what could they tell you? What about the plazas, the statues, the fountains and the streets? Take yourself back to a place that was brand new to you, and imagine hearing authentic stories from locals everywhere you go. Presenting voices, where you can hear the culture and memories behind every landmark and street corner. Then, bring personal stories to life by adding your voice to your favorite places.

[Check out the site here!](Voices: cultural immersion through personal stories. (ProjectW)

<details>
  <summary>Instrux for Setup and Publishing</summary>
  
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

### Deploy to Github Pages (fast, for quickly showing changes to team)

Deploying to the github pages site is very quick. Make sure the github `url` and `baseUrl` options are uncommented in  `docusaurus.config.js`, and the Stanford options are commented out, so it looks like this:

```javascript
// Url options to deploy to github pages
url: 'https://bakerfugu.github.io',
baseUrl: '/voices-everywhere-cs147/',

// Url options to deploy to stanford myth server
// url: 'http://web.stanford.edu',
// baseUrl: '/class/cs147/projects/ArtsandCulture/Voices/',
```

Then run the deploy command (replacing `bakerfugu` with your github username):

```console
GIT_USER=bakerfugu yarn deploy
```

### Deploy to Stanford myth servers (slow, for publishing stuff when we're asked to)

Deploying to the Stanford myth servers is a bit more complicated. First, we want push a build of the site to the "stanford" branch. To set this up, make sure the `url` and `baseUrl` options in `docusaurus.config.js` are set to the stanford ones, and the github pages options are commented out. It should look like this:

```javascript
// Url options to deploy to github pages
// url: 'https://bakerfugu.github.io',
// baseUrl: '/voices-everywhere-cs147/',

// Url options to deploy to stanford myth server
url: 'http://web.stanford.edu',
baseUrl: '/class/cs147/projects/ArtsandCulture/Voices/',
```

Then run this terminal command (replace `bakerfugu` with your github username):

```console
GIT_USER=bakerfugu DEPLOYMENT_BRANCH=stanford yarn deploy
```

That command will take a moment, so while that's happening open another terminal window and login to the myth server (replace `bakers` with your SUNET):

```console
ssh bakers@myth.stanford.edu
```

Type in your password, then navigate to our team directory on the myth server:

```console
cd /afs/ir/class/cs147/WWW/projects/ArtsandCulture/Voices
```

If you type `ls` now, you should see a bunch of random files from when we built the website last time. Get rid of them (make sure you haven't moved from the directory above when you do this, deleting other people's stuff would be very bad):

```console
rm -r -d -v -f ./*
```

Our team directory should be empty now, so let's download the new build of the website. Make sure the `yarn deploy` from the other terminal window finished without throwing any errors. It's usually worth [checking the stanford branch](https://github.com/bakerfugu/voices-everywhere-cs147/tree/stanford) to see if all the files there are recent.

```console
wget https://github.com/bakerfugu/voices-everywhere-cs147/archive/stanford.zip
```

Once we have the zip downloaded, unzip it:

```console
unzip stanford.zip
```

The zip file makes a directory with all the build stuff in it, but we want all of that at the root level of our project folder, so move all the files inside of it one level up:

```console
mv DIRECTORY_NAME/* .
```

You should be done now. Check http://web.stanford.edu/class/cs147/projects/ArtsandCulture/Voices/ to see if the changes show up!
  
</details>

## Misc

This website is a portion of the final group project for Stanford's CS147 Introduction to Human-Computer Interaction Design course.

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.
