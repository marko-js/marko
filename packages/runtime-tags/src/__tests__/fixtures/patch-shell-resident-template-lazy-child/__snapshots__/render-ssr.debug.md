# Render `{"which":true,"label":"a"}`
```html
<b>
  a
</b>
<button>
  toggle
</button>
```

# Update `{"which":false,"label":"b"}`
```html
<i>
  b
</i>
<button>
  b:0
</button>
<button>
  toggle
</button>
```
## Change
```
INSERT: i, button
REMOVE: button:nth-of-type(1) + b
UPDATE: i::text " " => "b"
UPDATE: button:nth-of-type(1)::text@0 "" => "b"
UPDATE: button:nth-of-type(1)::text@2 "" => "0"
```
