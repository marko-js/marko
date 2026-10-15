# Render `{"show":false,"foo":"ab"}`
```html
<main />
```

# Update `{"show":true,"foo":"abc"}`
```html
<main>
  <em>
    0
  </em>
  <button>
    set
  </button>
</main>
```
## Change
```
INSERT: main > :is(em, button)
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    3
  </em>
  <button>
    set
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "0" => "3"
```
