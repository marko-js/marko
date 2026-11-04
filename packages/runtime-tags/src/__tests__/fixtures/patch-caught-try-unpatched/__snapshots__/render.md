# Render `{"label":"a","fail":true}`
```html
<main>
  Unavailable
  <button>
    Toggle
  </button>
</main>
```

# Update `{"label":"b"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    Toggle
  </button>
</main>
```
## Change
```
REMOVE: main::text("Unavailable")
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    b
  </p>
  <button>
    Toggle
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text "" => "b"
```

# Update `{"label":"c","fail":true}`
```html
<main>
  Unavailable
  <button>
    Toggle
  </button>
</main>
```
## Change
```
UPDATE: p::text "b" => "c"
INSERT: main::text("Unavailable")
REMOVE: main::text + p
```
