# Render `{"end":2}`
```html
<main>
  <span>
    0
  </span>
  <span>
    1
  </span>
  <span>
    2
  </span>
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
  <span>
    1
  </span>
  <span>
    2
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > span
```

# Update `{"end":3}`
```html
<main>
  <span>
    1
  </span>
  <span>
    2
  </span>
  <span>
    3
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > span:nth-of-type(2) + span
UPDATE: main > span:nth-of-type(3)::text " " => "3"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <span>
    2
  </span>
  <span>
    3
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > span
```
