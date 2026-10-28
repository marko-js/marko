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
  toggle
</button>
```
## Change
```
INSERT: i
REMOVE: i + b
UPDATE: i::text " " => "b"
```

# Update
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
INSERT: i + button
```
