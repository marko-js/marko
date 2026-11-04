# Render `{"w":"w","$global":{"flag":"1","mark":"x","serializedGlobals":["flag","mark"]}}`
```html
<main>
  <p
    data-w="w"
  />
  <i
    data-z="a1x"
  />
  <button>
    t
  </button>
</main>
```

# Update `{"w":"w","$global":{"flag":"1","mark":"y","serializedGlobals":["flag","mark"]}}`
```html
<main>
  <p
    data-w="w"
  />
  <i
    data-z="a1y"
  />
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: main > i[data-z] "a1x" => "a1y"
```

# Update
```js
assert.equal(document.querySelector("i").dataset.z, text);
```
