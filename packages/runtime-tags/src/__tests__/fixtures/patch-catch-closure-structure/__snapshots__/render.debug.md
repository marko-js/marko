# Render `{"detail":"a"}`
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

# Update `{"error":{},"detail":"b"}`
```html
<main>
  <b>
    SHOWN_x
  </b>
  <i>
    b
  </i>
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: main > b
REMOVE: main > i + p
UPDATE: main > b::text " " => "SHOWN_x"
INSERT: main > b + i
```
## Console
```
LOG "detail" "b"
```

# Update
```js
container.querySelector("button").click();
```
```html
<main>
  <b>
    SHOWN_x
  </b>
  <i>
    b
  </i>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
```

# Update `{"error":{},"detail":""}`
```html
<main>
  <b>
    SHOWN_x
  </b>
  <button>
    1
  </button>
</main>
```
## Change
```
REMOVE: main > b + i
```

# Update `{"error":{},"detail":"c"}`
```html
<main>
  <b>
    SHOWN_x
  </b>
  <i>
    c
  </i>
  <button>
    1
  </button>
</main>
```
## Change
```
INSERT: main > b + i
UPDATE: main > i::text " " => "c"
```
## Console
```
LOG "detail" "c"
```
