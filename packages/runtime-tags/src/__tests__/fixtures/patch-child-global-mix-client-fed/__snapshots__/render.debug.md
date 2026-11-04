# Render `{"$global":{"flag":"1","mark":"x","serializedGlobals":["flag","mark"]}}`
```html
<main>
  <p>
    01x
  </p>
  <button>
    0
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    11x
  </p>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "01x" => "11x"
UPDATE: main > button::text "0" => "1"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```

# Update `{"$global":{"flag":"1","mark":"y","serializedGlobals":["flag","mark"]}}`
```html
<main>
  <p>
    11y
  </p>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "11x" => "11y"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```

# Update `{"$global":{"flag":"2","mark":"z","serializedGlobals":["flag","mark"]}}`
```html
<main>
  <p>
    12z
  </p>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "11y" => "12z"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```
