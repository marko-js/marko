# Render `{"value":1}`
```html
<span>
  1
</span>
<button>
  click
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<span>
  2
</span>
<button>
  click
</button>
```
## Change
```
UPDATE: span::text "1" => "2"
```
