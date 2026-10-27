# Render `{"title":"a"}`
```html
<p
  data-label="ready"
>
  a
</p>
```

# Update `{"title":"b"}`
```html
<p
  data-label="ready"
>
  b
</p>
```
## Change
```
UPDATE: p::text "a" => "b"
```
