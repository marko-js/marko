# Render
```html
<p>
  ok
</p>
```

# Update `{"error":{}}`
```html
<b>
  SHOWN_x
</b>
<span>
  A
</span>
```
## Change
```
INSERT: b
REMOVE: span + p
UPDATE: b::text " " => "SHOWN_x"
INSERT: b + span
```
