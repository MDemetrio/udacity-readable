This project is my submission for Udacity's React & Redux course. Readable is a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

Some of the main packages used in this project besides react, redux, react-redux and react-router include:

* [muicss, used to give material ui style to components](https://github.com/muicss/mui)
* [react-icons, used to easily include font-icons on components](https://github.com/gorangajic/react-icons)
* [redux-thunk, redux middleware used to write api calls action creators](https://github.com/gaearon/redux-thunk)
* [styled-components, used for declarative isolated component styling](https://github.com/styled-components/styled-components)
* [tiny-slider-react, used on the header to show categories on a slider](https://github.com/jechav/tiny-slider-react)

### [You can check the Demo on heroku](https://mdemetrio-readable.herokuapp.com/)

### Or you can run locally on your machine:

Clone the project or download as .zip:

``` git clone https://github.com/MDemetrio/udacity-readable.git ```

This project dependencies are managed by npm that is included in [node.js](https://nodejs.org/en/).

Once npm is installed in your machine, cd into the project directory and:

Run ``` cd frontend ``` to enter the react project folder

Run ``` npm install ``` to install project dependencies, then

Run ``` npm start ``` to start the local dev server.

# Readable API Server
You will also need to follow the instructions below to start the node server that the react webapp interact with:

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`

## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).
