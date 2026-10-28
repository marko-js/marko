# Render `{"promise":{"value":{}}}`
```html
<h1
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_.#childScope/0@0.uid"
>
  loading
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_.#childScope/0@0.uid"
/>
```

# Update
```js
const seen = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!seen.has(input.id));
  seen.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert(document.getElementById(input.getAttribute("aria-describedby")));
assert(seen.size > 0);
}
```

# Update
```html
<h1
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_.#childScope/0@1.uid"
>
  initial
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_.#childScope/0@1.uid"
/>
```
## Change
```
INSERT: label::text("initial")
REMOVE: t > label + #sM_.#childScope/0@0.uid
REMOVE: label
INSERT: label, #sM_.#childScope/0@2.uid
REMOVE: t > label + #sM_.#childScope/0@2.uid
REMOVE: label
INSERT: #sM_.heading + :is(label, #sM_.#childScope/0@1.uid)
```

# Update `{"promise":{}}`

# Update
```js
const seen = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!seen.has(input.id));
  seen.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert(document.getElementById(input.getAttribute("aria-describedby")));
assert(seen.size > 0);
}
```
