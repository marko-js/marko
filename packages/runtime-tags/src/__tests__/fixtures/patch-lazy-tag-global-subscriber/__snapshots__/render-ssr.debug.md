# Render `{"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
```html
<main>
  <button>
    acme:0
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
    acme:1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "acme:0" => "acme:1"
```

# Update `{"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`
```html
<main>
  <button>
    bmce:1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "acme:1" => "bmce:1"
```
