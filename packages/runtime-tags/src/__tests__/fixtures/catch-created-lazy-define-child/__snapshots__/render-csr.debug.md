# Render `{"label":"a"}`
```html
<p>
  ok
</p>
```

# Update `{"error":{},"label":"b"}`
```html
<b>
  SHOWN_x
</b>
```
## Change
```
INSERT: b
REMOVE: b + p
UPDATE: b::text " " => "SHOWN_x"
```

# Update
```html
<b>
  SHOWN_x
</b>
<button>
  b:0
</button>
```
## Change
```
INSERT: b + button
```
