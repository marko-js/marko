# Render `{"value":1}`
```html
<button>
  x: 1
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  x: 2
</button>
```
## Change
```
UPDATE: button::text@3 "1" => "2"
```
