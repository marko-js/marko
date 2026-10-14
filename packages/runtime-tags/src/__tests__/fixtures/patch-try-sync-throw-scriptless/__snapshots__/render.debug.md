# Render `{"message":"ok"}`
```html
<main>
  <em>
    ok
  </em>
</main>
```

# Update `{"message":"x","boom":true}`
```html
<main>
  <b>
    boom
  </b>
</main>
```
## Change
```
UPDATE: em::text "ok" => "x"
INSERT: main > b
REMOVE: main > b + em
UPDATE: main > b::text " " => "boom"
```

# Update `{"message":"back"}`
