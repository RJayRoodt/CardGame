# Card Game

A nice project with a nice description

---
## Requirements

console-based application which will deal and evaluate poker hands for a simplified version of the five-card draw variant. Like the five-card draw variant, the application will have to deal a hand of 5 cards, but unlike the five-card draw variant, no swapping will be allowed.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  https://nodejs.org/en/download/

If the installation was successful, you should be able to run the following command.

    $ node --version
    v20.11.0

    $ npm --version
    10.12.4

## Install

    $ git clone https://github.com/RJayRoodt/CardGame
    $ cd CardGame
    $ npm i

## Simple build for production

    $ npm run build

## Running the project

    $ npm run play
  
# options
  debug: -d TRUE 
  poker variant: -v FIVECARD | SEVENCARD | BADUGI
  shuffle algorithm: -a LODASH

# defaults
  -d FALSE
  -v FIVECARD
  -a LODASH