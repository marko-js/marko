# Render `{"prefix":"old"}`
```html
<button>
  toggle
</button>
<label
  for="sM_1"
>
  old sM_1
</label>
<input
  id="sM_1"
  title="old sM_1"
/>
```

# Update
```js
const input = document.querySelector("input");
assert(input);
assert.equal(input.labels?.length, 1);
assert(input.title.endsWith(" " + input.id), input.title + " / " + input.id);
assert.equal(input.labels [0].textContent, input.title);
```
