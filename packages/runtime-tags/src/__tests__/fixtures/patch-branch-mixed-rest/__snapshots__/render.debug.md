# Render `{"known":"k","x":1}`
```html
<main>
  <div>
    k
  </div>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div>
    k
  </div>
  <p>
    ok
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > div + p
```

# Update `{"known":"k2","x":0}`
```html
<main>
  <div>
    k2
  </div>
  <p>
    ok
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > div::text "k" => "k2"
```
