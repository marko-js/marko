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
<button
  class="b"
>
  o
</button>
```
## Change
```
INSERT: .a + .b
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
<button
  class="b"
>
  o
</button>
<p>
  acme
</p>
```
## Change
```
INSERT: .b + p
UPDATE: p::text " " => "acme"
```

# Update `{"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`
```html
<button
  class="a"
>
  s
</button>
<button
  class="b"
>
  o
</button>
<p>
  bmce
</p>
```
## Change
```
UPDATE: p::text "acme" => "bmce"
```
