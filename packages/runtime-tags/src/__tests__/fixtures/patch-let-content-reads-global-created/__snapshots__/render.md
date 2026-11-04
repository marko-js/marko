# Render `{"show":false,"$global":{"label":"a","serializedGlobals":{"label":true}}}`

# Update `{"show":true,"$global":{"label":"b","serializedGlobals":{"label":true}}}`
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
INSERT: .clear
INSERT: .clear + b
```

# Update `{"show":true,"$global":{"label":"c","serializedGlobals":{"label":true}}}`
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
