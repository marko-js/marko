# Render `{"color":"red","$global":{"runtimeId":"ids"}}`
```html
<label
  for="sids_1"
>
  field
</label>
<input
  class="sids_1"
  id="sids_1"
/>
```

# Update
```js
const input = document.querySelector("input");
assert.equal(document.querySelectorAll("style").length, 361);
assert.equal(input.labels?.length, 1);
assert(/^[cs]ids_/.test(input.id), input.id);
for (const style of document.querySelectorAll("style"))
  assert.notEqual(style.className, input.id);
```
