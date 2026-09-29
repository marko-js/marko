# Render `{"from":0}`
```html
<main>
  <span>
    0
  </span>
  <span>
    1
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
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > span:nth-of-type(2) + span
UPDATE: main > span:nth-of-type(3)::text " " => "2"
```

# Update `{"from":1}`
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

# Update `{"from":0}`
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
## Change
```
INSERT: main > span
UPDATE: main > span:nth-of-type(1)::text " " => "0"
```
