# Render `{"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
```html
<button>
  t
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
<div
  data-log="ran:acme"
/>
```
## Change
```
INSERT: button + div
UPDATE: div[data-log] null => "ran:acme"
```

# Update `{"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`
```html
<button>
  t
</button>
<div
  data-log="ran:bmce"
/>
```
## Change
```
UPDATE: div[data-log] "ran:acme" => "ran:bmce"
```
