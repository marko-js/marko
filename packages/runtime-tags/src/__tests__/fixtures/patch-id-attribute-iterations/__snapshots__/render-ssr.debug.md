# Render `{"items":["a","b"],"record":{"a":1},"end":1}`
```html
<label
  for="sM_.#childScope/0@5[0].#text/0@0.#childScope/0@1.uid"
>
  a
</label>
<input
  id="sM_.#childScope/0@5[0].#text/0@0.#childScope/0@1.uid"
/>
<label
  for="sM_.#childScope/0@5[1].#text/0@0.#childScope/0@1.uid"
>
  b
</label>
<input
  id="sM_.#childScope/0@5[1].#text/0@0.#childScope/0@1.uid"
/>
<label
  for="sM_.#childScope/0@5[2].#text/0@0.#childScope/0@2.uid"
>
  a
</label>
<input
  id="sM_.#childScope/0@5[2].#text/0@0.#childScope/0@2.uid"
/>
<label
  for="sM_.#childScope/0@5[3].#text/0@0.#childScope/0@3.uid"
>
  0
</label>
<input
  id="sM_.#childScope/0@5[3].#text/0@0.#childScope/0@3.uid"
/>
<label
  for="sM_.#childScope/0@5[4].#text/0@0.#childScope/0@3.uid"
>
  1
</label>
<input
  id="sM_.#childScope/0@5[4].#text/0@0.#childScope/0@3.uid"
/>
<label
  for="sM_.#childScope/0@5[5].#text/0@0.#childScope/0@4.uid"
>
  0
</label>
<input
  id="sM_.#childScope/0@5[5].#text/0@0.#childScope/0@4.uid"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
assert(ids.size > 0);
}
```

# Update `{"items":["c"],"record":{"b":2,"c":3},"end":2}`
```html
<label
  for="sM_.#childScope/0@5[0].#text/0@0.#childScope/0@1.uid"
>
  c
</label>
<input
  id="sM_.#childScope/0@5[0].#text/0@0.#childScope/0@1.uid"
/>
<label
  for="sM_.#childScope/0@5[1].#text/0@0.#childScope/0@2.uid"
>
  b
</label>
<input
  id="sM_.#childScope/0@5[1].#text/0@0.#childScope/0@2.uid"
/>
<label
  for="sM_.#childScope/0@5[2].#text/0@0.#childScope/0@2.uid"
>
  c
</label>
<input
  id="sM_.#childScope/0@5[2].#text/0@0.#childScope/0@2.uid"
/>
<label
  for="sM_.#childScope/0@5[3].#text/0@0.#childScope/0@3.uid"
>
  0
</label>
<input
  id="sM_.#childScope/0@5[3].#text/0@0.#childScope/0@3.uid"
/>
<label
  for="sM_.#childScope/0@5[4].#text/0@0.#childScope/0@3.uid"
>
  1
</label>
<input
  id="sM_.#childScope/0@5[4].#text/0@0.#childScope/0@3.uid"
/>
<label
  for="sM_.#childScope/0@5[5].#text/0@0.#childScope/0@3.uid"
>
  2
</label>
<input
  id="sM_.#childScope/0@5[5].#text/0@0.#childScope/0@3.uid"
/>
<label
  for="sM_.#childScope/0@5[6].#text/0@0.#childScope/0@4.uid"
>
  0
</label>
<input
  id="sM_.#childScope/0@5[6].#text/0@0.#childScope/0@4.uid"
/>
<label
  for="sM_.#childScope/0@5[7].#text/0@0.#childScope/0@4.uid"
>
  1
</label>
<input
  id="sM_.#childScope/0@5[7].#text/0@0.#childScope/0@4.uid"
/>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "a" => "c"
INSERT: #sM_.#childScope/0@5[0].#text/0@0.#childScope/0@1.uid + :is(label, #sM_.#childScope/0@5[1].#text/0@0.#childScope/0@2.uid)
REMOVE: #sM_.#childScope/0@5[1].#text/0@0.#childScope/0@2.uid + label
REMOVE: #sM_.#childScope/0@5[1].#text/0@0.#childScope/0@2.uid + #sM_.#childScope/0@5[1].#text/0@0.#childScope/0@1.uid
UPDATE: label:nth-of-type(2)[for] null => "sM_.#childScope/0@5[1].#text/0@0.#childScope/0@2.uid"
UPDATE: #sM_.#childScope/0@5[1].#text/0@0.#childScope/0@2.uid[id] null => "sM_.#childScope/0@5[1].#text/0@0.#childScope/0@2.uid"
UPDATE: label:nth-of-type(2)::text " " => "b"
UPDATE: label:nth-of-type(3)::text "a" => "c"
INSERT: #sM_.#childScope/0@5[4].#text/0@0.#childScope/0@3.uid + :is(label, #sM_.#childScope/0@5[5].#text/0@0.#childScope/0@3.uid)
REMOVE: #sM_.#childScope/0@5[5].#text/0@0.#childScope/0@3.uid + label
REMOVE: #sM_.#childScope/0@5[5].#text/0@0.#childScope/0@3.uid + #sM_.#childScope/0@5[5].#text/0@0.#childScope/0@4.uid
UPDATE: label:nth-of-type(6)[for] null => "sM_.#childScope/0@5[5].#text/0@0.#childScope/0@3.uid"
UPDATE: #sM_.#childScope/0@5[5].#text/0@0.#childScope/0@3.uid[id] null => "sM_.#childScope/0@5[5].#text/0@0.#childScope/0@3.uid"
UPDATE: label:nth-of-type(6)::text " " => "2"
INSERT: #sM_.#childScope/0@5[5].#text/0@0.#childScope/0@3.uid + :is(label, #sM_.#childScope/0@5[6].#text/0@0.#childScope/0@4.uid)
INSERT: #sM_.#childScope/0@5[6].#text/0@0.#childScope/0@4.uid + :is(label, #sM_.#childScope/0@5[7].#text/0@0.#childScope/0@4.uid)
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
assert(ids.size > 0);
}
```
