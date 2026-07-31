# Render `{"title":"First","variant":"a"}`
```html
<div>
  <h1
    title="a"
  >
    First
  </h1>
</div>
```

# Update `{"title":"Second","variant":"b"}`
```html
<div>
  <h1
    title="b"
  >
    Second
  </h1>
</div>
```
## Change
```
UPDATE: div > h1[title] "a" => "b"
UPDATE: div > h1::text "First" => "Second"
```

# Update `{"err":true,"title":"ignored"}`

*patch rejected: falling back to document navigation*
