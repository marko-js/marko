# Render
```html
<main>
  <button
    class="c"
  >
    fixed:0
  </button>
  <button
    class="t"
  >
    t
  </button>
</main>
```

# Update
```js
document.querySelector(".c").click();
```
```html
<main>
  <button
    class="c"
  >
    fixed:1
  </button>
  <button
    class="t"
  >
    t
  </button>
</main>
```
## Change
```
UPDATE: .c::text@6 "0" => "1"
```

# Update
```js
document.querySelector(".c").click();
```
```html
<main>
  <button
    class="c"
  >
    fixed:2
  </button>
  <button
    class="t"
  >
    t
  </button>
</main>
```
## Change
```
UPDATE: .c::text@6 "1" => "2"
```
