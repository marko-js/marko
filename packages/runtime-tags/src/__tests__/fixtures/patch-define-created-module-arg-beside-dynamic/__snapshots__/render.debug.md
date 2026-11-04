# Render `{"show":false,"open":true,"label":"a"}`
```html
<em>
  a!
</em>
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
<em>
  b!
</em>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
INSERT: em
UPDATE: em:nth-of-type(2)::text "a!" => "b!"
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
REMOVE: em + em
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
