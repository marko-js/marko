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
    boom
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
UPDATE: main > b::text " " => "boom"
```

# Update `{"message":"b"}`
```html
<main>
  <b>
    boom
  </b>
  <button>
    1
  </button>
</main>
```
## Change
```
INSERT: main > em
REMOVE: em + b
UPDATE: em::text "" => "b"
INSERT: main > b
REMOVE: main > b + em
UPDATE: main > b::text " " => "boom"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <b>
    boom
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
  <em>
    c
  </em>
  <button>
    2
  </button>
</main>
```
## Change
```
INSERT: main > em
REMOVE: main > em + b
UPDATE: main > em::text "" => "c"
```
