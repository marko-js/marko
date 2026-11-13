# Render `{"open":true,"label":"a"}`
```html
<button
  class="clear"
>
  clear
</button>
<b>
  held a
</b>
<i>
  guarded a
</i>
```

# Update `{"open":true,"label":"b"}`
```html
<button
  class="clear"
>
  clear
</button>
<b>
  held b
</b>
<i>
  guarded b
</i>
```
## Change
```
UPDATE: i::text@8 "a" => "b"
UPDATE: b::text@5 "a" => "b"
```
