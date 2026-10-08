# Render `{"show":false}`
```html
<main />
```

# Update `{"show":true}`
```html
<main>
  <button>
    0
  </button>
  <span
    class="child"
  >
    child 0
  </span>
</main>
```
## Change
```
INSERT: main > :is(button, .child)
UPDATE: main > button::text " " => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    1
  </button>
  <span
    class="child"
  >
    child 1
  </span>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
UPDATE: .child::text@6 "0" => "1"
```
