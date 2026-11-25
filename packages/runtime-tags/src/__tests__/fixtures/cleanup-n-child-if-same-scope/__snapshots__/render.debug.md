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
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<pre>
  
mounted
destroyed
</pre>
```
## Change
```
REMOVE: div
REMOVE: p
REMOVE: span
REMOVE: pre::text("\nmounted")
INSERT: pre::text("\nmounted\ndestroyed")
```

# Update
```js
document.querySelector("button").click();
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
```
## Change
```
REMOVE: pre::text("\nmounted\ndestroyed")
INSERT: pre::text("\nmounted\ndestroyed\nmounted")
INSERT: div, span, p
```

# Update
```js
document.querySelector("button").click();
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
```
## Change
```
REMOVE: div
REMOVE: p
REMOVE: span
REMOVE: pre::text("\nmounted\ndestroyed\nmounted")
INSERT: pre::text("\nmounted\ndestroyed\nmounted\ndestroyed")
```
