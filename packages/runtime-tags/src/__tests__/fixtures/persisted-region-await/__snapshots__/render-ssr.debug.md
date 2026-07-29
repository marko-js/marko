# Render `{"reviews":[1,2],"$global":{"persisted":true,"persistedHeldRegions":true}}`
```html
<button
  class="bump"
>
  1
</button>
loading…
```

# Update
```html
<button
  class="bump"
>
  1
</button>
<div
  class="reviews"
>
  <div
    class="review"
  >
    review number 1 is static
  </div>
  <div
    class="review"
  >
    review number 2 is static
  </div>
</div>
```
## Change
```
INSERT: .reviews > div
INSERT: .reviews > div:nth-of-type(1)::text("review number ")
INSERT: .reviews > div:nth-of-type(1)::text@0 + ::text("1")
INSERT: .reviews > div:nth-of-type(1)::text@14 + ::text(" is static")
INSERT: .reviews > div:nth-of-type(1) + div
INSERT: .reviews > div:nth-of-type(2)::text("review number ")
INSERT: .reviews > div:nth-of-type(2)::text@0 + ::text("2")
INSERT: .reviews > div:nth-of-type(2)::text@14 + ::text(" is static")
REMOVE: ::text("loading…")
INSERT: .bump + .reviews
```

# Update update frame 1 of 2

# Update `{"reviews":[1,2],"$global":{"persisted":true,"persistedHeldRegions":true}}`
```html
<button
  class="bump"
>
  1
</button>
<div
  class="reviews"
>
  <div
    class="review"
  >
    review number 1 is static
  </div>
  <div
    class="review"
  >
    review number 2 is static
  </div>
</div>
```
## Change
```
INSERT: .reviews > :is(div, div)
REMOVE: .reviews > div:nth-of-type(2) + div
REMOVE: .reviews > div:nth-of-type(2) + div
```

# Update update frame 1 of 2

# Update `{"reviews":[1,2],"$global":{"persisted":true,"persistedHeldRegions":true}}`

# Update
```js
assert.equal(;
[...document.querySelectorAll(".review")].length,
2,
"awaited region content must stay live",
  )
```
