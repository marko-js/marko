# Render `{"a":"A","x":true,"y":false}`
```html
<span>
  A
</span>
<button>
  0
</button>
```

# Update `{"a":"B","x":false,"y":true}`
```html
<span>
  B
</span>
<button>
  0
</button>
```
## Change
```
REMOVE: span
INSERT: span
```

# Update `{"a":"C","x":true,"y":true}`
```html
<span>
  C
</span>
<span>
  C
</span>
<button>
  0
</button>
```
## Change
```
INSERT: span
UPDATE: span:nth-of-type(2)::text "B" => "C"
```
