# Render `{"html":"a"}`
```html
<main>
  <div>
    <em>
      alpha
    </em>
  </div>
  <button>
    0
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div>
    <em>
      alpha
    </em>
  </div>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
```

# Update `{"html":"b"}`
```html
<main>
  <div>
    <strong>
      beta
    </strong>
  </div>
  <button>
    1
  </button>
</main>
```
## Change
```
REMOVE: main > div > em
INSERT: main > div > strong
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div>
    <strong>
      beta
    </strong>
  </div>
  <button>
    2
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "1" => "2"
```

# Update `{"html":"a"}`
```html
<main>
  <div>
    <em>
      alpha
    </em>
  </div>
  <button>
    2
  </button>
</main>
```
## Change
```
REMOVE: main > div > strong
INSERT: main > div > em
```
