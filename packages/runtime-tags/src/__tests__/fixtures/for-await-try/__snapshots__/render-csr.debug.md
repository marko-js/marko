# Render `{"items":["a","boom","c"]}`
```html
<ul />
```

# Update
```html
<span>
  loading
</span>
```
## Change
```
INSERT: span
REMOVE: span + ul
```

# Update
```html
<ul>
  <li>
    a
  </li>
</ul>
```
## Change
```
INSERT: ul
REMOVE: ul + span
```

# Update
```html
<em>
  boom
</em>
```
## Change
```
INSERT: em
REMOVE: em + ul
UPDATE: em::text " " => "boom"
```
