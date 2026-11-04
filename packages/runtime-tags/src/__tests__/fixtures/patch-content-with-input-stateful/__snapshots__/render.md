# Render `{"open":true,"note":"a"}`
```html
<em>
  1:a
</em>
<button>
  +
</button>
```

# Update `{"open":true,"note":"b"}`
```html
<em>
  1:b
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em::text@2 "a" => "b"
```
