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
dynamicNode = container.querySelector("aside");
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
<aside>
  dynamic
</aside>
```
## Change
```
INSERT: p:nth-of-type(1) + p
```

# Update
```js
_assert.default.equal(container.querySelector('[data-child="same"]')?.textContent, "child same");
_assert.default.strictEqual(container.querySelector("aside"), dynamicNode);
```
