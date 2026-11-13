# Render `{"mode":0,"nested":true,"other":true}`
```html
<label
  for="sM_TA"
>
  field
</label>
<input
  id="sM_TA"
/>
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
  for="sM_TA"
>
  field
</label>
<input
  id="sM_TA"
/>
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
```
## Change
```
INSERT: label
INSERT: label:nth-of-type(1) + #sM_TA
INSERT: #sM_TA + label
INSERT: label:nth-of-type(2) + #sM_UA
INSERT: #sM_UA + label
INSERT: label:nth-of-type(3) + #sM_VA
INSERT: #sM_VA + label
INSERT: label:nth-of-type(4) + #sM_WA
REMOVE: #sM_WA + label
REMOVE: #sM_WA + #sM_TA
REMOVE: #sM_WA + label
REMOVE: #sM_WA + #sM_UA
REMOVE: #sM_WA + label
REMOVE: #sM_WA + #sM_VA
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
  for="sM_TA"
>
  field
</label>
<input
  id="sM_TA"
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
```
## Change
```
INSERT: label
INSERT: label:nth-of-type(1) + #sM_TA
REMOVE: #sM_TA + label
REMOVE: #sM_TA + #sM_TA
REMOVE: #sM_TA + label
REMOVE: #sM_TA + #sM_UA
REMOVE: #sM_TA + label
REMOVE: #sM_TA + #sM_VA
REMOVE: #sM_TA + label
REMOVE: #sM_TA + #sM_WA
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
  for="sM_TA"
>
  field
</label>
<input
  id="sM_TA"
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
```
## Change
```
INSERT: label
INSERT: label:nth-of-type(1) + #sM_TA
REMOVE: #sM_TA + label
REMOVE: #sM_TA + #sM_TA
REMOVE: #sM_YA + label
REMOVE: #sM_YA + #sM_ZA
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
