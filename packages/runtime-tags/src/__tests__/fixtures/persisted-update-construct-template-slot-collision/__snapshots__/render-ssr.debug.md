# Render `{"$global":{"persisted":true,"nativeTag":"aside","parentItems":[{"id":"same"}],"childItems":[]}}`
```html
<button>
  0
</button>
<p>
  parent same
</p>
<aside>
  dynamic
</aside>
```

# Update
```js
dynamicNode = document.querySelector("aside");
```

# Update `{"$global":{"persisted":true,"nativeTag":"aside","parentItems":[{"id":"same"}],"childItems":[{"id":"same"}]}}`
```html
<button>
  0
</button>
<p>
  parent same
</p>
<p
  data-child="same"
>
  child same
</p>
dynamic
<aside />
```
## Change
```
INSERT: button + p
REMOVE: p:nth-of-type(1) + p
INSERT: p:nth-of-type(1) + p
INSERT: p:nth-of-type(2) + ::text("dynamic")
REMOVE: aside::text("dynamic")
```

# Update
```js
assert.equal(
document.querySelector('[data-child="same"]')?.textContent,
"child same",
  );
  assert.strictEqual(document.querySelector("aside"), dynamicNode);
```
