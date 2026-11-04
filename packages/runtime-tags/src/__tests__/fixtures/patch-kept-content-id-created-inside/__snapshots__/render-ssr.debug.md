# Render `{"label":"a","show":false,"items":[]}`
```html
<button>
  clear
</button>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
for (const label of document.querySelectorAll("label")) {
  assert(ids.has(label.htmlFor), "unmatched label " + label.htmlFor);
}
}
```

# Update `{"label":"b","show":true,"items":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="sM_.#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_.#childScope/0@0.#text/1@0.uid"
>
  b
</label>
<input
  id="sM_.#childScope/0@0.#text/1@0[1].rid"
/>
<label
  for="sM_.#childScope/0@0.#text/1@0[1].rid"
>
  1
</label>
<input
  id="sM_.#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_.#childScope/0@0.#text/2@1.uid"
>
  b
</label>
<input
  id="sM_.#childScope/0@0.#text/2@1[1].rid"
/>
<label
  for="sM_.#childScope/0@0.#text/2@1[1].rid"
>
  1
</label>
```
## Change
```
INSERT: button + #sM_.#childScope/0@0.#text/1@0.uid
INSERT: #sM_.#childScope/0@0.#text/1@0.uid + label
INSERT: label:nth-of-type(1) + :is(#sM_.#childScope/0@0.#text/1@0[1].rid, label)
UPDATE: #sM_.#childScope/0@0.#text/1@0[1].rid[id] null => "sM_.#childScope/0@0.#text/1@0[1].rid"
UPDATE: label:nth-of-type(2)[for] null => "sM_.#childScope/0@0.#text/1@0[1].rid"
UPDATE: label:nth-of-type(2)::text " " => "1"
INSERT: label:nth-of-type(2) + #sM_.#childScope/0@0.#text/2@1.uid
INSERT: #sM_.#childScope/0@0.#text/2@1.uid + label
INSERT: label:nth-of-type(3) + :is(#sM_.#childScope/0@0.#text/2@1[1].rid, label)
UPDATE: #sM_.#childScope/0@0.#text/2@1[1].rid[id] null => "sM_.#childScope/0@0.#text/2@1[1].rid"
UPDATE: label:nth-of-type(4)[for] null => "sM_.#childScope/0@0.#text/2@1[1].rid"
UPDATE: label:nth-of-type(4)::text " " => "1"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
for (const label of document.querySelectorAll("label")) {
  assert(ids.has(label.htmlFor), "unmatched label " + label.htmlFor);
}
}
```
