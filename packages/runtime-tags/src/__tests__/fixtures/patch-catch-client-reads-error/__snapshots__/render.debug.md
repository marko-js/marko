# Render
```html
<main>
  <p>
    ok
  </p>
  <p>
    ok
  </p>
</main>
```

# Update `{"error":{}}`
```html
<main>
  <b>
    SHOWN_message1
  </b>
  <button>
    log
  </button>
</main>
```
## Change
```
INSERT: main > :is(b, button)
REMOVE: main > button + p
UPDATE: main > b::text " " => "SHOWN_message1"
REMOVE: main > button + p
```
## Console
```
LOG "SHOWN_code1"
```

# Update
```js
container.querySelector("button").click();
```
## Console
```
LOG "SHOWN_message1"
```

# Update `{"error":{}}`

# Update
```js
container.querySelector("button").click();
```
## Console
```
LOG "SHOWN_message1"
```

# Update
## Console
```
ERROR Error: A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
