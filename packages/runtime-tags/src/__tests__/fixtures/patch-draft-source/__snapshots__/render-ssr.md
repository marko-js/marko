# Render `{"x":1}`
```html
<button>
  1
</button>
```

# Update `{"x":2}`
```html
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
```

# Update
```js
document.querySelector("button").click();
await wait(30);
```

# Update `{"x":3}`
```html
<button>
  3
</button>
```
## Change
```
UPDATE: button::text "2" => "3"
```
