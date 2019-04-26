Client-side redux/react production ready boilerplate for 3rd party javascript application/widgets.

## Description
This is my production ready drop in 3rd party javascript application complete with linting, unit tests and coverage reports.

Build your application from the example, change the DOM hook [here](https://github.com/lukeggchapman/clientside-redux-react-boilerplate/blob/master/src/index.jsx#L31) to suite your application/widget and distribute the webpack built minified file. I have avoided any server-side/isomorphic implementation as it is intended for 3rd party javascript applications and or widgets.

Currently example application requires the server-side application from the [redux/react tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html) also available [here](https://github.com/lukeggchapman/voting-server), but you should soon replace that dependency.

### Influences
* Client side application from this redux/react [tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html).
* Added production/development build workflow from this [redux webpack boilerplate](https://github.com/srn/react-webpack-boilerplate).
* Added development environment from [redux-devtools](https://github.com/gaearon/redux-devtools).
* ESLint settings thanks to TABDigital's public [strummer repository](https://github.com/TabDigital/strummer).
* Added unit testing and coverage workflow using npm only and not bulky grunt or gulp files thanks to this [article](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/).

I didn't add travis CI as this was intended for private repositories, and it's too expensive. See my pure JavaScript [toteSystem repository](https://github.com/lukeggchapman/toteSystem) for an example of setting up travis and codeclimate.

## Running
Node v5.2.0 recommended.

* `npm install`
* `npm run dev`

### commands
* `npm run dev` run the webpack-dev-server that rebuilds and hot reloads the app in your browser as you develop.
* `npm run lint` runs es linting on your `src` folder.
* `npm run test` runs linting, folled by a once run through of your unit tests in the `test` directory.
* `npm run test:watch` watches your test specs and your src js/jsx fils and runs the tests as you update them providing visual results feedback in your terminal.
* `npm run coverage` uses istanbul to generate coverage files in the `coverage` directory, open the index.html coresponding to your environment to see a visual representaion of your unit tests current code coverage.
* `npm run dist` first runs tests, then creates the minified file ready for distribution. Excludes from the bulld any code related to the redux-dev-tool.


