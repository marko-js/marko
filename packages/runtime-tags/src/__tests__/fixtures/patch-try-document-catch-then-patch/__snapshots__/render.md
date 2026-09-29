# Render `{"message":"x","boom":true}`
```html
<main>
  <b>
    boom
  </b>
</main>
```

# Update `{"message":"ok"}`
```html
<main>
  <em>
    ok
  </em>
</main>
```
## Change
```
INSERT: main > em
REMOVE: main > em + b
UPDATE: main > em::text "" => "ok"
```

# Update `{"message":"y","boom":true}`
```html
<main>
  <b>
    boom
  </b>
</main>
```
## Change
```
UPDATE: em::text "ok" => "y"
INSERT: main > b
REMOVE: main > b + em
UPDATE: main > b::text " " => "boom"
```
