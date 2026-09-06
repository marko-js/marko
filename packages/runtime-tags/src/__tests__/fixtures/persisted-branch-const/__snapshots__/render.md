# Render `{"show":true,"title":"Store"}`
```html
<main>
  <p>
    Store! 0
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
    Store! 2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@7 "0" => "2"
```

# Update `{"show":true,"title":"Store?"}`
```html
<main>
  <p>
    Store?! 2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@0 "Store!" => "Store?!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    Store?! 4
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@8 "2" => "4"
```

# Update `{"show":false,"title":"Store?"}`
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

# Update `{"show":true,"title":"Fresh"}`
```html
<main>
  <p>
    Fresh! 4
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text@0 "" => "Fresh!"
UPDATE: main > p::text@7 "" => "4"
```
