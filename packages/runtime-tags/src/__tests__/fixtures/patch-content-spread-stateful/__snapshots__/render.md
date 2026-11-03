# Render `{"open":true,"note":"a"}`
```html
<div
  open=""
>
  <em>
    a
  </em>
</div>
<button>
  +
</button>
```

# Update `{"open":true,"note":"b"}`
```html
<div
  open=""
>
  <em>
    b
  </em>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div > em::text "a" => "b"
```
