# Render `{"label":"a","title":"x"}`
```html
<em>
  AK
</em>
<b>
  x
</b>
<button
  class="toggle"
>
  toggle
</button>
```

# Update `{"label":"b","title":"y"}`
```html
<em>
  BK
</em>
<b>
  y
</b>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: b::text "x" => "y"
UPDATE: em::text "AK" => "BK"
```

# Update
```js
document.querySelector("button.toggle").click();
```
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
REMOVE: b
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<em>
  BK
</em>
<b>
  y
</b>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
INSERT: em, b
UPDATE: em::text " " => "BK"
UPDATE: b::text " " => "y"
```

# Update `{"label":"c","title":"z"}`
```html
<em>
  CK
</em>
<b>
  z
</b>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: b::text "y" => "z"
UPDATE: em::text "BK" => "CK"
```
