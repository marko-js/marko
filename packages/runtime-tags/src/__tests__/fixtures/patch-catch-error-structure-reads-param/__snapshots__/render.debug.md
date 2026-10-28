# Render `{"label":"a"}`
```html
<p>
  ok
</p>
```

# Update `{"error":{"status":404},"label":"b"}`
```html
<b>
  b
</b>
```
## Change
```
REMOVE: b + p
INSERT: b
```

# Update `{"error":{"status":500},"label":"c"}`
```html
<b>
  c
</b>
```
## Change
```
UPDATE: b::text "b" => "c"
```

# Update `{"label":"d"}`
```html
<b>
  d
</b>
```
## Change
```
UPDATE: b::text "c" => "d"
```
