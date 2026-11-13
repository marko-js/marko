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
      id="cM_0"
    />
    <label
      for="cM_0"
    >
      yb
    </label>
    <input
      id="cM_1"
    />
    <label
      for="cM_1"
    >
      yb
    </label>
  </section>
  <section>
    <button>
      clear
    </button>
    <input
      id="cM_2"
    />
    <label
      for="cM_2"
    >
      yb
    </label>
    <input
      id="cM_3"
    />
    <label
      for="cM_3"
    >
      yb
    </label>
  </section>
</section>
```
## Change
```
INSERT: section
INSERT: section > section:nth-of-type(1) > button + :is(#cM_0, label)
UPDATE: section > section:nth-of-type(1) > label:nth-of-type(1)::text@0 "" => "y"
UPDATE: section > section:nth-of-type(1) > label:nth-of-type(1)::text@1 "" => "b"
INSERT: section > section:nth-of-type(1) > label:nth-of-type(1) + :is(#cM_1, label)
UPDATE: section > section:nth-of-type(1) > label:nth-of-type(2)::text@0 "" => "y"
UPDATE: section > section:nth-of-type(1) > label:nth-of-type(2)::text@1 "" => "b"
INSERT: section > section:nth-of-type(2) > button + :is(#cM_2, label)
UPDATE: section > section:nth-of-type(2) > label:nth-of-type(1)::text@0 "" => "y"
UPDATE: section > section:nth-of-type(2) > label:nth-of-type(1)::text@1 "" => "b"
INSERT: section > section:nth-of-type(2) > label:nth-of-type(1) + :is(#cM_3, label)
UPDATE: section > section:nth-of-type(2) > label:nth-of-type(2)::text@0 "" => "y"
UPDATE: section > section:nth-of-type(2) > label:nth-of-type(2)::text@1 "" => "b"
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
      id="cM_0"
    />
    <label
      for="cM_0"
    >
      zc
    </label>
    <input
      id="cM_1"
    />
    <label
      for="cM_1"
    >
      zc
    </label>
  </section>
  <section>
    <button>
      clear
    </button>
    <input
      id="cM_2"
    />
    <label
      for="cM_2"
    >
      zc
    </label>
    <input
      id="cM_3"
    />
    <label
      for="cM_3"
    >
      zc
    </label>
  </section>
</section>
```
## Change
```
REMOVE: section > section:nth-of-type(1) > button + #cM_0
REMOVE: #cM_0 + label
REMOVE: section > section:nth-of-type(1) > label:nth-of-type(1) + #cM_1
REMOVE: #cM_1 + label
REMOVE: section > section:nth-of-type(2) > button + #cM_2
REMOVE: #cM_2 + label
REMOVE: section > section:nth-of-type(2) > label:nth-of-type(1) + #cM_3
REMOVE: #cM_3 + label
INSERT: section > section:nth-of-type(1) > button + :is(#cM_0, label)
INSERT: section > section:nth-of-type(1) > label:nth-of-type(1) + :is(#cM_1, label)
INSERT: section > section:nth-of-type(2) > button + :is(#cM_2, label)
INSERT: section > section:nth-of-type(2) > label:nth-of-type(1) + :is(#cM_3, label)
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
