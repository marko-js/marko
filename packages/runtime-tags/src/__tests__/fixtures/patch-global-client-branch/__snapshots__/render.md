# Render `{"name":"n","$global":{"brand":"Marko","serializedGlobals":["brand"]}}`
```html
<main>
  <button>
    t
  </button>
</main>
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
  <p>
    Marko
  </p>
  <b>
    n:Marko
  </b>
</main>
```
## Change
```
INSERT: main > button + :is(p, b)
UPDATE: main > p::text " " => "Marko"
UPDATE: main > b::text " " => "n:Marko"
```
