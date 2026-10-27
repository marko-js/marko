# Render `{"$global":{"name":"a","promise":{"value":"x"}}}`
```html
<main>
  <i>
    loading
  </i>
</main>
```

# Update `{"$global":{"name":"b","promise":{"value":"x"}}}`

# Update
```html
<main>
  <em>
    b x
  </em>
</main>
```
## Change
```
INSERT: main > em::text("b")
INSERT: main > em::text@0 + ::text(" ")
INSERT: main > em::text@1 + ::text("x")
REMOVE: main > i
INSERT: main > em
UPDATE: main > em::text@0 "a" => "b"
```
