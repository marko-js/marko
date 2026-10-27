# Render `{"mode":0,"nested":true,"other":true}`
```html
<label
  for="sM_.#childScope/0@0.uid"
>
  field
</label>
<input
  id="sM_.#childScope/0@0.uid"
/>
<label
  for="sM_.#childScope/0@1.uid"
>
  field
</label>
<input
  id="sM_.#childScope/0@1.uid"
/>
<label
  for="sM_.#childScope/1@2.uid"
>
  field
</label>
<input
  id="sM_.#childScope/1@2.uid"
/>
<label
  for="sM_.#childScope/1@4.uid"
>
  field
</label>
<input
  id="sM_.#childScope/1@4.uid"
/>
<label
  for="sM_.#childScope/2@5.uid"
>
  field
</label>
<input
  id="sM_.#childScope/2@5.uid"
/>
<label
  for="sM_.#childScope/0@6.uid"
>
  field
</label>
<input
  id="sM_.#childScope/0@6.uid"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
}
```

# Update `{"mode":1,"nested":true,"other":true}`
```html
<label
  for="sM_.#childScope/0@0.uid"
>
  field
</label>
<input
  id="sM_.#childScope/0@0.uid"
/>
<label
  for="sM_.#childScope/1@1.uid"
>
  field
</label>
<input
  id="sM_.#childScope/1@1.uid"
/>
<label
  for="sM_.#childScope/2@2.uid"
>
  field
</label>
<input
  id="sM_.#childScope/2@2.uid"
/>
<label
  for="sM_.#childScope/3@3.uid"
>
  field
</label>
<input
  id="sM_.#childScope/3@3.uid"
/>
<label
  for="sM_.#childScope/1@4.uid"
>
  field
</label>
<input
  id="sM_.#childScope/1@4.uid"
/>
<label
  for="sM_.#childScope/2@5.uid"
>
  field
</label>
<input
  id="sM_.#childScope/2@5.uid"
/>
<label
  for="sM_.#childScope/0@6.uid"
>
  field
</label>
<input
  id="sM_.#childScope/0@6.uid"
/>
```
## Change
```
INSERT: label, #sM_.#childScope/0@0.uid, label, #sM_.#childScope/1@1.uid, label, #sM_.#childScope/2@2.uid, label, #sM_.#childScope/3@3.uid
REMOVE: #sM_.#childScope/3@3.uid + label
REMOVE: #sM_.#childScope/3@3.uid + #sM_.#childScope/0@0.uid
REMOVE: #sM_.#childScope/3@3.uid + label
REMOVE: #sM_.#childScope/3@3.uid + #sM_.#childScope/0@1.uid
REMOVE: #sM_.#childScope/3@3.uid + label
REMOVE: #sM_.#childScope/3@3.uid + #sM_.#childScope/1@2.uid
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
}
```

# Update `{"mode":2,"nested":false,"other":true}`
```html
<label
  for="sM_.#childScope/0@0.uid"
>
  field
</label>
<input
  id="sM_.#childScope/0@0.uid"
/>
<label
  for="sM_.#childScope/1@4.uid"
>
  field
</label>
<input
  id="sM_.#childScope/1@4.uid"
/>
<label
  for="sM_.#childScope/2@5.uid"
>
  field
</label>
<input
  id="sM_.#childScope/2@5.uid"
/>
<label
  for="sM_.#childScope/0@6.uid"
>
  field
</label>
<input
  id="sM_.#childScope/0@6.uid"
/>
```
## Change
```
INSERT: label, #sM_.#childScope/0@0.uid
REMOVE: #sM_.#childScope/0@0.uid + label
REMOVE: #sM_.#childScope/0@0.uid + #sM_.#childScope/0@0.uid
REMOVE: #sM_.#childScope/0@0.uid + label
REMOVE: #sM_.#childScope/0@0.uid + #sM_.#childScope/1@1.uid
REMOVE: #sM_.#childScope/0@0.uid + label
REMOVE: #sM_.#childScope/0@0.uid + #sM_.#childScope/2@2.uid
REMOVE: #sM_.#childScope/0@0.uid + label
REMOVE: #sM_.#childScope/0@0.uid + #sM_.#childScope/3@3.uid
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
}
```

# Update `{"mode":0,"nested":false,"other":false}`
```html
<label
  for="sM_.#childScope/0@0.uid"
>
  field
</label>
<input
  id="sM_.#childScope/0@0.uid"
/>
<label
  for="sM_.#childScope/1@4.uid"
>
  field
</label>
<input
  id="sM_.#childScope/1@4.uid"
/>
<label
  for="sM_.#childScope/2@5.uid"
>
  field
</label>
<input
  id="sM_.#childScope/2@5.uid"
/>
```
## Change
```
INSERT: label, #sM_.#childScope/0@0.uid
REMOVE: #sM_.#childScope/0@0.uid + label
REMOVE: #sM_.#childScope/0@0.uid + #sM_.#childScope/0@0.uid
REMOVE: #sM_.#childScope/2@5.uid + label
REMOVE: #sM_.#childScope/2@5.uid + #sM_.#childScope/0@6.uid
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
}
```
