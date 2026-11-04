# Render `{"$global":{"flag":"!","serializedGlobals":["flag"]}}`
```html
<main>
  <p>
    0!
  </p>
  <button>
    +
  </button>
</main>
```

# Update `{"$global":{"flag":"?","serializedGlobals":["flag"]}}`
```html
<main>
  <p>
    0?
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "0!" => "0?"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    1?
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "0?" => "1?"
```

# Update `{"$global":{"flag":"#","serializedGlobals":["flag"]}}`
```html
<main>
  <p>
    1#
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "1?" => "1#"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    2#
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "1#" => "2#"
```
