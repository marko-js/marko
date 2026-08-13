# Render `{"title":"Store"}`
```html
<main>
  <h1>
    Store
  </h1>
  <em>
    v0
  </em>
  <button>
    Next
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"title":"Store!"}`
```html
<main>
  <h1>
    Store!
  </h1>
  <em>
    v0
  </em>
  <button>
    Next
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
```

# Update
```html
<main>
  <h1>
    Store!
  </h1>
  loading
  <button>
    Next
  </button>
</main>
```
## Change
```
INSERT: main > h1 + ::text("loading")
REMOVE: main::text + em
```

# Update
```html
<main>
  <h1>
    Store!
  </h1>
  <em>
    v1
  </em>
  <button>
    Next
  </button>
</main>
```
## Change
```
INSERT: main > h1 + em
REMOVE: main > em + ::text("loading")
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<main>
  <h1>
    Store!
  </h1>
  loading
  <button>
    Next
  </button>
</main>
```
## Change
```
INSERT: main > h1 + ::text("loading")
REMOVE: main::text + em
```

# Update
```html
<main>
  <h1>
    Store!
  </h1>
  <em>
    v2
  </em>
  <button>
    Next
  </button>
</main>
```
## Change
```
INSERT: main > h1 + em
REMOVE: main > em + ::text("loading")
```
