# Render `{"$global":{"persisted":true}}`
```html
<button>
  count 0
</button>
<p
  class="primary"
>
  primary
</p>
```

# Update
```js
assert.ok(document.querySelector("p.primary"));
process.env.MARKO_OPAQUE_IF_VIEW = "fallback";
```

# Update `{"$global":{"persisted":true}}`
```html
<button>
  count 0
</button>
<p
  class="fallback"
>
  fallback
</p>
```
## Change
```
INSERT: button + .fallback
REMOVE: .fallback + p
```

# Update
```js
assert.ok(
document.querySelector("p.fallback"),
"opaque structural read did not deliver its new selection",
  );
  assert.equal(document.querySelector("p.primary"), null);
  delete process.env.MARKO_OPAQUE_IF_VIEW;
```
