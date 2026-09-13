# Render `{"$global":{"brand":"a","serializedGlobals":["brand"]}}`
```html
<main>
  <em>
    a
  </em>
  <button>
    +
  </button>
</main>
```

# Update `{"$global":{"brand":"b","serializedGlobals":["brand"]}}`
```html
<main>
  <em>
    b
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > em
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    b
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > em
UPDATE: main > em::text " " => "b"
```

# Update `{"$global":{"brand":"c","serializedGlobals":["brand"]}}`
```html
<main>
  <em>
    c
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "b" => "c"
```
