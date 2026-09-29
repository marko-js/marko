# Render
```html
<main>
  <div>
    a 
  </div>
  <button
    class="flip"
  >
    f
  </button>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```

# Update
```js
document.querySelector("button.flip").click();
```
```html
<main>
  <div>
    a true
  </div>
  <button
    class="flip"
  >
    f
  </button>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
UPDATE: main > div::text@2 "" => "true"
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<main>
  <button
    class="flip"
  >
    f
  </button>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
REMOVE: main > div
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<main>
  <div>
    a true
  </div>
  <button
    class="flip"
  >
    f
  </button>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
INSERT: main > div
UPDATE: main > div::text@2 "" => "true"
```
