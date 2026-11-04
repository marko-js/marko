# Render `{"x":1}`
```html
<span>
  2
</span>
<button>
  +
</button>
```

# Update `{"x":2}`
```html
<span>
  3
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span::text "2" => "3"
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  4
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span::text "3" => "4"
```

# Update `{"x":3}`
```html
<span>
  5
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span::text "4" => "5"
```
