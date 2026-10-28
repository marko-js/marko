# Render `{"show":true}`
```html
<label
  for="sM_.#childScope/0@0.uid"
>
  child
</label>
<input
  id="sM_.#childScope/0@0.uid"
/>
<input
  id="sM_.afterChild"
/>
<label
  for="sM_.afterChild"
>
  after child
</label>
<label
  for="sM_.#text/3@1.uid"
>
  dynamic
</label>
<input
  id="sM_.#text/3@1.uid"
/>
<input
  id="sM_.afterTag"
/>
<label
  for="sM_.afterTag"
>
  after tag
</label>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
const after = [...document.querySelectorAll("label")]
  .filter(isAfterLabel)
  .map(labelFor);
assert.equal(new Set(after).size, 2);
assert.deepEqual(after, (first ??= after));
}
```

# Update `{"show":false}`
```html
<input
  id="sM_.afterChild"
/>
<label
  for="sM_.afterChild"
>
  after child
</label>
<input
  id="sM_.afterTag"
/>
<label
  for="sM_.afterTag"
>
  after tag
</label>
```
## Change
```
REMOVE: label
REMOVE: #sM_.#childScope/0@0.uid
REMOVE: label:nth-of-type(1) + label
REMOVE: label:nth-of-type(1) + #sM_.#text/3@1.uid
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
const after = [...document.querySelectorAll("label")]
  .filter(isAfterLabel)
  .map(labelFor);
assert.equal(new Set(after).size, 2);
assert.deepEqual(after, (first ??= after));
}
```

# Update `{"show":true}`
```html
<label
  for="sM_.#childScope/0@0.uid"
>
  child
</label>
<input
  id="sM_.#childScope/0@0.uid"
/>
<input
  id="sM_.afterChild"
/>
<label
  for="sM_.afterChild"
>
  after child
</label>
<label
  for="sM_.#text/3@1.uid"
>
  dynamic
</label>
<input
  id="sM_.#text/3@1.uid"
/>
<input
  id="sM_.afterTag"
/>
<label
  for="sM_.afterTag"
>
  after tag
</label>
```
## Change
```
INSERT: label, #sM_.#childScope/0@0.uid
INSERT: label:nth-of-type(2) + :is(label, #sM_.#text/3@1.uid)
UPDATE: label:nth-of-type(3)[for] null => "sM_.#text/3@1.uid"
UPDATE: label:nth-of-type(3)::text " " => "dynamic"
UPDATE: #sM_.#text/3@1.uid[id] null => "sM_.#text/3@1.uid"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
const after = [...document.querySelectorAll("label")]
  .filter(isAfterLabel)
  .map(labelFor);
assert.equal(new Set(after).size, 2);
assert.deepEqual(after, (first ??= after));
}
```
