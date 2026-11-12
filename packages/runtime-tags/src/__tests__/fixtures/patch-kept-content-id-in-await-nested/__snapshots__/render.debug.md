# Render `{"show":false,"label":"a","p":{}}`

# Update `{"show":true,"label":"b","p":{"value":"y"}}`
```html
<section>
  <button>
    clear
  </button>
  <section>
    <button>
      clear
    </button>
    <input
      id="sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/1@0.uid"
    />
    <label
      for="sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/1@0.uid"
    >
      yb
    </label>
    <input
      id="sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/2@1.uid"
    />
    <label
      for="sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/2@1.uid"
    >
      yb
    </label>
  </section>
  <section>
    <button>
      clear
    </button>
    <input
      id="sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/1@0.uid"
    />
    <label
      for="sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/1@0.uid"
    >
      yb
    </label>
    <input
      id="sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/2@1.uid"
    />
    <label
      for="sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/2@1.uid"
    >
      yb
    </label>
  </section>
</section>
```
## Change
```
INSERT: section
INSERT: section > section:nth-of-type(1) > button + :is(#sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/1@0.uid, label)
INSERT: section > section:nth-of-type(1) > label:nth-of-type(1) + :is(#sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/2@1.uid, label)
INSERT: section > section:nth-of-type(2) > button + :is(#sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/1@0.uid, label)
INSERT: section > section:nth-of-type(2) > label:nth-of-type(1) + :is(#sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/2@1.uid, label)
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

# Update `{"show":true,"label":"c","p":{"value":"z"}}`
```html
<section>
  <button>
    clear
  </button>
  <section>
    <button>
      clear
    </button>
    <input
      id="sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/1@0.uid"
    />
    <label
      for="sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/1@0.uid"
    >
      zc
    </label>
    <input
      id="sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/2@1.uid"
    />
    <label
      for="sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/2@1.uid"
    >
      zc
    </label>
  </section>
  <section>
    <button>
      clear
    </button>
    <input
      id="sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/1@0.uid"
    />
    <label
      for="sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/1@0.uid"
    >
      zc
    </label>
    <input
      id="sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/2@1.uid"
    />
    <label
      for="sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/2@1.uid"
    >
      zc
    </label>
  </section>
</section>
```
## Change
```
REMOVE: section > section:nth-of-type(1) > button + #sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/1@0.uid
REMOVE: #sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/1@0.uid + label
REMOVE: section > section:nth-of-type(1) > label:nth-of-type(1) + #sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/2@1.uid
REMOVE: #sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/2@1.uid + label
REMOVE: section > section:nth-of-type(2) > button + #sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/1@0.uid
REMOVE: #sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/1@0.uid + label
REMOVE: section > section:nth-of-type(2) > label:nth-of-type(1) + #sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/2@1.uid
REMOVE: #sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/2@1.uid + label
INSERT: section > section:nth-of-type(1) > button + :is(#sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/1@0.uid, label)
INSERT: section > section:nth-of-type(1) > label:nth-of-type(1) + :is(#sM_.#childScope/0@1.#text/1@0.#childScope/0@0.#text/2@1.uid, label)
INSERT: section > section:nth-of-type(2) > button + :is(#sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/1@0.uid, label)
INSERT: section > section:nth-of-type(2) > label:nth-of-type(1) + :is(#sM_.#childScope/0@1.#text/2@1.#childScope/0@0.#text/2@1.uid, label)
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
