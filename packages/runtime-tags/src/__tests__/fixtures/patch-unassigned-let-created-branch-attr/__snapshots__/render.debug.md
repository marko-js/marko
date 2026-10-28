# Render `{"show":false,"v":"a"}`

# Update `{"show":true,"v":"b"}`
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
