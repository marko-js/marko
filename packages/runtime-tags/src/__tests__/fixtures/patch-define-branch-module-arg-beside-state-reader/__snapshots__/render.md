# Render `{"show":true,"open":true,"label":"a"}`
```html
<em>
  AK
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

# Update `{"show":true,"open":true,"label":"b"}`
```html
<em>
  BK
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
UPDATE: em::text "AK" => "BK"
UPDATE: b::text "a" => "b"
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<em>
  BK
</em>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: em + b
```

# Update `{"show":true,"open":true,"label":"c"}`
```html
<em>
  CK
</em>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: em::text "BK" => "CK"
```
