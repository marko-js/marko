# Render `{"$global":{"user":"a"}}`
```html
<div>
  <i>
    user=a
  </i>
  <b>
    0
  </b>
</div>
<button>
  +
</button>
```

# Update `{"$global":{"user":"b"}}`
```html
<div>
  <i>
    user=b
  </i>
  <b>
    0
  </b>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div > i::text@5 "a" => "b"
```
