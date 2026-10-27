# Render `{"label":"a"}`
```html
<em>
  AK
</em>
<button
  class="toggle"
>
  toggle
</button>
```

# Update `{"label":"b"}`
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
INSERT: em
UPDATE: em::text " " => "BK"
```

# Update `{"label":"c"}`
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
