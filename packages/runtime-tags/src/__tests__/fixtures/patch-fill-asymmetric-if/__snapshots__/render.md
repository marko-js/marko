# Render `{"show":false,"inner":true,"title":"Store"}`
```html
<main>
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

# Update `{"show":false,"inner":true,"title":"Fresh"}`
```html
<main>
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
UPDATE: main > p::text "Store@1" => "Fresh@1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
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

# Update `{"show":true,"inner":true,"title":"Fresh"}`
```html
<main>
  <p>
    shown
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > p
INSERT: main > p
```
