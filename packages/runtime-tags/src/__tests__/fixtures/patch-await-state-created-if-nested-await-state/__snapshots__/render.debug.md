# Render `{"show":false,"label":"a"}`
```html
<button>
  1
</button>
```

# Update `{"show":true,"label":"b"}`
```html
<button>
  1
</button>
<p>
  1
</p>
<b>
  k
</b>
```
## Change
```
INSERT: button + p
UPDATE: p::text " " => "1"
INSERT: p + b
```
