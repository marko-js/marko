# Render `{"summary":"SUM 1","entries":[{"id":"e1","text":"entry one"},{"id":"e2","text":"entry two"}],"$global":{"persisted":true}}`
```html
<button
  class="toggle"
>
  toggle
</button>
<section
  class="panel"
>
  loading
  <ol
    class="entries"
  >
    <li
      class="entry"
    >
      entry one
    </li>
    <li
      class="entry"
    >
      entry two
    </li>
  </ol>
</section>
```

# Update
```html
<button
  class="toggle"
>
  toggle
</button>
<section
  class="panel"
>
  <p
    class="summary"
  >
    SUM 1
  </p>
  <ol
    class="entries"
  >
    <li
      class="entry"
    >
      entry one
    </li>
    <li
      class="entry"
    >
      entry two
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .summary::text("SUM 1")
REMOVE: .panel::text("loading")
INSERT: .panel > .summary
```

# Update
```js
assert.equal(summary(document), "SUM 1");
assert.deepEqual(entries(document), ["entry one", "entry two"]);
```

# Update update frame 1 of 2
```html
<button
  class="toggle"
>
  toggle
</button>
<section
  class="panel"
>
  <p
    class="summary"
  >
    SUM 1
  </p>
  <ol
    class="entries"
  >
    <li
      class="entry"
    >
      entry one (edited)
    </li>
    <li
      class="entry"
    >
      entry two
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .entries > :is(li, li)
REMOVE: li + li
REMOVE: li + li
REMOVE: .entries > :is(li, li)
INSERT: .entries > li
INSERT: .entries > li:nth-of-type(1) + li
```

# Update `{"summary":"SUM 2","entries":[{"id":"e1","text":"entry one (edited)"},{"id":"e2","text":"entry two"}],"$global":{"persisted":true}}`
```html
<button
  class="toggle"
>
  toggle
</button>
<section
  class="panel"
>
  <p
    class="summary"
  >
    SUM 2
  </p>
  <ol
    class="entries"
  >
    <li
      class="entry"
    >
      entry one (edited)
    </li>
    <li
      class="entry"
    >
      entry two
    </li>
  </ol>
</section>
```
## Change
```
UPDATE: .summary::text "SUM 1" => "SUM 2"
REMOVE: .entries > :is(li, li)
INSERT: .entries > :is(li, li)
REMOVE: .entries > :is(li, li)
INSERT: .entries > li
INSERT: .entries > li:nth-of-type(1) + li
```

# Update
```js
assert.deepEqual(
entries(document),
["entry one (edited)", "entry two"],
"keyed loop inside a shown state-gated branch went stale",
  );
  assert.equal(
summary(document),
"SUM 2",
"await boundary inside a shown state-gated branch went stale",
  );
```

# Update update frame 1 of 2

# Update `{"summary":"SUM 3","entries":[{"id":"e0","text":"entry zero"},{"id":"e1","text":"entry one (edited)"},{"id":"e2","text":"entry two"}],"$global":{"persisted":true}}`
```html
<button
  class="toggle"
>
  toggle
</button>
<section
  class="panel"
>
  <p
    class="summary"
  >
    SUM 3
  </p>
  <ol
    class="entries"
  >
    <li
      class="entry"
    >
      entry zero
    </li>
    <li
      class="entry"
    >
      entry one (edited)
    </li>
    <li
      class="entry"
    >
      entry two
    </li>
  </ol>
</section>
```
## Change
```
UPDATE: .summary::text "SUM 2" => "SUM 3"
REMOVE: .entries > :is(li, li)
INSERT: .entries > :is(li, li, li)
REMOVE: .entries > :is(li, li, li)
INSERT: .entries > li
INSERT: .entries > li:nth-of-type(1) + li
INSERT: .entries > li:nth-of-type(2) + li
```

# Update
```js
assert.deepEqual(entries(document), [
"entry zero",
"entry one (edited)",
"entry two",
  ]);
  assert.equal(summary(document), "SUM 3");
```
