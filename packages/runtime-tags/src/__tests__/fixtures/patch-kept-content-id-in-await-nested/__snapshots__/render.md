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
      id="sM_VUUUA"
    />
    <label
      for="sM_VUUUA"
    >
      yb
    </label>
    <input
      id="sM_VUUVA"
    />
    <label
      for="sM_VUUVA"
    >
      yb
    </label>
  </section>
  <section>
    <button>
      clear
    </button>
    <input
      id="sM_VVUUA"
    />
    <label
      for="sM_VVUUA"
    >
      yb
    </label>
    <input
      id="sM_VVUVA"
    />
    <label
      for="sM_VVUVA"
    >
      yb
    </label>
  </section>
</section>
```
## Change
```
INSERT: section
INSERT: section > section:nth-of-type(1) > button + :is(#sM_VUUUA, label)
INSERT: section > section:nth-of-type(1) > label:nth-of-type(1) + :is(#sM_VUUVA, label)
INSERT: section > section:nth-of-type(2) > button + :is(#sM_VVUUA, label)
INSERT: section > section:nth-of-type(2) > label:nth-of-type(1) + :is(#sM_VVUVA, label)
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
      id="sM_VUUUA"
    />
    <label
      for="sM_VUUUA"
    >
      zc
    </label>
    <input
      id="sM_VUUVA"
    />
    <label
      for="sM_VUUVA"
    >
      zc
    </label>
  </section>
  <section>
    <button>
      clear
    </button>
    <input
      id="sM_VVUUA"
    />
    <label
      for="sM_VVUUA"
    >
      zc
    </label>
    <input
      id="sM_VVUVA"
    />
    <label
      for="sM_VVUVA"
    >
      zc
    </label>
  </section>
</section>
```
## Change
```
REMOVE: section > section:nth-of-type(1) > button + #sM_VUUUA
REMOVE: #sM_VUUUA + label
REMOVE: section > section:nth-of-type(1) > label:nth-of-type(1) + #sM_VUUVA
REMOVE: #sM_VUUVA + label
REMOVE: section > section:nth-of-type(2) > button + #sM_VVUUA
REMOVE: #sM_VVUUA + label
REMOVE: section > section:nth-of-type(2) > label:nth-of-type(1) + #sM_VVUVA
REMOVE: #sM_VVUVA + label
INSERT: section > section:nth-of-type(1) > button + :is(#sM_VUUUA, label)
INSERT: section > section:nth-of-type(1) > label:nth-of-type(1) + :is(#sM_VUUVA, label)
INSERT: section > section:nth-of-type(2) > button + :is(#sM_VVUUA, label)
INSERT: section > section:nth-of-type(2) > label:nth-of-type(1) + :is(#sM_VVUVA, label)
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
