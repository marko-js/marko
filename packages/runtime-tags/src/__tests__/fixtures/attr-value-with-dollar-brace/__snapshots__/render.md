# Render
```html
<button>
  0
</button>
<input
  placeholder="foo ${ bar"
  type="text"
/>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
<input
  placeholder="foo ${ bar"
  type="text"
/>
```
## Change
```
UPDATE: button::text "0" => "1"
```
