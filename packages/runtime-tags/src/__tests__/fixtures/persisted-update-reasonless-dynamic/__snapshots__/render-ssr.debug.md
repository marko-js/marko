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
process.env.MARKO_REASONLESS_TAG_COUNT = "1";
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
INSERT: .fallback
REMOVE: button + p
```

# Update
```js
assert.notEqual(!!document.querySelector("p.primary"), wasPrimary);
assert.equal(!!document.querySelector("p.fallback"), wasPrimary);
delete process.env.MARKO_REASONLESS_TAG_COUNT;
```
