# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<em>
  a
</em>
<button
  class="toggle"
>
  toggle
</button>
```

# Update `{"label":"b"}`
```html
<button>
  clear
</button>
<em>
  b
</em>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: em::text "a" => "b"
```

# Update
```html
<button>
  clear
</button>
<em>
  b
</em>
<button>
  0
</button>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
INSERT: em + button
```

# Update
```js
d.querySelector(".toggle").click();
```
```html
<button>
  clear
</button>
<em>
  b
</em>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: em + button
```

# Update `{"label":"c"}`
```html
<button>
  clear
</button>
<em>
  c
</em>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: em::text "b" => "c"
```
