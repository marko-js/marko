# Render `{"title":"a"}`
```html
<main>
  <div>
    <em>
      a
    </em>
  </div>
  <button>
    +
  </button>
</main>
```

# Update `{"title":"b"}`
```html
<main>
  <div>
    <em>
      b
    </em>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > div > em::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div />
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > div > em
```

# Update `{"title":"c"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div>
    <em>
      c
    </em>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > div > em
UPDATE: main > div > em::text " " => "c"
```

# Update `{"title":"d"}`
```html
<main>
  <div>
    <em>
      d
    </em>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > div > em::text "c" => "d"
```
