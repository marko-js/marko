# Render
```html
<title>
  Count is 0
</title>
<button>
  +
</button>
<div>
  Count is 0
</div>
```

# Mutations
```
INSERT title, button, div
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<title>
  Count is 1
</title>
<button>
  +
</button>
<div>
  Count is 1
</div>
```

# Mutations
```
REMOVE #text in title
INSERT title/#text
REMOVE #text in div
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<title>
  Count is 2
</title>
<button>
  +
</button>
<div>
  Count is 2
</div>
```

# Mutations
```
REMOVE #text in title
INSERT title/#text
REMOVE #text in div
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<title>
  Count is 3
</title>
<button>
  +
</button>
<div>
  Count is 3
</div>
```

# Mutations
```
REMOVE #text in title
INSERT title/#text
REMOVE #text in div
INSERT div/#text
```