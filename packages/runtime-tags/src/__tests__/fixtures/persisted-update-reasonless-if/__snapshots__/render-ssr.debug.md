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
wasPrimary = !!document.querySelector("p.primary");
process.env.MARKO_REASONLESS_IF_COUNT = "1";
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
_assert.default.notEqual(!!document.querySelector("p.primary"), wasPrimary);
_assert.default.equal(!!document.querySelector("p.fallback"), wasPrimary);
delete process.env.MARKO_REASONLESS_IF_COUNT;
```
