Raptor Templates vs Dust
========================

The philosophy for Raptor Templates is the following:

* Syntax should not be cryptic
* Stay as close to JavaScript for better performance and easier learning
    - JavaScript expressions throughout (no new expression language)
    - Utilized closures for scoped variables and data
* Stay as close to HTML
* The templating language should not be restrictive
    - Whether to go "less logic" or "more logic" is up to the developer
* High performance based on the following criteria:
    - Fast and lightweight runtime
    - Small compiled JavaScript output
* Must support asynchronous rendering
    - Allow additional data to be asynchronously loaded after rendering begins
* Must support streaming
    - Stream out bytes as they are generated
* Modular and extensible architecture
    - Support custom tags
    - Provide ability to generate custom JavaScript at compile-time
* Embrace Node.js and npm

# Data Passing

Dust allows data to be passed to template as a context object that supports lookup by simple names or complex paths. 

# Syntax

## Dynamic Text

### Dust

* Simple key lookup:
```
{name}
```


Dust supports the following syntax for :
```html
Hello {name}!
```

In comparison, Raptor Templates uses the following syntax for expressions:
```html
Hello $name
```

Alternatively:
```html
Hello ${name.toUpperCase()}
```


Raptor Templates is an HTML-based templating language that understands the HTML structure of a template. This allows Raptor Templates to recognize templating directives applied as both HTML attributes and HTML tags. Dust, however, is a text-based templating language that does not understand the HTML structure of the document. In most cases, an HTML-based templating language allows for less code and less obtrusive code as shown in the following sample code:

## Looping and Conditionals

### Raptor Templates

```html
<ul c:if="notEmpty(data.colors)">
    <li class="color" c:for="color in data.colors">
        ${color}
    </li>
</ul>
<div c:else>
    No colors!
</div>
```

### Dust

```html
{?colors} 
<ul>
    {#colors}
    <li class="color">
        {.}
    </li>
    {/colors}
</ul>
{/colors}

{^colors}
<div>
    No colors!
</div>
{/colors}
```

## Expressions
Raptor Templates allows JavaScript expressions wherever expressions are allowed.


# Whitespace

# Custom Tags

Raptor Templates allows you to extend the 



has a very different syntax from Dust