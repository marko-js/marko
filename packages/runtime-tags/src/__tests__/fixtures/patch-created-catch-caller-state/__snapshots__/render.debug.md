# Render `{"detail":"a"}`
```html
<main>
  <p>
    ok
  </p>
  <p>
    ok
  </p>
  <button>
    0
  </button>
</main>
```

# Update
```js
container.querySelector("button").click();
```
```html
<main>
  <p>
    ok
  </p>
  <p>
    ok
  </p>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
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
  <b>
    SHOWN_x
  </b>
  <i>
    n1
  </i>
  <button>
    1
  </button>
</main>
```
## Change
```
INSERT: main > b
REMOVE: main > i:nth-of-type(1) + p
UPDATE: main > b:nth-of-type(1)::text " " => "SHOWN_x"
INSERT: main > b:nth-of-type(1) + i
INSERT: main > i:nth-of-type(1) + b
REMOVE: main > i:nth-of-type(2) + p
UPDATE: main > b:nth-of-type(2)::text " " => "SHOWN_x"
INSERT: main > b:nth-of-type(2) + i
UPDATE: main > i:nth-of-type(2)::text " " => "n1"
```
## Console
```
LOG "detail" "b"
LOG "detail" "n1"
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
  <b>
    SHOWN_x
  </b>
  <i>
    n2
  </i>
  <button>
    2
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "1" => "2"
UPDATE: main > i:nth-of-type(2)::text "n1" => "n2"
```
## Console
```
LOG "detail" "n2"
```

# Update `{"error":{},"detail":""}`
```html
<main>
  <b>
    SHOWN_x
  </b>
  <b>
    SHOWN_x
  </b>
  <i>
    n2
  </i>
  <button>
    2
  </button>
</main>
```
## Change
```
REMOVE: main > b:nth-of-type(1) + i
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
  <b>
    SHOWN_x
  </b>
  <i>
    n2
  </i>
  <button>
    2
  </button>
</main>
```
## Change
```
INSERT: main > b:nth-of-type(1) + i
UPDATE: main > i:nth-of-type(1)::text " " => "c"
```
## Console
```
LOG "detail" "c"
```
