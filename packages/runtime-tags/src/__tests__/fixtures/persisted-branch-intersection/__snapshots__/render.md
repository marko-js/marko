# Render `{"title":"Store","show":true}`
```html
<main>
  <p>
    Store #0
  </p>
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
  <p>
    Store #1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "Store #0" => "Store #1"
```

# Update `{"title":"Store!","show":true}`
```html
<main>
  <p>
    Store! #1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "Store #1" => "Store! #1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    Store! #2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "Store! #1" => "Store! #2"
```

# Update `{"title":"Store!","show":false}`
```html
<main>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > p
```

# Update `{"title":"Store!!","show":false}`

# Update `{"title":"Store!!","show":true}`
```html
<main>
  <p>
     
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    Store!! #3
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text " " => "Store!! #3"
```
