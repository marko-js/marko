# Render `{"$global":{"persisted":true,"filter":"All"}}`
```html
<section>
  <h2>
    parent-alpha-marker
  </h2>
  <button
    data-key="parent-alpha-marker:shared-item"
  >
    watch
  </button>
  <button
    data-key="parent-alpha-marker:alpha-item"
  >
    watch
  </button>
</section>
<section>
  <h2>
    parent-beta-marker
  </h2>
  <button
    data-key="parent-beta-marker:shared-item"
  >
    watch
  </button>
  <button
    data-key="parent-beta-marker:beta-item"
  >
    watch
  </button>
</section>
```

# Update
```js
watchedNode = item(document);
watchedNode.click();
```
```html
<section>
  <h2>
    parent-alpha-marker
  </h2>
  <button
    data-key="parent-alpha-marker:shared-item"
  >
    watch
  </button>
  <button
    data-key="parent-alpha-marker:alpha-item"
  >
    watch
  </button>
</section>
<section>
  <h2>
    parent-beta-marker
  </h2>
  <button
    data-key="parent-beta-marker:shared-item"
  >
    watching
  </button>
  <button
    data-key="parent-beta-marker:beta-item"
  >
    watch
  </button>
</section>
```
## Change
```
UPDATE: section:nth-of-type(2) > button:nth-of-type(1)::text "watch" => "watching"
```

# Update `{"$global":{"persisted":true,"filter":"Beta"}}`
```html
<section>
  <h2>
    parent-beta-marker
  </h2>
  <button
    data-key="parent-beta-marker:shared-item"
  >
    watching
  </button>
</section>
```
## Change
```
REMOVE: section > button + button
REMOVE: section
```

# Update
```js
assert.strictEqual(item(document), watchedNode);
assert.equal(item(document).textContent, "watching");
```

# Update update frame 1 of 2

# Update `{"$global":{"persisted":true,"filter":"All"}}`
```html
<section>
  <h2>
    parent-alpha-marker
  </h2>
  <button
    data-key="parent-alpha-marker:shared-item"
  >
    watch
  </button>
  <button
    data-key="parent-alpha-marker:alpha-item"
  >
    watch
  </button>
</section>
<section>
  <h2>
    parent-beta-marker
  </h2>
  <button
    data-key="parent-beta-marker:shared-item"
  >
    watching
  </button>
  <button
    data-key="parent-beta-marker:beta-item"
  >
    watch
  </button>
</section>
```
## Change
```
INSERT: section:nth-of-type(2) > button:nth-of-type(1) + button
INSERT: section
```

# Update
```js
assert.strictEqual(item(document), watchedNode);
assert.equal(item(document).textContent, "watching");
```
