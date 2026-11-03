# Render `{"left":true,"right":true}`
```html
<label
  for="sM_.#childScope/0@0.uid"
>
  left
</label>
<input
  id="sM_.#childScope/0@0.uid"
/>
<label
  for="sM_.#childScope/0@1.uid"
>
  right
</label>
<input
  id="sM_.#childScope/0@1.uid"
/>
<label
  for="sM_.#childScope/2@3.#childScope/0@2.uid"
>
  repeat
</label>
<input
  id="sM_.#childScope/2@3.#childScope/0@2.uid"
/>
<label
  for="sM_.#childScope/3@4.#childScope/0@2.uid"
>
  repeat
</label>
<input
  id="sM_.#childScope/3@4.#childScope/0@2.uid"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert.equal(document.getElementById(input.id), input);
}
```

# Update `{"left":false,"right":true}`
```html
<label
  for="sM_.#childScope/0@1.uid"
>
  right
</label>
<input
  id="sM_.#childScope/0@1.uid"
/>
<label
  for="sM_.#childScope/2@3.#childScope/0@2.uid"
>
  repeat
</label>
<input
  id="sM_.#childScope/2@3.#childScope/0@2.uid"
/>
<label
  for="sM_.#childScope/3@4.#childScope/0@2.uid"
>
  repeat
</label>
<input
  id="sM_.#childScope/3@4.#childScope/0@2.uid"
/>
```
## Change
```
REMOVE: label
REMOVE: #sM_.#childScope/0@0.uid
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert.equal(document.getElementById(input.id), input);
}
```

# Update `{"left":true,"right":true}`
```html
<label
  for="sM_.#childScope/0@0.uid"
>
  left
</label>
<input
  id="sM_.#childScope/0@0.uid"
/>
<label
  for="sM_.#childScope/0@1.uid"
>
  right
</label>
<input
  id="sM_.#childScope/0@1.uid"
/>
<label
  for="sM_.#childScope/2@3.#childScope/0@2.uid"
>
  repeat
</label>
<input
  id="sM_.#childScope/2@3.#childScope/0@2.uid"
/>
<label
  for="sM_.#childScope/3@4.#childScope/0@2.uid"
>
  repeat
</label>
<input
  id="sM_.#childScope/3@4.#childScope/0@2.uid"
/>
```
## Change
```
INSERT: label, #sM_.#childScope/0@0.uid
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert.equal(document.getElementById(input.id), input);
}
```
