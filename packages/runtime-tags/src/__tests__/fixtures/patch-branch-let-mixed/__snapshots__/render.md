# Render `{"title":"Store","show":true}`
```html
<div>
  <h1>
    Store #0
  </h1>
  <button
    class="root"
  >
    +
  </button>
  <p>
    Seen 0
  </p>
  <button
    class="inner"
  >
    +
  </button>
</div>
```

# Update
```js
document.querySelector(sel).click();
```
```html
<div>
  <h1>
    Store #1
  </h1>
  <button
    class="root"
  >
    +
  </button>
  <p>
    Seen 0
  </p>
  <button
    class="inner"
  >
    +
  </button>
</div>
```
## Change
```
UPDATE: div > h1::text "Store #0" => "Store #1"
```

# Update
```js
document.querySelector(sel).click();
```
```html
<div>
  <h1>
    Store #1
  </h1>
  <button
    class="root"
  >
    +
  </button>
  <p>
    Seen 1
  </p>
  <button
    class="inner"
  >
    +
  </button>
</div>
```
## Change
```
UPDATE: div > p::text@5 "0" => "1"
```

# Update `{"title":"Store!","show":true}`
```html
<div>
  <h1>
    Store! #1
  </h1>
  <button
    class="root"
  >
    +
  </button>
  <p>
    Seen 1
  </p>
  <button
    class="inner"
  >
    +
  </button>
</div>
```
## Change
```
UPDATE: div > h1::text "Store #1" => "Store! #1"
```

# Update `{"title":"Store!","show":false}`
```html
<div>
  <h1>
    Store! #1
  </h1>
  <button
    class="root"
  >
    +
  </button>
</div>
```
## Change
```
REMOVE: .root + p
REMOVE: .root + button
```

# Update `{"title":"Store!","show":true}`
```html
<div>
  <h1>
    Store! #1
  </h1>
  <button
    class="root"
  >
    +
  </button>
  <p>
    Seen 0
  </p>
  <button
    class="inner"
  >
    +
  </button>
</div>
```
## Change
```
INSERT: .root + :is(p, .inner)
UPDATE: div > p::text@5 "" => "0"
```

# Update
```js
document.querySelector(sel).click();
```
```html
<div>
  <h1>
    Store! #1
  </h1>
  <button
    class="root"
  >
    +
  </button>
  <p>
    Seen 1
  </p>
  <button
    class="inner"
  >
    +
  </button>
</div>
```
## Change
```
UPDATE: div > p::text@5 "0" => "1"
```
