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
<button>
  0
</button>
```

# Update
```js
const [submitter, counter] = document.querySelectorAll("button");
const window = document.defaultView;
submitter.click();
await Promise.resolve();
assert.equal(submitter.disabled, false, "rendered before the form was read");

await new Promise(window.requestAnimationFrame);
assert.equal(submitter.disabled, true, "rendered in the next frame");

await new Promise(setImmediate);
counter.click();
await Promise.resolve();
assert.equal(counter.textContent, "1", "a later click renders at once");
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
<button>
  1
</button>
```
## Change
```
UPDATE: form > button[disabled] null => ""
UPDATE: button::text "0" => "1"
```
