# Render `{"show":false,"$global":{"persisted":true}}`
```html
<button
  class="n"
>
  clicked 0
</button>
```

# Update `{"show":true,"$global":{"persisted":true}}`
```html
<button
  class="n"
>
  clicked 0
</button>
<input
  checked=""
  class="pro"
  name="plan"
  type="radio"
  value="pro"
/>
<input
  class="basic"
  name="plan"
  type="radio"
  value="basic"
/>
```
## Change
```
INSERT: .n + :is(.pro, .basic)
UPDATE: .pro[checked] null => ""
```

# Update
```js
assert.deepEqual(checked(document), { pro: true, basic: false });
```
