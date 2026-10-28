# Render `{"show":false,"v":"a"}`

# Update `{"show":true,"v":"a"}`
```html
<p
  class="a"
>
  t
</p>
```
## Change
```
INSERT: .a
UPDATE: .a[class] null => "a"
```

# Update `{"show":false,"v":"a"}`
## Change
```
REMOVE: p
```

# Update `{"show":true,"v":"a"}`
```html
<p
  class="a"
>
  t
</p>
```
## Change
```
INSERT: .a
UPDATE: .a[class] null => "a"
```
