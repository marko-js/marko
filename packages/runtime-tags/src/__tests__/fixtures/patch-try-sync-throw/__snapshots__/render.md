# Render `{"message":"ok"}`
```html
<main>
  <em>
    ok
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
    ok
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

# Update `{"message":"x","boom":true}`
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
UPDATE: em::text "ok" => "x"
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

# Update `{"message":"back"}`
```html
<main>
  <em>
    back
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
UPDATE: main > em::text "" => "back"
```
