---
layout: post
title:  React + ES6 + Material-UI, with webpack
date:   2017-06-30 22:44:00 +0530
categories: post development
tags: react, webpack, development, configuration
---

One of the issues i faced when working on react was that the browser did not support the syntax
thus for some cases i had to migrate to a more browser friendly version

Comes in Webpack, taking away the need to migrate code to support various versions of various javascript libraries

`React + ES6 + Material-UI`

A typical `package.json` dependencies for me looks like:
{% highlight json %}
{
    ...
    "devDependencies": {
        "babel-core": "^6.25.0",
        "babel-eslint": "^7.2.3",
        "babel-loader": "^7.1.1",
        "babel-preset-es2015": "^6.24.1",
        "babel-preset-react": "^6.24.1",
        "babel-preset-stage-0": "^6.24.1",
        "eslint": "^4.1.1",
        "eslint-loader": "^1.8.0",
        "eslint-plugin-react": "^7.1.0",
        "webpack": "^3.0.0"
    },
    "dependencies": {
        "material-ui": "^0.18.5",
        "react": "^15.6.1",
        "react-dom": "^15.6.1",
        "react-tap-event-plugin": "^2.0.1"
    }
}
{% endhighlight %}


The `webpack.config.js` I use looks like:
{% highlight javascript %}
module.exports = {
    ....
    'module': {
        'loaders': [
        {
            'exclude': /node_modules/,
            'loader': ['babel-loader'],
            'test': /\.(js|jsx)$/
        }]
    }
}
{% endhighlight %}


finally the `.babelrc`
{% highlight json %}
{
    "presets": [
        "es2015", "react", "stage-0"
    ]
}
{% endhighlight %}


The Combination of these enable me to work with development

Now fire up the webpack start your server and look at those pages you built
