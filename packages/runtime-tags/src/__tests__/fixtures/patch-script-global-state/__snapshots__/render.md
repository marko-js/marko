# Render `{"$global":{"brand":"a","serializedGlobals":["brand"]}}`
```html
<button
  data-log="[0a]"
>
  0a
</button>
```

# Update `{"$global":{"brand":"b","serializedGlobals":["brand"]}}`
```html
<button
  data-log="[0a][0b]"
>
  0b
</button>
```
## Change
```
UPDATE: button::text "0a" => "0b"
UPDATE: button[data-log] "[0a]" => "[0a][0b]"
```
