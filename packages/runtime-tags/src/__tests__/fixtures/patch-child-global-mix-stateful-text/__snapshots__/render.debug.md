# Render `{"$global":{"flag":"1","mark":"x","serializedGlobals":["flag","mark"]}}`
```html
<main>
  <p>
    a1x
  </p>
  <button>
    t
  </button>
</main>
```

# Update `{"$global":{"flag":"1","mark":"y","serializedGlobals":["flag","mark"]}}`
```html
<main>
  <p>
    a1y
  </p>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "a1x" => "a1y"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```
