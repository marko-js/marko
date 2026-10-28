# Render `{"$global":{"n":5}}`
```html
<label
  for="sM_1"
>
  field
</label>
<input
  id="sM_1"
/>
<span
  class="v"
>
  5
</span>
<button
  class="inc"
>
  +
</button>
```

# Update
```js
const input = document.querySelector("input");
assert(input);
assert.equal(input.labels?.length, 1);
```

# Update
```js
document.querySelector("button").click();
```
```html
<label
  for="sM_1"
>
  field
</label>
<input
  id="sM_1"
/>
<span
  class="v"
>
  6
</span>
<button
  class="inc"
>
  +
</button>
```
## Change
```
UPDATE: .v::text "5" => "6"
```
