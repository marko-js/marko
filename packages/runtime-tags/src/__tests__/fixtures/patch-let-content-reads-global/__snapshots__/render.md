# Render `{"$global":{"label":"a","serializedGlobals":{"label":true}}}`
```html
<button
  class="clear"
>
  clear
</button>
<b>
  a
</b>
```

# Update `{"$global":{"label":"b","serializedGlobals":{"label":true}}}`
```html
<button
  class="clear"
>
  clear
</button>
<b>
  b
</b>
```
## Change
```
UPDATE: b::text "a" => "b"
```

# Update `{"$global":{"label":"c","serializedGlobals":{"label":true}}}`
```html
<button
  class="clear"
>
  clear
</button>
<b>
  c
</b>
```
## Change
```
UPDATE: b::text "b" => "c"
```
