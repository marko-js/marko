# Render `{"show":false,"label":"a"}`

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```

# Update `{"show":true,"label":"b"}`
```html
<button>
  x
</button>
<button>
  clear
</button>
<input
  id="sM_.#childScope/0@0.#childScope/1@0.#text/1@0.uid"
/>
<label
  for="sM_.#childScope/0@0.#childScope/1@0.#text/1@0.uid"
>
  b
</label>
<p>
  <input
    id="sM_.#childScope/0@0.#childScope/1@0.#childScope/2@1.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/1@0.#childScope/2@1.#text/0@0.uid"
  >
    b
  </label>
</p>
<p>
  <input
    id="sM_.#childScope/0@0.#childScope/1@0.#childScope/3@2.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/1@0.#childScope/3@2.#text/0@0.uid"
  >
    b
  </label>
</p>
```
## Change
```
INSERT: button, button, #sM_.#childScope/0@0.#childScope/1@0.#text/1@0.uid, label, p, p
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  x
</button>
<button>
  clear
</button>
<input
  id="sM_.#childScope/0@0.#childScope/1@0.#text/1@0.uid"
/>
<label
  for="sM_.#childScope/0@0.#childScope/1@0.#text/1@0.uid"
>
  c
</label>
<p>
  <input
    id="sM_.#childScope/0@0.#childScope/1@0.#childScope/2@1.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/1@0.#childScope/2@1.#text/0@0.uid"
  >
    c
  </label>
</p>
<p>
  <input
    id="sM_.#childScope/0@0.#childScope/1@0.#childScope/3@2.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/1@0.#childScope/3@2.#text/0@0.uid"
  >
    c
  </label>
</p>
```
## Change
```
UPDATE: label::text "b" => "c"
UPDATE: p:nth-of-type(1) > label::text "b" => "c"
UPDATE: p:nth-of-type(2) > label::text "b" => "c"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```

# Update
```js
d.querySelectorAll("button")[1]?.click();
```
```html
<button>
  x
</button>
<button>
  clear
</button>
<p>
  <input
    id="sM_.#childScope/0@0.#childScope/1@0.#childScope/2@1.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/1@0.#childScope/2@1.#text/0@0.uid"
  >
    c
  </label>
</p>
<p>
  <input
    id="sM_.#childScope/0@0.#childScope/1@0.#childScope/3@2.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/1@0.#childScope/3@2.#text/0@0.uid"
  >
    c
  </label>
</p>
```
## Change
```
REMOVE: button:nth-of-type(2) + #sM_.#childScope/0@0.#childScope/1@0.#text/1@0.uid
REMOVE: button:nth-of-type(2) + label
```

# Update `{"show":true,"label":"d"}`
```html
<button>
  x
</button>
<button>
  clear
</button>
<p>
  <input
    id="sM_.#childScope/0@0.#childScope/1@0.#childScope/2@1.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/1@0.#childScope/2@1.#text/0@0.uid"
  >
    d
  </label>
</p>
<p>
  <input
    id="sM_.#childScope/0@0.#childScope/1@0.#childScope/3@2.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/1@0.#childScope/3@2.#text/0@0.uid"
  >
    d
  </label>
</p>
```
## Change
```
UPDATE: p:nth-of-type(1) > label::text "c" => "d"
UPDATE: p:nth-of-type(2) > label::text "c" => "d"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```
