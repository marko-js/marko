# Render `{"$global":{"rows":[]}}`

# Update `{"$global":{"rows":[{"id":1,"qty":3}]}}`
```html
<input
  type="number"
  value="3"
/>
```
## Change
```
INSERT: input
```

# Update
```js
const input = document.querySelector("input");
input.value = "9";
input.dispatchEvent(
  new document.defaultView.Event("input", { bubbles: true }),
);
```
