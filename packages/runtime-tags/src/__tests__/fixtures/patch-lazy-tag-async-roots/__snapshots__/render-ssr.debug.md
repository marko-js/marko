# Render `{"first":{},"second":{}}`
```html
<main>
  <button>
    a1:0
  </button>
  <button>
    b1:0
  </button>
</main>
```

# Update `{"first":{"value":"a2"},"second":{"value":"b2"}}`
```html
<main>
  <button>
    a2:0
  </button>
  <button>
    b2:0
  </button>
</main>
```
## Change
```
REMOVE: main > button
REMOVE: main > button
INSERT: main > button
INSERT: main > button:nth-of-type(1) + button
```

# Update
```js
document.querySelectorAll("button").forEach((b) => b.click());
```
```html
<main>
  <button>
    a2:1
  </button>
  <button>
    b2:1
  </button>
</main>
```
## Change
```
UPDATE: main > button:nth-of-type(1)::text@3 "0" => "1"
UPDATE: main > button:nth-of-type(2)::text@3 "0" => "1"
```
