# Render `{"title":"Store","items":["a"]}`
```html
<main>
  <p>
    Store a #0
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
    Store a #1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "Store a #0" => "Store a #1"
```

# Update `{"title":"Store!","items":["a","b"]}`
```html
<main>
  <p>
    Store! a #1
  </p>
  <p>
    Store! b #1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p:nth-of-type(1) + p
UPDATE: main > p:nth-of-type(1)::text "Store a #1" => "Store! a #1"
UPDATE: main > p:nth-of-type(2)::text " " => "Store! b #1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    Store! a #2
  </p>
  <p>
    Store! b #2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p:nth-of-type(1)::text "Store! a #1" => "Store! a #2"
UPDATE: main > p:nth-of-type(2)::text "Store! b #1" => "Store! b #2"
```
