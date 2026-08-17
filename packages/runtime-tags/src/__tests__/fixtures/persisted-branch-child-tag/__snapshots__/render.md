# Render `{"show":false,"title":"a"}`
```html
<main>
  <em>
    closed
  </em>
  <button>
    0
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    closed
  </em>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
```

# Update `{"show":true,"title":"b"}`
```html
<main>
  <span
    class="badge"
  >
    b
  </span>
  <button>
    1
  </button>
</main>
```
## Change
```
REMOVE: main > em
INSERT: main > .badge
UPDATE: .badge::text "" => "b"
UPDATE: .badge::text "" => ""
```

# Update `{"show":true,"title":"c","note":"n"}`
```html
<main>
  <span
    class="badge"
  >
    c (n)
  </span>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: .badge::text@0 "b" => "c"
UPDATE: .badge::text@1 "" => " (n)"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <span
    class="badge"
  >
    c (n)
  </span>
  <button>
    2
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "1" => "2"
```

# Update `{"show":false,"title":"c"}`
```html
<main>
  <em>
    closed
  </em>
  <button>
    2
  </button>
</main>
```
## Change
```
REMOVE: main > span
INSERT: main > em
```
