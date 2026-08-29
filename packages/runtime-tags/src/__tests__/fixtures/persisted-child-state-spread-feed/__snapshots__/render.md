# Render
```html
<main>
  <div>
    a 
  </div>
  <div>
    a 
  </div>
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
  <div>
    a true
  </div>
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
UPDATE: main > div:nth-of-type(1)::text@2 "" => "true"
UPDATE: main > div:nth-of-type(2)::text@2 "" => "true"
UPDATE: main > div:nth-of-type(3)::text@2 "" => "true"
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
REMOVE: main > div
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
  <div>
    a true
  </div>
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
INSERT: main > div:nth-of-type(2) + div
INSERT: main > div:nth-of-type(1) + div
UPDATE: main > div:nth-of-type(1)::text@2 "" => "true"
UPDATE: main > div:nth-of-type(3)::text@2 "" => "true"
UPDATE: main > div:nth-of-type(2)::text@2 "" => "true"
```
