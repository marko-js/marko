# Render `{"$global":{"persisted":true,"persistedHeldRegions":true,"view":"home"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<p
  class="home"
>
  welcome home
</p>
```

# Update `{"$global":{"persisted":true,"persistedHeldRegions":true,"persistedCrossRoute":true,"view":"item","title":"eco mount","stamp":"today","reviews":[1,2]}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<h2
  class="title"
>
  eco mount
</h2>
loading…
```
## Change
```
INSERT: .title
REMOVE: .count + p
UPDATE: .title::text " " => "eco mount"
INSERT: .title + ::text("loading…")
```

# Update
```js
assert.equal(reviews(document), 0);
```

# Update update frame 1 of 2
```html
<button
  class="count"
>
  clicked 0
</button>
<h2
  class="title"
>
  advanced tool
</h2>
loading…
```
## Change
```
UPDATE: .title::text "eco mount" => "advanced tool"
REMOVE: ::text("loading…")
INSERT: .title + ::text("loading…")
```

# Update `{"$global":{"persisted":true,"persistedHeldRegions":true,"view":"item","title":"advanced tool","stamp":"today","reviews":[1,2]}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<h2
  class="title"
>
  advanced tool
</h2>
<p
  class="updated"
>
  updated today
</p>
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
INSERT: .title + :is(.updated, .reviews)
REMOVE: .reviews + ::text("loading…")
```

# Update
```js
assert.equal(reviews(document), 2);
```

# Update update frame 1 of 3

# Update update frame 2 of 3

# Update `{"$global":{"persisted":true,"persistedHeldRegions":true,"view":"item","title":"eco mount","stamp":"tomorrow","reviews":[1,2]}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<h2
  class="title"
>
  eco mount
</h2>
<p
  class="updated"
>
  updated tomorrow
</p>
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
UPDATE: .title::text "advanced tool" => "eco mount"
UPDATE: .updated::text@8 "today" => "tomorrow"
```

# Update
```js
assert.equal(document.querySelector(".title")?.textContent, "eco mount");
assert.equal(
  document.querySelector(".updated")?.textContent,
  "updated tomorrow",
);
assert.equal(reviews(document), 2, "held region content must stay live");
```
