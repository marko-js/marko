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
INSERT: main > b
REMOVE: main > b + em
UPDATE: main > b::text " " => "boom"
```

# Update `{"show":true,"message":"back"}`

# Update `{"show":false}`
```html
<main />
```
## Change
```
REMOVE: main > b
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
