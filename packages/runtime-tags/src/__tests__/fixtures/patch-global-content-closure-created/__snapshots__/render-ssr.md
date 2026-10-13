# Render `{"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
```html
<button
  class="a"
>
  s
</button>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="a"
>
  s
</button>
<em>
  acme
</em>
<button
  class="b"
>
  +
</button>
```
## Change
```
INSERT: .a + .b
INSERT: .a + em
UPDATE: em::text " " => "acme"
```

# Update `{"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`
```html
<button
  class="a"
>
  s
</button>
<em>
  bmce
</em>
<button
  class="b"
>
  +
</button>
```
## Change
```
UPDATE: em::text "acme" => "bmce"
```
