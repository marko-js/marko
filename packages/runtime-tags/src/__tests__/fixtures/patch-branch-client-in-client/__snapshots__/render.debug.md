# Render `{"outer":"o1","inner":"i1"}`
```html
<main>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"outer":"o2","inner":"i2"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h2>
    o2
  </h2>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > h2
UPDATE: main > h2::text " " => "o2"
```

# Update `{"outer":"o3","inner":"i3"}`
```html
<main>
  <h2>
    o3
  </h2>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h2::text "o2" => "o3"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h2>
    o3
  </h2>
  <p>
    i3
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > h2 + p
UPDATE: main > p::text " " => "i3"
```
