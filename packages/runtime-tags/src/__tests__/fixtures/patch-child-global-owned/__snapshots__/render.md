# Render `{"$global":{"flag":"on","serializedGlobals":["flag"]}}`
```html
<main>
  <p>
    0 on
  </p>
  <button>
    +
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
    1 on
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@0 "0" => "1"
```

# Update `{"$global":{"flag":"off","serializedGlobals":["flag"]}}`
```html
<main>
  <p>
    1 off
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@2 "on" => "off"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    2 off
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@0 "1" => "2"
```
