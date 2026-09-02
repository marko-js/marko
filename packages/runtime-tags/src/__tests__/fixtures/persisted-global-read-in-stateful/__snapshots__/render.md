# Render `{"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
```html
<button>
  t
</button>
<em>
  acme
</em>
```

# Update `{"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`
```html
<button>
  t
</button>
<em>
  bmce
</em>
```
## Change
```
UPDATE: em::text "acme" => "bmce"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
```
## Change
```
REMOVE: button + em
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
<em>
   
</em>
```
## Change
```
INSERT: button + em
```
