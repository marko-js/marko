# Render `{"rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="sM_1UUUA"
/>
<label
  for="sM_1UUUA"
>
  relay
</label>
<input
  id="sM_1UUVA"
/>
<label
  for="sM_1UUVA"
>
  p 1
</label>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```

# Update `{"rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<input
  id="sM_1UUUA"
/>
<label
  for="sM_1UUUA"
>
  relay
</label>
<input
  id="sM_1UUVA"
/>
<label
  for="sM_1UUVA"
>
  p 1
</label>
<button>
  clear
</button>
<input
  id="sM_2UUThc0A"
/>
<label
  for="sM_2UUThc0A"
>
  relay
</label>
<input
  id="sM_2UUTha0A"
/>
<label
  for="sM_2UUTha0A"
>
  p 2
</label>
```
## Change
```
INSERT: label:nth-of-type(2) + button
INSERT: button:nth-of-type(2) + :is(#sM_2UUThc0A, label)
INSERT: label:nth-of-type(3) + :is(#sM_2UUTha0A, label)
UPDATE: #sM_2UUThc0A[id] null => "sM_2UUThc0A"
UPDATE: label:nth-of-type(3)[for] null => "sM_2UUThc0A"
UPDATE: #sM_2UUTha0A[id] null => "sM_2UUTha0A"
UPDATE: label:nth-of-type(4)[for] null => "sM_2UUTha0A"
UPDATE: label:nth-of-type(4)::text@2 "" => "2"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```
