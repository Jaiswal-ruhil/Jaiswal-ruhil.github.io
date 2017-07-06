---
layout: post
title:  Cherrypy dispatcher
categories: technology
tags: CherryPy, Python, dispatcher, dynamicRoutes
---

In my experience [Cherrypy][cherrypy] is a very simple to use framework, if you are
building some sort of a demo or may be a very simple website.


But being a working on larger projects which need to deal with complex routing structures
or more advanced protocols. You might have to look at some other much more evolved frameworks
like [Django][django] or much older and more tested [Web2Py][web2py].


But if for a you wanna use the cherrypy dispatcher - here we go:


A simple cherrypy server will look some thing like this:<br/>
Available routes:
* `localhost:8080`
{% highlight python %}
import cherrypy

class Service():
    @cherrypy.expose
    def index(self):
        return 'normal page'

if __name__ == '__main__':
    cherrypy.quickstart(Service())
{% endhighlight %}


Adding any other route / api will be:<br/>
Available routes:
* `localhost:8080`
* `localhost:8080/fn_name`
{% highlight python %}
import cherrypy

# can also be done by inheritance
class Service():
    @cherrypy.expose
    def index(self):
        return 'normal page'

    def fn_name(self):
        return 'additional route'

if __name__ == '__main__':
    cherrypy.quickstart(Service())
{% endhighlight %}


Now comes the Dynamic routing (there are [other ways][officialPage] to do it)<br/>
Adding a dynamic route / api will be:<br/>
Available routes:
* `localhost:8080`
* `localhost:8080/fn_name`
* `localhost:8080/book`
{% highlight python %}
import cherrypy

class Book():
    @cherrypy.expose
    def index(self):
        return 'book page'

class Service():
    def __init__(self):
        this.book = Book()

    @cherrypy.expose
    def index(self):
        return 'normal page'

    def fn_name(self):
        return 'additional route'

if __name__ == '__main__':
    cherrypy.quickstart(Service())
{% endhighlight %}


Another variant might look like:<br/>
Available routes:
* `localhost:8080`
* `localhost:8080/fn_name`
* `localhost:8080/book/[book_name]`
* `localhost:8080/book/[book_name]/page/[page_number]`
{% highlight python %}
import cherrypy

@cherrypy.popargs('book_name')
class Book():
    def __init__(self):
        this.page = Page()

    @cherrypy.expose
    def index(self):
        return 'the sdelected book is %s' % (book_name)

@cherrypy.popargs('page_number')
class Page():
    @cherrypy.expose
    def index(self, book_name, page_number):
        return '%page from book %s' % (page_number, book_name)

class Service():
    def __init__(self):
        this.book = Book()

if __name__ == '__main__':
    cherrypy.quickstart(Service())
{% endhighlight %}



[web2py]: [http://www.web2py.com/]
[django]: [https://www.djangoproject.com/]
[cherrypy]: [http://cherrypy.org/]
[officialPage]: [http://docs.cherrypy.org/en/latest/advanced.html]
