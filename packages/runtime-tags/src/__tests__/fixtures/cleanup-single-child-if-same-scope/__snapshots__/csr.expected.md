# Render
```html
<button>
  Toggle
</button>
<pre>
  
mounted
</pre>
<div>
  child
</div>
<!---->
```

# Mutations
```
INSERT button, pre, div, #comment
INSERT pre/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<pre>
  
mounted
destroyed
</pre>
<!---->
```

# Mutations
```
INSERT #text
REMOVE div after #text
REMOVE #text in pre
INSERT pre/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<pre>
  
mounted
destroyed
mounted
</pre>
<div>
  child
</div>
<!---->
```

# Mutations
```
INSERT div
REMOVE #text after div
REMOVE #text in pre
INSERT pre/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<pre>
  
mounted
destroyed
mounted
destroyed
</pre>
<!---->
```

# Mutations
```
INSERT #text
REMOVE div after #text
REMOVE #text in pre
INSERT pre/#text
```