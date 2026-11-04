# Render `{"show":true,"fast":{},"slow":{}}`
```html
<main>
  <div>
    <b>
      f1
    </b>
    <em>
      s1
    </em>
  </div>
  <button>
    x
  </button>
</main>
```

# Update `{"show":true,"fast":{"value":"f2"},"slow":{"value":"s2"}}`
```html
<main>
  <i>
    loading
  </i>
  <button>
    x
  </button>
</main>
```
## Change
```
INSERT: main > i
REMOVE: main > i + div
```

# Update
```js
;
```

# Update `{"show":true,"fast":{"value":"f2"},"slow":{"value":"s2"}}`

# Update
```js
;
```

# Update `{"show":true,"fast":{"value":"f2"},"slow":{"value":"s2"}}`
```html
<main>
  <div>
    <b>
      f2
    </b>
    <em>
      s2
    </em>
  </div>
  <button>
    x
  </button>
</main>
```
## Change
```
INSERT: main > div
REMOVE: main > div + i
```
