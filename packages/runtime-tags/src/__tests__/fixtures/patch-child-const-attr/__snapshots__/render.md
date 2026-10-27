# Render `{"title":"a"}`
```html
<main>
  <div>
    <b>
      hi
    </b>
    <i>
      a
    </i>
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
    <b>
      hi
    </b>
    <i>
      a
    </i>
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

# Update `{"title":"b"}`
```html
<main>
  <div>
    <b>
      hi
    </b>
    <i>
      b
    </i>
  </div>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > div > i::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div>
    <b>
      hi
    </b>
    <i>
      b
    </i>
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
