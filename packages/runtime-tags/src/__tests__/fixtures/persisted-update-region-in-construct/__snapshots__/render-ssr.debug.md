# Render `{"$global":{"persisted":true,"view":"a","kind":"spec"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="a"
>
  <p>
    alpha
  </p>
</section>
```

# Update update frame 1 of 2
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="b"
>
  <ul>
    <li>
      spec one
    </li>
    <li>
      spec two
    </li>
  </ul>
  <button
    class="sticky"
  >
    s0
  </button>
  loading…
</section>
```
## Change
```
INSERT: .b
REMOVE: .count + section
INSERT: .b > ul > :is(li, li)
INSERT: .sticky + ::text("loading…")
UPDATE: .sticky::text@1 "" => "0"
```

# Update `{"$global":{"persisted":true,"view":"b","kind":"spec"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="b"
>
  <ul>
    <li>
      spec one
    </li>
    <li>
      spec two
    </li>
  </ul>
  <button
    class="sticky"
  >
    s0
  </button>
  <div
    class="reviews"
  >
    <div
      class="review"
    >
      review 1
    </div>
    <div
      class="review"
    >
      review 2
    </div>
    <div
      class="review"
    >
      review 3
    </div>
  </div>
</section>
```
## Change
```
INSERT: .sticky + .reviews
REMOVE: .reviews + ::text("loading…")
```

# Update
```js
_assert.default.equal(document.querySelector("section.b ul")?.textContent, "spec onespec two");
_assert.default.equal(document.querySelector("button.sticky")?.textContent, "s0");
```

# Update
```js
_assert.default.equal(document.querySelectorAll("div.review").length, 3);
_assert.default.equal(document.querySelector("div.review")?.textContent, "review 1");
```

# Update
```js
document.querySelector("button.sticky").click();
```
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="b"
>
  <ul>
    <li>
      spec one
    </li>
    <li>
      spec two
    </li>
  </ul>
  <button
    class="sticky"
  >
    s1
  </button>
  <div
    class="reviews"
  >
    <div
      class="review"
    >
      review 1
    </div>
    <div
      class="review"
    >
      review 2
    </div>
    <div
      class="review"
    >
      review 3
    </div>
  </div>
</section>
```
## Change
```
UPDATE: .sticky::text@1 "0" => "1"
```

# Update
```js
_assert.default.equal(document.querySelector("button.sticky")?.textContent, "s1");
```

# Update `{"$global":{"persisted":true,"view":"b","kind":"load"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="b"
>
  <ul>
    <li>
      load one
    </li>
    <li>
      load two
    </li>
  </ul>
  <button
    class="sticky"
  >
    s1
  </button>
  <div
    class="reviews"
  >
    <div
      class="review"
    >
      review 1
    </div>
    <div
      class="review"
    >
      review 2
    </div>
    <div
      class="review"
    >
      review 3
    </div>
  </div>
</section>
```
## Change
```
INSERT: .b > ul > :is(li, li)
REMOVE: .b > ul > li:nth-of-type(2) + li
REMOVE: .b > ul > li:nth-of-type(2) + li
INSERT: .reviews > :is(div, div, div)
REMOVE: .reviews > div:nth-of-type(3) + div
REMOVE: .reviews > div:nth-of-type(3) + div
REMOVE: .reviews > div:nth-of-type(3) + div
```

# Update
```js
_assert.default.equal(document.querySelector("section.b ul")?.textContent, "load oneload two");
// The stateful sibling survived the region swap beside it.
_assert.default.equal(document.querySelector("button.sticky")?.textContent, "s1");
```
