# Render
```html
<div>
  <button>
    0
  </button>
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <button>
    1
  </button>
</div>
```
## Change
```
UPDATE: div > button::text "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <button>
    2
  </button>
</div>
```
## Change
```
UPDATE: div > button::text "1" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <span>
    The button was clicked 3 times.
  </span>
</div>
```
## Change
```
REMOVE: div > button
INSERT: div > span
UPDATE: div > span::text@23 "" => "3"
```
