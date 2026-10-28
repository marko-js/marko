# Render
```html
<main>
  <p>
    ok
  </p>
  <button>
    0
  </button>
</main>
```

# Update `{"error":{"status":404,"items":["SHOWN_x","SHOWN_y"]}}`
```html
<main>
  <b>
    missing SHOWN_a
  </b>
  <span>
    SHOWN_x
  </span>
  <span>
    SHOWN_y
  </span>
  <button>
    0
  </button>
</main>
```
## Change
```
REMOVE: main > span:nth-of-type(2) + p
INSERT: main > b
INSERT: main > b + span
INSERT: main > span:nth-of-type(1) + span
```
## Console
```
LOG "mounted"
```

# Update
```js
container.querySelector("button").click();
```
```html
<main>
  <b>
    missing SHOWN_a
  </b>
  <span>
    SHOWN_x
  </span>
  <span>
    SHOWN_y
  </span>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
```

# Update `{"error":{"status":500,"items":["SHOWN_z"]}}`

## Patch rejected (navigate)
