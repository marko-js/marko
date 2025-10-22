# Render
```html
<button>
  Toggle
</button>
<div>
  mounted
</div>
<div>
  child
</div>
<!---->
```

# Mutations
```
INSERT button, div0, div1, #comment
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
REMOVE div after #text
REMOVE #text in div
INSERT div/#text
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
  child
</div>
<!---->
```

# Mutations
```
INSERT div1
REMOVE #text after div1
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
REMOVE div after #text
REMOVE #text in div
INSERT div/#text
```