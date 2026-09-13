# Render `{"show":true,"inner":true,"title":"Store","heading":"H"}`
```html
<main>
  <h1>
    H
  </h1>
  <p>
    Store@0
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
  <h1>
    H
  </h1>
  <p>
    Store@1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "Store@0" => "Store@1"
```

# Update `{"show":true,"inner":true,"title":"Fresh","heading":"H"}`
```html
<main>
  <h1>
    H
  </h1>
  <p>
    Fresh@1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "H" => "H"
UPDATE: main > p::text "Store@1" => "Fresh@1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    H
  </h1>
  <p>
    Fresh@2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "Fresh@1" => "Fresh@2"
```
