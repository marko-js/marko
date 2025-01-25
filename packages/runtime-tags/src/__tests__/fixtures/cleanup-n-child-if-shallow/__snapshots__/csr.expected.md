# Render
```html
<button>
  Toggle
</button>
<div>
  mounted
</div>
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
INSERT button, div0, div1, span, p, #comment
INSERT div0/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<div>
  destroyed
</div>
<!---->
```

# Mutations
```
INSERT #text
REMOVE #text in div
INSERT div/#text
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
<div>
  mounted
</div>
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
INSERT div1
INSERT span
INSERT p
REMOVE #text after p
REMOVE #text in div0
INSERT div0/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<div>
  destroyed
</div>
<!---->
```

# Mutations
```
INSERT #text
REMOVE #text in div
INSERT div/#text
REMOVE div after #text
REMOVE span after #text
REMOVE p after #text
```