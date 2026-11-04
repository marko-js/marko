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
