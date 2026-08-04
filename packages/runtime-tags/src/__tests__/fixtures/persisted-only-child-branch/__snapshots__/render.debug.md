# Render `{"show":false}`
```html
<main>
  <div />
  <button>
    c 0
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div />
  <button>
    c 1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@2 "0" => "1"
```

# Update `{"show":true,"msg":"there"}`
```html
<main>
  <div>
    <span>
      hi there
    </span>
  </div>
  <button>
    c 1
  </button>
</main>
```
## Change
```
INSERT: main > div > span
UPDATE: main > div > span::text@3 "" => "there"
```

# Update `{"show":false}`
```html
<main>
  <div />
  <button>
    c 1
  </button>
</main>
```
## Change
```
REMOVE: main > div > span
```

# Update `{"show":true,"msg":"again"}`
```html
<main>
  <div>
    <span>
      hi again
    </span>
  </div>
  <button>
    c 1
  </button>
</main>
```
## Change
```
INSERT: main > div > span
UPDATE: main > div > span::text@3 "" => "again"
```
