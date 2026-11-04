# Render `{"$global":{"brand":"a","flag":"1","mark":"x","serializedGlobals":["brand","flag","mark"]}}`
```html
<main>
  <p>
    a1x
  </p>
  <button>
    0
  </button>
</main>
```

# Update `{"$global":{"brand":"b","flag":"2","mark":"x","serializedGlobals":["brand","flag","mark"]}}`
```html
<main>
  <p>
    b2x
  </p>
  <button>
    0
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "a1x" => "b2x"
```

# Update `{"$global":{"brand":"b","flag":"2","mark":"y","serializedGlobals":["brand","flag","mark"]}}`
```html
<main>
  <p>
    b2y
  </p>
  <button>
    0
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "b2x" => "b2y"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    b2y
  </p>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
```

# Update `{"$global":{"brand":"c","flag":"3","mark":"z","serializedGlobals":["brand","flag","mark"]}}`
```html
<main>
  <p>
    c3z
  </p>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "b2y" => "c3z"
```
