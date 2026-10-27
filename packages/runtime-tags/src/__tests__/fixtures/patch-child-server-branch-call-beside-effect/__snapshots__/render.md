# Render `{"label":"a","show":true}`
```html
<em>
  a!
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
## Console
```
LOG "label" "a"
```

# Update `{"label":"b","show":true}`
```html
<em>
  b!
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
UPDATE: em::text "a!" => "b!"
UPDATE: b::text "a" => "b"
```
## Console
```
LOG "label" "b"
```
