# Render `{"error":{}}`
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

# Update
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
## Change
```
INSERT: main > p
REMOVE: main > p:nth-of-type(1) + b
REMOVE: main > p:nth-of-type(1) + button
UPDATE: main > p:nth-of-type(1)::text " " => "ok"
INSERT: main > p:nth-of-type(1) + p
UPDATE: main > p:nth-of-type(2)::text " " => "ok"
```

# Update `{"error":{}}`
```html
<main>
  <b>
    SHOWN_message2
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
UPDATE: main > b::text " " => "SHOWN_message2"
REMOVE: main > button + p
```
## Console
```
LOG "SHOWN_code2"
```

# Update
```js
container.querySelector("button").click();
```
## Console
```
LOG "SHOWN_message2"
```
