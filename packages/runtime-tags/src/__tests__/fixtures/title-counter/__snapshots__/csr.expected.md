# Render
```html
<button>
  +
</button>
<div>
  Count is 0
</div>
```

# Mutations
```
INSERT button, div
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  +
</button>
<div>
  Count is 1
</div>
```

# Mutations
```
REMOVE #text in div
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  +
</button>
<div>
  Count is 2
</div>
```

# Mutations
```
REMOVE #text in div
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  +
</button>
<div>
  Count is 3
</div>
```

# Mutations
```
REMOVE #text in div
INSERT div/#text
```