# Render `{"$global":{"x":1,"serializedGlobals":["x"]}}`

```html
<div>
  <span
    class="hidden"
  >
    1
  </span>
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
  <span>
    1
  </span>
  <button>
    Toggle
  </button>
</div>
```

# Mutations
```
INSERT div/span
REMOVE #text after div/span
INSERT div/#text
REMOVE span after div/#text
UPDATE div/span/#text " " => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <span
    class="hidden"
  >
    1
  </span>
  <button>
    Toggle
  </button>
</div>
```

# Mutations
```
INSERT div/#text
REMOVE span after div/#text
INSERT div/span
REMOVE #text after div/span
UPDATE div/span/#text " " => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <span>
    1
  </span>
  <button>
    Toggle
  </button>
</div>
```

# Mutations
```
INSERT div/span
REMOVE #text after div/span
INSERT div/#text
REMOVE span after div/#text
UPDATE div/span/#text " " => "1"
```