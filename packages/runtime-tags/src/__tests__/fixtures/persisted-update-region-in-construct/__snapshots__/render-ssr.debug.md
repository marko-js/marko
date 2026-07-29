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
assert.equal(
document.querySelector("section.b ul")?.textContent,
"spec onespec two",
  );
  assert.equal(document.querySelector("button.sticky")?.textContent, "s0");
```

# Update
```js
assert.equal(document.querySelectorAll("div.review").length, 3);
assert.equal(
  document.querySelector("div.review")?.textContent,
  "review 1",
);
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
assert.equal(document.querySelector("button.sticky")?.textContent, "s1");
```

# Update update frame 1 of 2

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
```

# Update
```js
assert.equal(
document.querySelector("section.b ul")?.textContent,
"load oneload two",
  );
  // The stateful sibling survived the region swap beside it.
  assert.equal(document.querySelector("button.sticky")?.textContent, "s1");
```
