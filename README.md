# GartenBilder

You can create a new gallery and then drag and drop images and video.

Then you can share the link with your friends and that's about it.

You can also add a password that will be used to encrypt the data on the kinto server.


## Getting started

### Install

Install the environment and run:

    $ npm install
    $ npm start

The application will be available at http://localhost:3000

With auto-refresh when code changes!

### Test

Run the tests suite with:

    $ npm test

> * Node v4+ is required.
> * A `travis.yml` file is provided to enable tests on TravisCI in one click!


### Publish

In order to publish the application on [Github pages](https://pages.github.com/),
you just need to run:

    $ npm run publish

After a few minutes, the application will be available at http://natim.github.io/Gartenbilder/

If you want to check the content of the `build/` folder before publishing, or
host it somewhere else yourself, just run instead:

    $ npm run build
