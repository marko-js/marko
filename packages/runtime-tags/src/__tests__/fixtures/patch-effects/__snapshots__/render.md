# Render `{"title":"First"}`
```html
<div>
  <h1>
    First
  </h1>
  <button>
    Click
  </button>
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <h1>
    First
  </h1>
  <button
    data-clicks="1"
  >
    Click
  </button>
</div>
```
## Change
```
UPDATE: div > button[data-clicks] null => "1"
```

# Update `{"title":"Second"}`
```html
<div>
  <h1>
    Second
  </h1>
  <button
    data-clicks="1"
  >
    Click
  </button>
</div>
```
## Change
```
UPDATE: div > h1::text "First" => "Second"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <h1>
    Second
  </h1>
  <button
    data-clicks="2"
  >
    Click
  </button>
</div>
```
## Change
```
UPDATE: div > button[data-clicks] "1" => "2"
```
