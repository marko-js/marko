# Render `{"card":true}`
```html
<button
  id="inc"
>
  0
</button>
<div
  class="card"
>
  known hosts: not registered
</div>
```

# Update `click("#inc")`
```html
<button
  id="inc"
>
  1
</button>
<div
  class="card"
>
  known hosts: not registered
</div>
```
## Change
```
UPDATE: #inc::text "0" => "1"
```
