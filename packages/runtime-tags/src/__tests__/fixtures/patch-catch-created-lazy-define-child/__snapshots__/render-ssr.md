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
<button>
  b:0
</button>
```
## Change
```
INSERT: b, button
REMOVE: button + p
UPDATE: b::text " " => "SHOWN_x"
UPDATE: button::text@0 "" => "b"
UPDATE: button::text@2 "" => "0"
```
