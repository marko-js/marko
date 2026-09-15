# Render `{"title":"Store","show":true,"tag":"a"}`
```html
<main>
  <h1>
    Store
  </h1>
  <button>
    read
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Store
  </h1>
  <button
    data-seen="a"
  >
    read
  </button>
</main>
```
## Change
```
UPDATE: main > button[data-seen] null => "a"
```

# Update `{"title":"Store","show":true,"tag":"b"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Store
  </h1>
  <button
    data-seen="b"
  >
    read
  </button>
</main>
```
## Change
```
UPDATE: main > button[data-seen] "a" => "b"
```

# Update `{"title":"Store","show":false,"tag":"c"}`
```html
<main>
  <h1>
    Store
  </h1>
</main>
```
## Change
```
REMOVE: main > h1 + button
```

# Update `{"title":"Store","show":true,"tag":"d"}`
```html
<main>
  <h1>
    Store
  </h1>
  <button>
    read
  </button>
</main>
```
## Change
```
INSERT: main > h1 + button
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Store
  </h1>
  <button
    data-seen="d"
  >
    read
  </button>
</main>
```
## Change
```
UPDATE: main > button[data-seen] null => "d"
```
