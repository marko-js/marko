# Render `{"promo":true,"promoText":"free shipping","$global":{"persisted":true,"persistedHeldRegions":true,"persistedToken":true}}`
```html
<button
  class="bump"
>
  1
</button>
<div
  class="promo"
>
  <strong>
    sale!
  </strong>
   free shipping
</div>
```

# Update `{"promo":true,"promoText":"free shipping","$global":{"persisted":true,"persistedHeldRegions":true,"persistedToken":true}}`
```html
<button
  class="bump"
>
  1
</button>
<div
  class="promo"
>
  <strong>
    sale!
  </strong>
   free shipping
</div>
```
## Change
```
INSERT: .bump + .promo
REMOVE: .promo + .promo
```

# Update update frame 1 of 2

# Update `{"promo":true,"promoText":"free shipping","$global":{"persisted":true,"persistedHeldRegions":true,"persistedToken":true}}`

# Update
```js
assert.equal(
document.querySelector(".promo")?.textContent,
"sale! free shipping",
  );
  // Guards the checks above against passing vacuously.
  assert.ok(seenRegionIds > 0, "no region identity was inspected");
```
