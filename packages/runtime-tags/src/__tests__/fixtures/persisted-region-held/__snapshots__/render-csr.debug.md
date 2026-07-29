# Render `{"promo":true,"promoText":"free shipping","$global":{"persisted":true,"persistedHeldRegions":true}}`
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

# Update `{"promo":true,"promoText":"free shipping","$global":{"persisted":true,"persistedHeldRegions":true}}`

# Update `{"promo":true,"promoText":"free shipping","$global":{"persisted":true,"persistedHeldRegions":true}}`

# Update
```js
assert.equal(promo(document), "sale! free shipping");
```

# Update `{"promo":true,"promoText":"free shipping","$global":{"persisted":true,"persistedHeldRegions":true}}`

# Update `{"promo":true,"promoText":"free shipping","$global":{"persisted":true,"persistedHeldRegions":true}}`

# Update
```js
assert.equal(promo(document), "sale! free shipping");
```

# Update
```js
document.querySelector("button.bump").click();
```
```html
<button
  class="bump"
>
  2
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
UPDATE: .bump::text "1" => "2"
```

# Update `{"promo":true,"promoText":"20% off","$global":{"persisted":true,"persistedHeldRegions":true}}`
```html
<button
  class="bump"
>
  2
</button>
<div
  class="promo"
>
  <strong>
    sale!
  </strong>
   20% off
</div>
```
## Change
```
UPDATE: .promo::text@1 "free shipping" => "20% off"
```

# Update `{"promo":true,"promoText":"20% off","$global":{"persisted":true,"persistedHeldRegions":true}}`

# Update
```js
assert.equal(promo(document), "sale! 20% off");
```

# Update
```js
assert.equal(;
document.querySelector("button.bump")?.textContent,
"2",
"the live page must stay interactive across held navigations",
  )
```
