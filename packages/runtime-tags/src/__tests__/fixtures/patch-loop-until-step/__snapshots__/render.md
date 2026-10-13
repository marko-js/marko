# Render `{"step":1}`
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
  <span>
    3
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
    0
  </span>
  <span>
    1
  </span>
  <span>
    2
  </span>
  <span>
    3
  </span>
  <span>
    4
  </span>
  <span>
    5
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > span:nth-of-type(4) + span
INSERT: main > span:nth-of-type(5) + span
UPDATE: main > span:nth-of-type(5)::text " " => "4"
UPDATE: main > span:nth-of-type(6)::text " " => "5"
```

# Update `{"step":2}`
```html
<main>
  <span>
    0
  </span>
  <span>
    2
  </span>
  <span>
    4
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > span:nth-of-type(1) + span
REMOVE: main > span:nth-of-type(2) + span
REMOVE: main > span:nth-of-type(3) + span
```

# Update `{"step":3}`
```html
<main>
  <span>
    0
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
REMOVE: main > span:nth-of-type(1) + span
REMOVE: main > span:nth-of-type(1) + span
INSERT: main > span:nth-of-type(1) + span
UPDATE: main > span:nth-of-type(2)::text " " => "3"
```
