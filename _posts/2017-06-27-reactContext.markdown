---
layout: post
title:  "React Context (O_O)"
date:   2017-06-27 14:35:10 +0530
categories: react context "communication across elements" es6
---

the example has been tested with the following config(s)

webpack.config.js
{% highlight javascript %}
module.exports = {
    ....

    'module': {
        'loaders': [{
            'exclude': /node_modules/,
            'loader': 'babel-loader',
            'test': /\.js$/
        },
        {
            'exclude': /node_modules/,
            'loader': ['babel-loader', 'eslint-loader'],
            'test': /\.jsx$/
        }]
    }
}
{% endhighlight %}


.babelrc.config.js
{% highlight json %}
{
    "presets": [
        "es2015", "react", "stage-0"
    ]
}
{% endhighlight %}

package.json
{% highlight json %}
{
    ...
    "devDependencies": {
        "babel-core": "^6.24.1",
        "babel-eslint": "^7.2.3",
        "babel-loader": "^7.0.0",
        "babel-preset-es2015": "^6.24.1",
        "babel-preset-react": "^6.24.1",
        "babel-preset-stage-0": "^6.24.1",
        "eslint": "^3.19.0",
        "eslint-loader": "^1.7.1",
        "eslint-plugin-react": "^7.0.1",
        "webpack": "^2.6.0",
    },
    "dependencies": {
        "react": "^15.5.4",
        "react-ace": "^4.3.0",
        "react-dom": "^15.5.4",
    }
}
{% endhighlight %}


file.jsx
{% highlight javascript %}

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// class to hold a function
class Oven {
    subscribe (dish) {
        this.serve = dish
    }
}

const oven = new Oven()

class Parent extends Component {

    static childContextTypes = {
        'sharedObj': PropTypes.object.isRequired
    }

    getChildContext () {
        return {
            'sharedObj': oven
        }
    }

    componentDidMount () {
        oven.subscribe(this.testfn.bind(this))
    }

    testfn () {
        this.setState({})
    }

    render () {
        return <div>
            <Child/>
        </div>
    }
}

class Child extends Component {

    static contextTypes = {
        'sharedObj': PropTypes.object.isRequired
    }

    render = () => <div>
        {this.context.server()}
    </div>
}

{% endhighlight %}

Make sure that the `Parent` has `childContextTypes` and the `Child` has `contextTypes`.
