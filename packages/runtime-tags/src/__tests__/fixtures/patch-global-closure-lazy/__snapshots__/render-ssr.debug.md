# Render `{"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
```html
<main>
  <button>
    0
  </button>
  <i>
    1acme
  </i>
  <i>
    2acme
  </i>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    1
  </button>
  <i>
    1acme
  </i>
  <i>
    2acme
  </i>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
```

# Update `{"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`
```html
<main>
  <button>
    1
  </button>
  <i>
    1bmce
  </i>
  <i>
    2bmce
  </i>
</main>
```
## Change
```
UPDATE: main > i:nth-of-type(1)::text@1 "acme" => "bmce"
UPDATE: main > i:nth-of-type(2)::text@1 "acme" => "bmce"
```
