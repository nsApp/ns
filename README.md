# Natshell

A read it later application.

## Development
1. Install [Homebrew](https://brew.sh/)
2. Install [NodeJS](https://nodejs.org/en/) with homebrew  \
```brew update``` \
```brew install node```
3. Install [nvm](http://dev.topheman.com/install-nvm-with-homebrew-to-use-multiple-versions-of-node-and-iojs-easily/)
4. Install node version v8.9.0 \
```nvm install v8.9.0```
5. Install [Ionic](https://ionicframework.com/docs/intro/installation/)
6. Clone and `cd` into the `ns` repository \
`git clone git@github.com:natshell/ns.git` \
`cd ns`

## Run locally
- ```ionic serve```
- try it out at [localhost:8100](http://localhost:8100/)


### Others

Ionic Framework Docs: [Documents](http://ionicframework.com/docs/)

The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

#### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.
