# Render `{"$global":{"flag":"1","mark":"x","serializedGlobals":["flag","mark"]}}`
```html
<main>
  <p
    data-z="a1x"
  />
  <button>
    t
  </button>
</main>
```

# Update `{"$global":{"flag":"1","mark":"y","serializedGlobals":["flag","mark"]}}`
```html
<main>
  <p
    data-z="a1y"
  />
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: main > p[data-z] "a1x" => "a1y"
```

# Update
```js
assert.equal(document.querySelector("p").dataset.z, text);
```
