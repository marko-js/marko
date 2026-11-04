# Render `{"label":"a","show":true}`
```html
<em>
  AK
</em>
<em>
  AK
</em>
<button
  class="toggle"
>
  toggle
</button>
```

# Update `{"label":"b","show":true}`
```html
<em>
  BK
</em>
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
UPDATE: em:nth-of-type(2)::text "AK" => "BK"
UPDATE: em:nth-of-type(1)::text "AK" => "BK"
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
REMOVE: em
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<em>
  BK
</em>
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
INSERT: em
UPDATE: em:nth-of-type(1)::text " " => "BK"
```

# Update `{"label":"c","show":true}`
```html
<em>
  CK
</em>
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
UPDATE: em:nth-of-type(2)::text "BK" => "CK"
UPDATE: em:nth-of-type(1)::text "BK" => "CK"
```
