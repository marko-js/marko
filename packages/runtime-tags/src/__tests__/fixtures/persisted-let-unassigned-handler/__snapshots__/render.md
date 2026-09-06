# Render `{"foo":"ab"}`
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

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    2
  </em>
  <button>
    set
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "0" => "2"
```

# Update `{"foo":"abcd"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    4
  </em>
  <button>
    set
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "2" => "4"
```
