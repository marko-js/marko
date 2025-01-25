# Render
```html
<div>
  Hello!
  <button>
    Toggle
  </button>
</div>
```

# Mutations
```
INSERT div
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    Toggle
  </button>
</div>
```

# Mutations
```
INSERT div/#text
REMOVE #text after div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  Hello!
  <button>
    Toggle
  </button>
</div>
```

# Mutations
```
INSERT div/#text
REMOVE #text after div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    Toggle
  </button>
</div>
```

# Mutations
```
INSERT div/#text
REMOVE #text after div/#text
```