# mand-mobile-template

> A full-featured Webpack setup with Mand Mobile and also with hot-reload, lint-on-save, unit testing, css extraction.

## Usage

This is a [Mand Mobile](https://github.com/didi/mand-mobile) project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init mand-mobile/mand-mobile-template my-project
$ cd my-project
$ npm install
$ npm run dev
```

The development server will run on port 8080 by default. If that port is already in use on your machine, the next free port will be used.

## Scripts

[For this template](http://vuejs-templates.github.io/webpack): common questions specific to this template are answered and each part is described in greater detail

- `npm run dev`: first-in-class development experience.

- `npm run build`: Production ready build.

- `npm run unit`: Unit tests run in [JSDOM](https://github.com/tmpvar/jsdom) with [Jest](https://facebook.github.io/jest/), or in PhantomJS with Karma + Mocha + karma-webpack.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
    
## Custom Theme
We have already integrated configuration of custom theme within the project. You can enable it in two steps:

- At initialization，Answer `Y` to question `Need customize theme?` 

- Edit `src/styles/theme.styl` during development

Detailed configuration of custom theme can refer to [Custom Theme](https://didi.github.io/mand-mobile/#/docs/theme)


