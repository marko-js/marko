# Render
```html
<main>
  <em>
    a
  </em>
  <button>
    +
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
    a!
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "a" => "a!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    a!!
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "a!" => "a!!"
```
