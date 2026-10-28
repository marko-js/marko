# Render `{"a":"a0"}`
```html
<div>
  <button>
    a0
  </button>
</div>
```

# Update `{"a":"a1"}`

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <button>
    a0+
  </button>
</div>
```
## Change
```
UPDATE: div > button::text "a0" => "a0+"
```

# Update `{"a":"a2"}`
