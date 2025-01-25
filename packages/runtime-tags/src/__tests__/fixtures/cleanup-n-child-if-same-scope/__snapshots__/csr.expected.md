# Render
```html
<button>
  Toggle
</button>
<pre>
  
mounted
</pre>
<div>
  a
</div>
<span>
  b
</span>
<p>
  c
</p>
<!---->
```

# Mutations
```
INSERT button, pre, div, span, p, #comment
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
REMOVE #text in pre
INSERT pre/#text
REMOVE div after #text
REMOVE span after #text
REMOVE p after #text
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
  a
</div>
<span>
  b
</span>
<p>
  c
</p>
<!---->
```

# Mutations
```
INSERT div
INSERT span
INSERT p
REMOVE #text after p
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
REMOVE #text in pre
INSERT pre/#text
REMOVE div after #text
REMOVE span after #text
REMOVE p after #text
```