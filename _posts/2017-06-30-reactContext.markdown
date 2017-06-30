---
layout: post
title:  "React Context"
date:   2017-06-30 23:25:10 +0530
created:   2017-06-27 14:35:10 +0530
categories: post react
tags: react, context, PropTypes, Parent-Child, AnyComponent-AnyComponent
---

I perceive context as a black board.


the steps i follow:
step 1: Let the layout or root decide all the context that will be used (since the children
    can take time to spawn thus the page con throw issues id an context property is set required)

`Root.jsx` or the first spawn child (you can use any but some times to create a DOM the browser takes time )
{% highlight javascript %}
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Child from './child.jsx';

export class TaskSubscriber {

    actions = {}

    setlistner (listner) {
        this.listner = listner
        // to ensure that the elements subscribed buy others are in play
        listner.forceUpdate()
    }

    subscribe (objectList) {
        for (const {task, label} of objectList) {
            this.actions[tag] = reactComponent
        }
        this.listner.forceUpdate()
    }

    unsubscribe (tag) {
        Reflect.deleteProperty(this.taskarray, tag)
    }
}

const subscriber = new TaskSubscriber()

class Root extends Component {
    ...
    static childContextTypes = {
        'subscriberOne': PropTypes.object.isRequired
    }

    getChildContext () {
        return {'subscriberOne': subscriber}
    }

    componentDidMount () {
        subscriber.subscribe([{task, label}, ...])
    }
    ...
}
{% endhighlight %}


`child.jsx`
{% highlight javascript %}

class Child extends Component {

    static contextTypes = {
        'taskbarActions': PropTypes.object.isRequired
    }

    state = {
        'taskbarExpand': false
    }

    componentDidMount () {
        const {taskbarActions} = this.context
        taskbarActions.setlistner(this)
    }

    render = () => <div>
        {...}
    </div>
}
{% endhighlight %}


Now use the communication channel the way you want

I implemented a generic layout which uses context to register the various tasks ( icons/ functions )
for a taskbar and a status bar
