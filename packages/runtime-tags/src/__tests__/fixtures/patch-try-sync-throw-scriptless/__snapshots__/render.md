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
```

# Update `{"message":"back"}`
```html
<main>
  <em>
    back
  </em>
</main>
```
## Change
```
INSERT: main > em
REMOVE: main > em + b
UPDATE: main > em::text "" => "back"
```
