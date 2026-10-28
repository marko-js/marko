# Render `{"id":"u1","items":["x"]}`
```html
<p>
  u1-x
</p>
<button>
  0
</button>
```

# Update `{"id":"u1","items":["x","y"]}`
```html
<p>
  u1-x
</p>
<p>
  u1-y
</p>
<button>
  0
</button>
```
## Change
```
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(2)::text " " => "u1-y"
```

# Update `{"id":"u1","items":["y","z"]}`
```html
<p>
  u1-y
</p>
<p>
  u1-z
</p>
<button>
  0
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "u1-x" => "u1-y"
UPDATE: p:nth-of-type(2)::text "u1-y" => "u1-z"
```
