# Render `{"show":true,"label":"one","a":{}}`
```html
<main>
  <b>
    a1
  </b>
  <span>
    one
  </span>
</main>
```

# Update `{"show":true,"label":"two","a":{"value":"a2"}}`
```html
<main>
  <i>
    loading
  </i>
</main>
```
## Change
```
UPDATE: #document-fragment > span::text "one" => "two"
INSERT: main > i
REMOVE: main > i + b
REMOVE: main > i + span
```

# Update abandon

# Update `{"show":true,"label":"two","a":{"value":"a2"}}`

# Update `{"show":false,"label":"three"}`
```html
<main>
  <span>
    three
  </span>
</main>
```
## Change
```
INSERT: main > span
REMOVE: main > span + i
```
