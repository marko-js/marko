# Render `{"message":"a"}`
```html
<main>
  <em>
    a
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
  <b>
    boom a
  </b>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
INSERT: main > b
REMOVE: main > b + em
UPDATE: main > b::text@0 "" => "boom"
UPDATE: main > b::text@5 "" => "a"
```

# Update `{"message":"b"}`
```html
<main>
  <b>
    boom b
  </b>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > b::text@5 "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <b>
    boom b
  </b>
  <button>
    2
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "1" => "2"
```

# Update `{"message":"c"}`
```html
<main>
  <b>
    boom c
  </b>
  <button>
    2
  </button>
</main>
```
## Change
```
UPDATE: main > b::text@5 "b" => "c"
```
