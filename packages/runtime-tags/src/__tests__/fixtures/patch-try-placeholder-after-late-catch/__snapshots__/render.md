# Render `{"a":{},"x":{},"c":{},"d":{}}`
```html
<main>
  <b>
    1
  </b>
  <p>
    3
  </p>
  <span>
    4
  </span>
</main>
```

# Update `{"a":{"value":{}},"x":{"value":5},"c":{"value":6},"d":{"value":7}}`
```html
<main />
```
## Change
```
REMOVE: main > p
REMOVE: main > span
REMOVE: main > b
```

# Update
```js
;
```

# Update `{"a":{"value":{}},"x":{"value":5},"c":{"value":6},"d":{"value":7}}`
```html
<main>
  <em>
    boom
  </em>
</main>
```
## Change
```
INSERT: main > em
UPDATE: main > em::text " " => "boom"
```

# Update
```js
;
```

# Update `{"a":{"value":{}},"x":{"value":5},"c":{"value":6},"d":{"value":7}}`
```html
<main>
  <em>
    boom
  </em>
  <i>
    loading
  </i>
</main>
```
## Change
```
INSERT: main > em + :is(p, span)
REMOVE: main > em + p
INSERT: main > em + i
REMOVE: main > i + span
```

# Update
```js
;
```

# Update `{"a":{"value":{}},"x":{"value":5},"c":{"value":6},"d":{"value":7}}`
```html
<main>
  <em>
    boom
  </em>
  <span>
    7
  </span>
</main>
```
## Change
```
INSERT: main > em + span
REMOVE: main > span + i
```

# Update
```js
;
```

# Update `{"a":{"value":{}},"x":{"value":5},"c":{"value":6},"d":{"value":7}}`
```html
<main>
  <em>
    boom
  </em>
  <p>
    6
  </p>
  <span>
    7
  </span>
</main>
```
## Change
```
INSERT: main > em + p
```
