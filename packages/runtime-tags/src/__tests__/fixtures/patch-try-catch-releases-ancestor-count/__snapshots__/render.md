# Render `{"a":{},"b":{}}`
```html
<main>
  <b>
    a1
  </b>
  <em>
    b1
  </em>
</main>
```

# Update `{"a":{"value":{}},"b":{"value":"b2"}}`
```html
<main>
  <i>
    loading
  </i>
</main>
```
## Change
```
INSERT: main > i
REMOVE: main > i + b
REMOVE: main > i + em
```

# Update
```js
;
```

# Update `{"a":{"value":{}},"b":{"value":"b2"}}`

# Update
```js
;
```

# Update `{"a":{"value":{}},"b":{"value":"b2"}}`
```html
<main>
  <s>
    boom
  </s>
  <em>
    b2
  </em>
</main>
```
## Change
```
INSERT: main > :is(s, em)
REMOVE: main > em + i
```
