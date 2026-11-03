# Render `{"mode":0,"nested":true,"other":true}`
```html
<label
  for="sM_UA"
>
  field
</label>
<input
  id="sM_UA"
/>
<label
  for="sM_VA"
>
  field
</label>
<input
  id="sM_VA"
/>
<label
  for="sM_WA"
>
  field
</label>
<input
  id="sM_WA"
/>
<label
  for="sM_YA"
>
  field
</label>
<input
  id="sM_YA"
/>
<label
  for="sM_ZA"
>
  field
</label>
<input
  id="sM_ZA"
/>
<label
  for="sM__A"
>
  field
</label>
<input
  id="sM__A"
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
  for="sM_UA"
>
  field
</label>
<input
  id="sM_UA"
/>
<label
  for="sM_VA"
>
  field
</label>
<input
  id="sM_VA"
/>
<label
  for="sM_WA"
>
  field
</label>
<input
  id="sM_WA"
/>
<label
  for="sM_XA"
>
  field
</label>
<input
  id="sM_XA"
/>
<label
  for="sM_YA"
>
  field
</label>
<input
  id="sM_YA"
/>
<label
  for="sM_ZA"
>
  field
</label>
<input
  id="sM_ZA"
/>
<label
  for="sM__A"
>
  field
</label>
<input
  id="sM__A"
/>
```
## Change
```
INSERT: label, #sM_UA, label, #sM_VA, label, #sM_WA, label, #sM_XA
REMOVE: #sM_XA + label
REMOVE: #sM_XA + #sM_UA
REMOVE: #sM_XA + label
REMOVE: #sM_XA + #sM_VA
REMOVE: #sM_XA + label
REMOVE: #sM_XA + #sM_WA
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
  for="sM_UA"
>
  field
</label>
<input
  id="sM_UA"
/>
<label
  for="sM_YA"
>
  field
</label>
<input
  id="sM_YA"
/>
<label
  for="sM_ZA"
>
  field
</label>
<input
  id="sM_ZA"
/>
<label
  for="sM__A"
>
  field
</label>
<input
  id="sM__A"
/>
```
## Change
```
INSERT: label, #sM_UA
REMOVE: #sM_UA + label
REMOVE: #sM_UA + #sM_UA
REMOVE: #sM_UA + label
REMOVE: #sM_UA + #sM_VA
REMOVE: #sM_UA + label
REMOVE: #sM_UA + #sM_WA
REMOVE: #sM_UA + label
REMOVE: #sM_UA + #sM_XA
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
  for="sM_UA"
>
  field
</label>
<input
  id="sM_UA"
/>
<label
  for="sM_YA"
>
  field
</label>
<input
  id="sM_YA"
/>
<label
  for="sM_ZA"
>
  field
</label>
<input
  id="sM_ZA"
/>
```
## Change
```
INSERT: label, #sM_UA
REMOVE: #sM_UA + label
REMOVE: #sM_UA + #sM_UA
REMOVE: #sM_ZA + label
REMOVE: #sM_ZA + #sM__A
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
