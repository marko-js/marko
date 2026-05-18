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
```

# Update
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
```
## Change
```
REMOVE: pre + div
REMOVE: pre::text("\nmounted")
INSERT: pre::text("\nmounted\ndestroyed")
```

# Update
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
```
## Change
```
INSERT: pre + div
REMOVE: pre::text("\nmounted\ndestroyed")
INSERT: pre::text("\nmounted\ndestroyed\nmounted")
```

# Update
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
```
## Change
```
REMOVE: pre + div
REMOVE: pre::text("\nmounted\ndestroyed\nmounted")
INSERT: pre::text("\nmounted\ndestroyed\nmounted\ndestroyed")
```
