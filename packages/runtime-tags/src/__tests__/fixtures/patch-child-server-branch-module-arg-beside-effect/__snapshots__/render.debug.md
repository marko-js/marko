# Render `{"label":"a","show":true}`
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
## Console
```
LOG "label" "a"
```

# Update `{"label":"b","show":true}`
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
## Console
```
LOG "label" "b"
```
