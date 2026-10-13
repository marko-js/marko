# Render `{"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
```html
<main>
  <em>
    acme
  </em>
  <button>
    t
  </button>
</main>
```

# Update `{"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`
```html
<main>
  <em>
    bmce
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "acme" => "bmce"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    t
  </button>
</main>
```
## Change
```
REMOVE: main > em
```

# Update `{"$global":{"brand":"cmce","serializedGlobals":["brand"]}}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    cmce
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > em
UPDATE: main > em::text " " => "cmce"
```
