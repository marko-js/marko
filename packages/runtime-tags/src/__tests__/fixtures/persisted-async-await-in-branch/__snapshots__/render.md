# Render `{"title":"Store","show":false,"promise":{}}`
```html
<main>
  <h1>
    Store
  </h1>
  <em>
    closed
  </em>
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
  <em>
    closed
  </em>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "0" => "1"
```

# Update `{"title":"Store","show":true,"promise":{}}`
```html
<main>
  <h1>
    Store
  </h1>
  <em>
    hi
  </em>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store"
REMOVE: main > h1 + em
INSERT: main > h1 + em
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
  <em>
    hi
  </em>
  <button>
    Count 2
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "1" => "2"
```

# Update `{"title":"Store!","show":true,"promise":{}}`
```html
<main>
  <h1>
    Store!
  </h1>
  <em>
    slow
  </em>
  <button>
    Count 2
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store!"
UPDATE: main > em::text "hi" => "slow"
```

# Update `{"title":"Store!","show":false,"promise":{}}`
```html
<main>
  <h1>
    Store!
  </h1>
  <em>
    closed
  </em>
  <button>
    Count 2
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Store!"
REMOVE: main > h1 + em
INSERT: main > h1 + em
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Store!
  </h1>
  <em>
    closed
  </em>
  <button>
    Count 3
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "2" => "3"
```

# Update `{"title":"Open","show":true,"promise":{}}`
```html
<main>
  <h1>
    Open
  </h1>
  <em>
    back
  </em>
  <button>
    Count 3
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store!" => "Open"
REMOVE: main > h1 + em
INSERT: main > h1 + em
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Open
  </h1>
  <em>
    back
  </em>
  <button>
    Count 4
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "3" => "4"
```
