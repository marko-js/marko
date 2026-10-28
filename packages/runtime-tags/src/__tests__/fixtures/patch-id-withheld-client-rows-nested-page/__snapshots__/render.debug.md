# Render `{"show":false,"label":"a"}`
```html
<button>
  x
</button>
<section />
<section />
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

# Update `{"show":true,"label":"b"}`
```html
<button>
  x
</button>
<section>
  <input
    id="sM_.#childScope/0@0^[\"packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-client-rows-nested-page/template.marko_1*content\"].uid"
  />
  <label
    for="sM_.#childScope/0@0^[\"packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-client-rows-nested-page/template.marko_1*content\"].uid"
  >
    b
  </label>
</section>
<section />
```
## Change
```
INSERT: section:nth-of-type(1) > :is(#sM_.#childScope/0@0^["packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-client-rows-nested-page/template.marko_1*content"].uid, label)
```
## Console
```
ERROR Error: A patch gave kept content's `<id>` to more than one instance it creates: the page loads the URL as a document instead.
```

## Patch rejected (navigate)

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
<section>
  <input
    id="sM_.#childScope/0@0^[\"packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-client-rows-nested-page/template.marko_1*content\"].uid"
  />
  <label
    for="sM_.#childScope/0@0^[\"packages/runtime-tags/src/__tests__/fixtures/patch-id-withheld-client-rows-nested-page/template.marko_1*content\"].uid"
  >
    c
  </label>
</section>
<section />
```
## Change
```
UPDATE: section:nth-of-type(1) > label::text "b" => "c"
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
