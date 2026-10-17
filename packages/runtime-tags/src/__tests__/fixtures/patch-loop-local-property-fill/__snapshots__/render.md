# Render `{"rows":[{"item":{"id":"a"}}]}`
```html
<span>
  a:0
</span>
<button>
  +
</button>
```

# Update `{"rows":[{"item":{"id":"b"}}]}`
```html
<span>
  b:0
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span::text "a:0" => "b:0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  b:1
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span::text "b:0" => "b:1"
```
