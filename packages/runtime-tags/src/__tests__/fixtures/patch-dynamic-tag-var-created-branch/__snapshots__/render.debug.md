# Render `{"show":false,"which":true,"a":"a"}`
```html
<main />
```

# Update `{"show":true,"which":true,"a":"b"}`
```html
<main>
  <i>
    one
  </i>
  <p>
    b!
  </p>
</main>
```
## Change
```
INSERT: main > :is(i, p)
```

# Update `{"show":true,"which":false,"a":"c"}`
```html
<main>
  <b>
    two
  </b>
  <p>
    c?
  </p>
</main>
```
## Change
```
INSERT: main > b
REMOVE: main > b + i
UPDATE: main > p::text "b!" => "c?"
```

# Update `{"show":false,"which":false,"a":"d"}`
```html
<main />
```
## Change
```
REMOVE: main > b
REMOVE: main > p
```

# Update `{"show":true,"which":false,"a":"e"}`
```html
<main>
  <b>
    two
  </b>
  <p>
    e?
  </p>
</main>
```
## Change
```
INSERT: main > :is(b, p)
```
