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
REMOVE: pre + span
REMOVE: pre + p
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
INSERT: pre + :is(div, span, p)
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
REMOVE: pre + span
REMOVE: pre + p
REMOVE: pre::text("\nmounted\ndestroyed\nmounted")
INSERT: pre::text("\nmounted\ndestroyed\nmounted\ndestroyed")
```
