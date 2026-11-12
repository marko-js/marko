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
<p
  data-log="[acme]"
>
  acme
</p>
```
## Change
```
INSERT: button + p
UPDATE: p::text " " => "acme"
UPDATE: p[data-log] null => "[acme]"
```

# Update `{"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`
```html
<button>
  t
</button>
<p
  data-log="[acme][bmce]"
>
  bmce
</p>
```
## Change
```
UPDATE: p::text "acme" => "bmce"
UPDATE: p[data-log] "[acme]" => "[acme][bmce]"
```
