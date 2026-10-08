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
<p>
  acme!
</p>
```
## Change
```
INSERT: button + p
UPDATE: p::text " " => "acme!"
```

# Update `{"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`
```html
<button>
  t
</button>
<p>
  bmce!
</p>
```
## Change
```
UPDATE: p::text "acme!" => "bmce!"
```
