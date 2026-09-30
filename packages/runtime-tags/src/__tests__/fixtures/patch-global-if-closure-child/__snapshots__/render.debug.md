# Render `{"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
```html
<button>
  t
</button>
<em>
  acme
</em>
<b>
  acme
</b>
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
REMOVE: button + b
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
  acme
</em>
<b>
  acme
</b>
```
## Change
```
INSERT: button + :is(em, b)
UPDATE: em::text " " => "acme"
UPDATE: b::text " " => "acme"
```

# Update `{"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`
```html
<button>
  t
</button>
<em>
  bmce
</em>
<b>
  bmce
</b>
```
## Change
```
UPDATE: em::text "acme" => "bmce"
UPDATE: b::text "acme" => "bmce"
```
