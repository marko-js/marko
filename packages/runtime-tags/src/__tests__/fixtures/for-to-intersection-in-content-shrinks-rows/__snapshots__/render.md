# Render
```html
<div>
  <span>
    a
  </span>
  <span>
    b
  </span>
  <span>
    c
  </span>
  <button>
    go
  </button>
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <span>
    z
  </span>
  <button>
    go
  </button>
</div>
```
## Change
```
REMOVE: div > span + span
REMOVE: div > span + span
UPDATE: div > span::text "a" => "z"
```
