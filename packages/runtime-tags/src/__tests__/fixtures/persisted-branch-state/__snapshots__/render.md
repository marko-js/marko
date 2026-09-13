# Render `{"title":"Store","show":""}`
```html
<main>
  <h1>
    Store
  </h1>
  <button>
    Count 0
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
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "0" => "1"
```

# Update `{"title":"Store","show":"yes"}`
```html
<main>
  <h1>
    Store
  </h1>
  <p>
    Seen 1 times
  </p>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store"
INSERT: main > h1 + p
UPDATE: main > p::text@5 "" => "1"
```
