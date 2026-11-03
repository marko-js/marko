# Render `{"show":true,"open":true,"label":"a"}`
```html
<em>
  AK
</em>
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
UPDATE: em:nth-of-type(1)::text "AK" => "BK"
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

# Update `{"show":true,"open":false,"label":"d"}`
```html
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: em
```
