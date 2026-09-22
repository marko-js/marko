# Render `{"show":false}`
```html
<main />
```

# Update `{"show":true,"message":"ok"}`
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
```

# Update `{"show":true,"message":"x","boom":true}`
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

# Update `{"show":true,"message":"back"}`
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

# Update `{"show":false}`
```html
<main />
```
## Change
```
REMOVE: main > em
```

# Update `{"show":true,"message":"again"}`
```html
<main>
  <em>
    again
  </em>
</main>
```
## Change
```
INSERT: main > em
```
