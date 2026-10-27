# Render
```html
<form>
  <button
    name="_action"
    value="add"
  >
    Add
  </button>
</form>
```

# Update
```js
const button = document.querySelector("button");
button.click();
await Promise.resolve();
assert.equal(button.disabled, false, "rendered before the form was read");
```
```html
<form>
  <button
    disabled=""
    name="_action"
    value="add"
  >
    Add
  </button>
</form>
```
## Change
```
UPDATE: form > button[disabled] null => ""
```
