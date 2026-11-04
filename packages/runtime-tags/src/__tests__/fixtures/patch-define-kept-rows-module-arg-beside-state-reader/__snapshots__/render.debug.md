# Render `{"open":true,"label":"a"}`
```html
<em>
  A1M
</em>
<em>
  A2M
</em>
<b>
  a
</b>
<button
  class="toggle"
>
  toggle
</button>
```

# Update `{"open":true,"label":"b"}`
```html
<em>
  B1M
</em>
<em>
  B2M
</em>
<b>
  b
</b>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "A1M" => "B1M"
UPDATE: em:nth-of-type(2)::text "A2M" => "B2M"
UPDATE: b::text "a" => "b"
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<em>
  B1M
</em>
<em>
  B2M
</em>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: em:nth-of-type(2) + b
```

# Update `{"open":true,"label":"c"}`
```html
<em>
  C1M
</em>
<em>
  C2M
</em>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "B1M" => "C1M"
UPDATE: em:nth-of-type(2)::text "B2M" => "C2M"
```
