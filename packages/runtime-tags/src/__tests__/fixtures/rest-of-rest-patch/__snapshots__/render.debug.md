# Render
```html
<main>
  <em>
    ka
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
    ka!
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text@1 "a" => "a!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    ka!!
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text@1 "a!" => "a!!"
```
