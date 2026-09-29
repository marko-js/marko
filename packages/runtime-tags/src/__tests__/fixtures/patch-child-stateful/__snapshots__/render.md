# Render
```html
<main>
  <button
    class="t"
  >
    t
  </button>
</main>
```

# Update
```js
document.querySelector(".t").click();
```
```html
<main>
  <button
    class="c"
  >
    0
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
INSERT: main > .c
UPDATE: .c::text " " => "0"
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
    1
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
UPDATE: .c::text "0" => "1"
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
    2
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
UPDATE: .c::text "1" => "2"
```
