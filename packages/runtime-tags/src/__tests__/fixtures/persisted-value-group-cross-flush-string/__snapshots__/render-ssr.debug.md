# Render `{"cards":[{"id":"c1","name":"CARD-ONE"},{"id":"c2","name":"CARD-TWO"}],"note":{"stamp":"s1"},"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="cards"
>
  <li
    class="card"
  >
    <span
      class="name"
    >
      CARD-ONE
    </span>
    <button
      class="pin"
    >
      pin
    </button>
  </li>
  <li
    class="card"
  >
    <span
      class="name"
    >
      CARD-TWO
    </span>
    <button
      class="pin"
    >
      pin
    </button>
  </li>
</ul>
<p
  class="loading"
>
  loading…
</p>
```

# Update
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="cards"
>
  <li
    class="card"
  >
    <span
      class="name"
    >
      CARD-ONE
    </span>
    <button
      class="pin"
    >
      pin
    </button>
  </li>
  <li
    class="card"
  >
    <span
      class="name"
    >
      CARD-TWO
    </span>
    <button
      class="pin"
    >
      pin
    </button>
  </li>
</ul>
<p
  class="note"
>
  PRIORITY-SUPPORT-TIER-LABEL s1
</p>
```
## Change
```
INSERT: .note::text("PRIORITY-SUPPORT-TIER-LABEL")
INSERT: .note::text@0 + ::text(" ")
INSERT: .note::text@27 + ::text("s1")
REMOVE: p
INSERT: .cards + .note
```

# Update update frame 1 of 2

# Update `{"cards":[{"id":"c1","name":"CARD-ONE"},{"id":"c2","name":"CARD-TWO"}],"note":{"stamp":"s2"},"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="cards"
>
  <li
    class="card"
  >
    <span
      class="name"
    >
      CARD-ONE
    </span>
    <button
      class="pin"
    >
      pin
    </button>
  </li>
  <li
    class="card"
  >
    <span
      class="name"
    >
      CARD-TWO
    </span>
    <button
      class="pin"
    >
      pin
    </button>
  </li>
</ul>
<p
  class="note"
>
  PRIORITY-SUPPORT-TIER-LABEL s2
</p>
```
## Change
```
UPDATE: .note::text@28 "s1" => "s2"
```

# Update
```js
assert.equal(
document.querySelector("p.note")?.textContent,
`${LABEL} s2`,
  );
```

# Update
```js
document.querySelectorAll("button.pin")[0].click();
```
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="cards"
>
  <li
    class="card"
  >
    <span
      class="name"
    >
      CARD-ONE
    </span>
    <button
      class="pin"
    >
      pinned
    </button>
  </li>
  <li
    class="card"
  >
    <span
      class="name"
    >
      CARD-TWO
    </span>
    <button
      class="pin"
    >
      pin
    </button>
  </li>
</ul>
<p
  class="note"
>
  PRIORITY-SUPPORT-TIER-LABEL s2
</p>
```
## Change
```
UPDATE: .cards > li:nth-of-type(1) > button::text "pin" => "pinned"
```

# Update update frame 1 of 2

# Update `{"cards":[{"id":"c1","name":"CARD-ONE"},{"id":"c2","name":"CARD-TWO"}],"note":{"stamp":"s3"},"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="cards"
>
  <li
    class="card"
  >
    <span
      class="name"
    >
      CARD-ONE
    </span>
    <button
      class="pin"
    >
      pinned
    </button>
  </li>
  <li
    class="card"
  >
    <span
      class="name"
    >
      CARD-TWO
    </span>
    <button
      class="pin"
    >
      pin
    </button>
  </li>
</ul>
<p
  class="note"
>
  PRIORITY-SUPPORT-TIER-LABEL s3
</p>
```
## Change
```
UPDATE: .note::text@28 "s2" => "s3"
```

# Update
```js
assert.equal(
document.querySelector("p.note")?.textContent,
`${LABEL} s3`,
  );
  // Held card state survived the navigation.
  assert.deepEqual(
[...document.querySelectorAll("button.pin")].map(
  (el) => el.textContent,
),
["pinned", "pin"],
  );
```
