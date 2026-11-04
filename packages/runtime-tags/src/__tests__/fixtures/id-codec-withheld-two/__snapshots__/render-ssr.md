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
<button>
  toggle
</button>
<label
  for="sM_2"
>
  old sM_2
</label>
<input
  id="sM_2"
  title="old sM_2"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert.equal(input.labels [0].textContent, input.title);
  assert(input.title.endsWith(" " + input.id));
assert.equal(ids.size, 2);
}
```
