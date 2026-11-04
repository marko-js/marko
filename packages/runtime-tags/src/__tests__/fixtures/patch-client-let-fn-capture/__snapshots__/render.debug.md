# Render `{"prefix":"old-","label":"a"}`
```html
<p>
  old-a
</p>
```

# Update `{"prefix":"new-","label":"b"}`
```html
<p>
  new-b
</p>
```
## Change
```
UPDATE: p::text "old-a" => "new-b"
```
