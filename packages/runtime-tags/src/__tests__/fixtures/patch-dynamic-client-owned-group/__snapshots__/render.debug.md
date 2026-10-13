# Render `{"label":"one","$global":{"brand":"a","serializedGlobals":["brand"]}}`
```html
<main>
  <em>
    one a
  </em>
  <button>
    +
  </button>
</main>
```

# Update `{"label":"two","$global":{"brand":"b","serializedGlobals":["brand"]}}`
```html
<main>
  <em>
    two b
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text@0 "one" => "two"
UPDATE: main > em::text@4 "a" => "b"
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

# Update `{"label":"three","$global":{"brand":"c","serializedGlobals":["brand"]}}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    three c
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > em
UPDATE: main > em::text@0 "" => "three"
UPDATE: main > em::text@6 "" => "c"
```

# Update `{"label":"four","$global":{"brand":"d","serializedGlobals":["brand"]}}`
```html
<main>
  <em>
    four d
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text@0 "three" => "four"
UPDATE: main > em::text@5 "c" => "d"
```
