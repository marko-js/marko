# Render `{"label":"a","on":false}`
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

# Update `{"label":"b","on":true}`
```html
<button>
  clear
</button>
<input
  id="sM_.#childScope/0@1.#text/1@0.#text/0@0.uid"
/>
<label
  for="sM_.#childScope/0@1.#text/1@0.#text/0@0.uid"
>
  b
</label>
<input
  id="sM_.#childScope/0@1.#text/2@1.#text/0@0.uid"
/>
<label
  for="sM_.#childScope/0@1.#text/2@1.#text/0@0.uid"
>
  b
</label>
```
## Change
```
INSERT: button + :is(#sM_.#childScope/0@1.#text/1@0.#text/0@0.uid, label)
UPDATE: #sM_.#childScope/0@1.#text/1@0.#text/0@0.uid[id] null => "sM_.#childScope/0@1.#text/1@0.#text/0@0.uid"
UPDATE: label:nth-of-type(1)[for] null => "sM_.#childScope/0@1.#text/1@0.#text/0@0.uid"
UPDATE: label:nth-of-type(1)::text " " => "b"
INSERT: label:nth-of-type(1) + :is(#sM_.#childScope/0@1.#text/2@1.#text/0@0.uid, label)
UPDATE: #sM_.#childScope/0@1.#text/2@1.#text/0@0.uid[id] null => "sM_.#childScope/0@1.#text/2@1.#text/0@0.uid"
UPDATE: label:nth-of-type(2)[for] null => "sM_.#childScope/0@1.#text/2@1.#text/0@0.uid"
UPDATE: label:nth-of-type(2)::text " " => "b"
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
