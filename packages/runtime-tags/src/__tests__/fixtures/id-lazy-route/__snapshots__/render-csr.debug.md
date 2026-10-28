# Render `{"$global":{"n":5}}`

# Update
```html
<label
  for="cM_0"
>
  field
</label>
<input
  id="cM_0"
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
## Change
```
INSERT: label, #cM_0, .v, .inc
UPDATE: .v::text " " => "5"
UPDATE: body[data-ok] null => "1"
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
  for="cM_0"
>
  field
</label>
<input
  id="cM_0"
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

# Update `{"$global":{"n":6}}`

# Update
```js
const input = document.querySelector("input");
assert(input);
assert.equal(input.labels?.length, 1);
```
