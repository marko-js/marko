# Render `{"show":false}`
```html
<main />
```

# Update `{"show":true,"p":{}}`
```html
<main>
  <em>
    a
  </em>
</main>
```
## Change
```
INSERT: main > em
```

# Update `{"show":true,"p":{"value":{}}}`
```html
<main>
  <b>
    boom
  </b>
</main>
```
## Change
```
INSERT: main > i
REMOVE: i + em
INSERT: main > b
REMOVE: main > b + i
UPDATE: main > b::text " " => "boom"
```

# Update `{"show":true,"p":{}}`
## Console
```
ERROR Error: A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
