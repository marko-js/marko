# Render `{"a":"A","x":true}`
```html
<button
  class="toggle"
>
  toggle
</button>
<span>
  A
</span>
```

# Update `{"a":"B","x":true}`
```html
<button
  class="toggle"
>
  toggle
</button>
<span>
  B
</span>
```
## Change
```
UPDATE: span::text "A" => "B"
```

# Update
```js
document.querySelector(".toggle").click();
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
REMOVE: .toggle + span
```

# Update `{"a":"C","x":true}`

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<span>
  C
</span>
```
## Change
```
INSERT: .toggle + span
UPDATE: span::text " " => "C"
```
