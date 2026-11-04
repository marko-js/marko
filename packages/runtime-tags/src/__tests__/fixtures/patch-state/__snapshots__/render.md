# Render `{"title":"First"}`
```html
<div>
  <h1>
    First
  </h1>
  <button>
    Count 0
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
  <button>
    Count 1
  </button>
</div>
```
## Change
```
UPDATE: div > button::text@6 "0" => "1"
```

# Update `{"title":"Second"}`
```html
<div>
  <h1>
    Second
  </h1>
  <button>
    Count 1
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
  <button>
    Count 2
  </button>
</div>
```
## Change
```
UPDATE: div > button::text@6 "1" => "2"
```
