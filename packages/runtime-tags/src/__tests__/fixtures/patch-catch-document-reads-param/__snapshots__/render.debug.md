# Render `{"error":{},"label":"a"}`
```html
<b>
  SHOWN_one a
</b>
```

# Update `{"error":{},"label":"b"}`
```html
<b>
  SHOWN_one b
</b>
```
## Change
```
UPDATE: b::text@10 "a" => "b"
```

# Update `{"label":"c"}`
```html
<b>
  SHOWN_one c
</b>
```
## Change
```
UPDATE: b::text@10 "b" => "c"
```
