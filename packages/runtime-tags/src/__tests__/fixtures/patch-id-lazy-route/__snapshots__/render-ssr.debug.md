# Render `{"$global":{"n":5}}`
```html
<label
  for="sM_.#childScope/1@0.#childScope/0@0[1].uid"
>
  field
</label>
<input
  id="sM_.#childScope/1@0.#childScope/0@0[1].uid"
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
  for="sM_.#childScope/1@0.#childScope/0@0[1].uid"
>
  field
</label>
<input
  id="sM_.#childScope/1@0.#childScope/0@0[1].uid"
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
```html
<label
  for="sM_.#childScope/1@0.#childScope/0@0[1].uid"
>
  field
</label>
<input
  id="sM_.#childScope/1@0.#childScope/0@0[1].uid"
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
UPDATE: .v::text "6" => "5"
```

# Update
```js
const input = document.querySelector("input");
assert(input);
assert.equal(input.labels?.length, 1);
```
