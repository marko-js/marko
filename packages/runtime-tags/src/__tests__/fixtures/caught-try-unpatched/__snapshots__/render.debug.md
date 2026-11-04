# Render `{"label":"a","fail":true}`
```html
<main>
  Unavailable
  <button>
    Toggle
  </button>
</main>
```

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
  Unavailable
  <button>
    Toggle
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: p::text "" => "a"
INSERT: main::text("Unavailable")
REMOVE: main::text + p
```
