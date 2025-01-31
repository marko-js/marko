# Render
```html
<div>
  <div
    class="by-string"
  >
    firstsecondthird
  </div>
  <button>
    Rotate
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
  <div
    class="by-string"
  >
    secondthirdfirst
  </div>
  <button>
    Rotate
  </button>
</div>
```

# Mutations
```
REMOVE div/div/#text2 before div/div/#text0
INSERT div/div/#text2
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <div
    class="by-string"
  >
    thirdfirstsecond
  </div>
  <button>
    Rotate
  </button>
</div>
```

# Mutations
```
REMOVE div/div/#text2 before div/div/#text0
INSERT div/div/#text2
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <div
    class="by-string"
  >
    firstsecondthird
  </div>
  <button>
    Rotate
  </button>
</div>
```

# Mutations
```
REMOVE div/div/#text2 before div/div/#text0
INSERT div/div/#text2
```