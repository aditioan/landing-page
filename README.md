# Angular Landing Page

Just simple landing page with **Angular 5 and [Paper Kit 2](https://www.github.com/CreativeTimOfficial/pk2-angular) template**.


### Installation

This landing page requires [Node.js](https://nodejs.org/) v4+ and [AngularCLI](https://cli.angular.io/) to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd landing-page
$ npm install -d
$ ng serve
```

For production environments...

```sh
$ npm install --production
$ ng build
```

### Plugins

This landing page is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Ng Bootstrap | [https://github.com/ng-bootstrap/ng-bootstrap/blob/master/README.md][PlGa] |


### Development

Want to contribute? Great!

This landing page uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```

License
----

MIT