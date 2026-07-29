# Render `{"title":"T0","note":"N0","items":[{"id":"a","label":"a0"},{"id":"b","label":"b0"}],"tags":["x","y"],"$global":{"persisted":true}}`
```html
<h1
  class="title"
>
  T0
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    a0
  </li>
  <li
    class="item"
  >
    b0
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    N0
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
  </ol>
</section>
```

# Update `{"title":"T0","note":"N0","items":[{"id":"a","label":"a0"},{"id":"b","label":"b0"},{"id":"i1","label":"l1"}],"tags":["x","y"],"$global":{"persisted":true,"persistedHeldRegions":true}}`
```html
<h1
  class="title"
>
  T0
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    a0
  </li>
  <li
    class="item"
  >
    b0
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    N0
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .items > :is(li, li, li)
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T0
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    a0
  </li>
  <li
    class="item"
  >
    b0
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
```
## Change
```
REMOVE: .items + section
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T0
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    a0
  </li>
  <li
    class="item"
  >
    b0
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    N0
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .items + .details
UPDATE: .note::text " " => "N0"
INSERT: .tags > li
INSERT: .tags > li:nth-of-type(1) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update `{"title":"T2","note":"N0","items":[{"id":"a","label":"a0"},{"id":"b","label":"b0"},{"id":"i1","label":"l1"}],"tags":["x","y"],"$global":{"persisted":true,"persistedEcho":false}}`
```html
<h1
  class="title"
>
  T2
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    a0
  </li>
  <li
    class="item"
  >
    b0
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    N0
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
  </ol>
</section>
```
## Change
```
UPDATE: .title::text "T0" => "T2"
INSERT: .items > :is(li, li, li)
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update update frame 1 of 2

# Update `{"title":"T3","note":"N0","items":[{"id":"a","label":"a0"},{"id":"b","label":"b0"},{"id":"i1","label":"l1"}],"tags":["x","y"],"$global":{"persisted":true}}`
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    a0
  </li>
  <li
    class="item"
  >
    b0
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    N0
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
  </ol>
</section>
```
## Change
```
UPDATE: .title::text "T2" => "T3"
INSERT: .items > :is(li, li, li)
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    a0
  </li>
  <li
    class="item"
  >
    b0
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
```
## Change
```
REMOVE: .items + section
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update update frame 1 of 2

# Update `{"title":"T3","note":"H4","items":[{"id":"a","label":"a0"},{"id":"b","label":"b0"},{"id":"i1","label":"l1"}],"tags":["x","y","h4"],"$global":{"persisted":true}}`
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    a0
  </li>
  <li
    class="item"
  >
    b0
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
```
## Change
```
INSERT: .items > :is(li, li, li)
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update update frame 1 of 2

# Update `{"title":"T3","note":"H5","items":[{"id":"a","label":"a0"},{"id":"b","label":"b0"},{"id":"i1","label":"l1"}],"tags":["x","y","h4","h5"],"$global":{"persisted":true}}`
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    a0
  </li>
  <li
    class="item"
  >
    b0
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
```
## Change
```
INSERT: .items > :is(li, li, li)
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    a0
  </li>
  <li
    class="item"
  >
    b0
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    H5
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
    <li
      class="tag"
    >
      h4
    </li>
    <li
      class="tag"
    >
      h5
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .items + .details
UPDATE: .note::text " " => "H5"
INSERT: .tags > li
INSERT: .tags > li:nth-of-type(1) + li
INSERT: .tags > li:nth-of-type(2) + li
INSERT: .tags > li:nth-of-type(3) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    a0
  </li>
  <li
    class="item"
  >
    b0
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
```
## Change
```
REMOVE: .items + section
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    a0
  </li>
  <li
    class="item"
  >
    b0
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    H5
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
    <li
      class="tag"
    >
      h4
    </li>
    <li
      class="tag"
    >
      h5
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .items + .details
UPDATE: .note::text " " => "H5"
INSERT: .tags > li
INSERT: .tags > li:nth-of-type(1) + li
INSERT: .tags > li:nth-of-type(2) + li
INSERT: .tags > li:nth-of-type(3) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update update frame 1 of 2

# Update `{"title":"T3","note":"H5","items":[{"id":"a","label":"e6"},{"id":"b","label":"b0"},{"id":"i1","label":"l1"}],"tags":["x","y","h4","h5"],"$global":{"persisted":true}}`
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    b0
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    H5
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
    <li
      class="tag"
    >
      h4
    </li>
    <li
      class="tag"
    >
      h5
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .items > :is(li, li, li)
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    b0
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
```
## Change
```
REMOVE: .items + section
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    b0
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    H5
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
    <li
      class="tag"
    >
      h4
    </li>
    <li
      class="tag"
    >
      h5
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .items + .details
UPDATE: .note::text " " => "H5"
INSERT: .tags > li
INSERT: .tags > li:nth-of-type(1) + li
INSERT: .tags > li:nth-of-type(2) + li
INSERT: .tags > li:nth-of-type(3) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update `{"title":"T3","note":"H5","items":[{"id":"a","label":"e6"},{"id":"i1","label":"l1"}],"tags":["x","y","h4","h5"],"$global":{"persisted":true,"persistedEcho":false}}`
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    H5
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
    <li
      class="tag"
    >
      h4
    </li>
    <li
      class="tag"
    >
      h5
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .items > :is(li, li)
REMOVE: .items > li:nth-of-type(2) + li
REMOVE: .items > li:nth-of-type(2) + li
REMOVE: .items > li:nth-of-type(2) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
```
## Change
```
REMOVE: .items + section
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update update frame 1 of 2

# Update `{"title":"T3","note":"H8","items":[{"id":"a","label":"e6"},{"id":"i1","label":"l1"}],"tags":["x","y","h4","h5","h8"],"$global":{"persisted":true}}`
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
```
## Change
```
INSERT: .items > :is(li, li)
REMOVE: .items > li:nth-of-type(2) + li
REMOVE: .items > li:nth-of-type(2) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update update frame 1 of 2

# Update `{"title":"T3","note":"H9","items":[{"id":"a","label":"e6"},{"id":"i1","label":"l1"}],"tags":["x","y","h4","h5","h8","h9"],"$global":{"persisted":true}}`
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
```
## Change
```
INSERT: .items > :is(li, li)
REMOVE: .items > li:nth-of-type(2) + li
REMOVE: .items > li:nth-of-type(2) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    H9
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
    <li
      class="tag"
    >
      h4
    </li>
    <li
      class="tag"
    >
      h5
    </li>
    <li
      class="tag"
    >
      h8
    </li>
    <li
      class="tag"
    >
      h9
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .items + .details
UPDATE: .note::text " " => "H9"
INSERT: .tags > li
INSERT: .tags > li:nth-of-type(1) + li
INSERT: .tags > li:nth-of-type(2) + li
INSERT: .tags > li:nth-of-type(3) + li
INSERT: .tags > li:nth-of-type(4) + li
INSERT: .tags > li:nth-of-type(5) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 1
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    H9
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
    <li
      class="tag"
    >
      h4
    </li>
    <li
      class="tag"
    >
      h5
    </li>
    <li
      class="tag"
    >
      h8
    </li>
    <li
      class="tag"
    >
      h9
    </li>
  </ol>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update update frame 1 of 2

# Update `{"title":"T3","note":"N10","items":[{"id":"a","label":"e6"},{"id":"i1","label":"l1"}],"tags":["x","y","h4","h5","h8","h9"],"$global":{"persisted":true,"persistedHeldRegions":true}}`
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 1
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    N10
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
    <li
      class="tag"
    >
      h4
    </li>
    <li
      class="tag"
    >
      h5
    </li>
    <li
      class="tag"
    >
      h8
    </li>
    <li
      class="tag"
    >
      h9
    </li>
  </ol>
</section>
```
## Change
```
UPDATE: .note::text "H9" => "N10"
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update `{"title":"T3","note":"N11","items":[{"id":"a","label":"e6"},{"id":"i1","label":"l1"}],"tags":["x","y","h4","h5","h8","h9"],"$global":{"persisted":true,"persistedEcho":false}}`
```html
<h1
  class="title"
>
  T3
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 1
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    N11
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
    <li
      class="tag"
    >
      h4
    </li>
    <li
      class="tag"
    >
      h5
    </li>
    <li
      class="tag"
    >
      h8
    </li>
    <li
      class="tag"
    >
      h9
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .items > :is(li, li)
REMOVE: .items > li:nth-of-type(2) + li
REMOVE: .items > li:nth-of-type(2) + li
UPDATE: .note::text "N10" => "N11"
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update update frame 1 of 2

# Update `{"title":"T12","note":"N11","items":[{"id":"a","label":"e6"},{"id":"i1","label":"l1"}],"tags":["x","y","h4","h5","h8","h9"],"$global":{"persisted":true,"persistedHeldRegions":true}}`
```html
<h1
  class="title"
>
  T12
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 1
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    N11
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
    <li
      class="tag"
    >
      h4
    </li>
    <li
      class="tag"
    >
      h5
    </li>
    <li
      class="tag"
    >
      h8
    </li>
    <li
      class="tag"
    >
      h9
    </li>
  </ol>
</section>
```
## Change
```
UPDATE: .title::text "T3" => "T12"
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T12
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 1
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
```
## Change
```
REMOVE: .items + section
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<h1
  class="title"
>
  T12
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 2
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update update frame 1 of 2

# Update `{"title":"T12","note":"H13","items":[{"id":"a","label":"e6"},{"id":"i1","label":"l1"}],"tags":["x","y","h4","h5","h8","h9","h13"],"$global":{"persisted":true}}`
```html
<h1
  class="title"
>
  T12
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 2
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
```
## Change
```
INSERT: .items > :is(li, li)
REMOVE: .items > li:nth-of-type(2) + li
REMOVE: .items > li:nth-of-type(2) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update update frame 1 of 2

# Update `{"title":"T12","note":"H14","items":[{"id":"a","label":"e6"},{"id":"i1","label":"l1"}],"tags":["x","y","h4","h5","h8","h9","h13","h14"],"$global":{"persisted":true}}`
```html
<h1
  class="title"
>
  T12
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 2
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
```
## Change
```
INSERT: .items > :is(li, li)
REMOVE: .items > li:nth-of-type(2) + li
REMOVE: .items > li:nth-of-type(2) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T12
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 2
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e6
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    H14
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
    <li
      class="tag"
    >
      h4
    </li>
    <li
      class="tag"
    >
      h5
    </li>
    <li
      class="tag"
    >
      h8
    </li>
    <li
      class="tag"
    >
      h9
    </li>
    <li
      class="tag"
    >
      h13
    </li>
    <li
      class="tag"
    >
      h14
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .items + .details
UPDATE: .note::text " " => "H14"
INSERT: .tags > li
INSERT: .tags > li:nth-of-type(1) + li
INSERT: .tags > li:nth-of-type(2) + li
INSERT: .tags > li:nth-of-type(3) + li
INSERT: .tags > li:nth-of-type(4) + li
INSERT: .tags > li:nth-of-type(5) + li
INSERT: .tags > li:nth-of-type(6) + li
INSERT: .tags > li:nth-of-type(7) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update update frame 1 of 2

# Update `{"title":"T12","note":"H14","items":[{"id":"a","label":"e15"},{"id":"i1","label":"l1"}],"tags":["x","y","h4","h5","h8","h9","h13","h14"],"$global":{"persisted":true}}`
```html
<h1
  class="title"
>
  T12
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 2
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e15
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    H14
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
    <li
      class="tag"
    >
      h4
    </li>
    <li
      class="tag"
    >
      h5
    </li>
    <li
      class="tag"
    >
      h8
    </li>
    <li
      class="tag"
    >
      h9
    </li>
    <li
      class="tag"
    >
      h13
    </li>
    <li
      class="tag"
    >
      h14
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .items > :is(li, li)
REMOVE: .items > li:nth-of-type(2) + li
REMOVE: .items > li:nth-of-type(2) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T12
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 2
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e15
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
```
## Change
```
REMOVE: .items + section
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<h1
  class="title"
>
  T12
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 3
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e15
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "2" => "3"
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T12
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 3
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e15
  </li>
  <li
    class="item"
  >
    l1
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    H14
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
    <li
      class="tag"
    >
      h4
    </li>
    <li
      class="tag"
    >
      h5
    </li>
    <li
      class="tag"
    >
      h8
    </li>
    <li
      class="tag"
    >
      h9
    </li>
    <li
      class="tag"
    >
      h13
    </li>
    <li
      class="tag"
    >
      h14
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .items + .details
UPDATE: .note::text " " => "H14"
INSERT: .tags > li
INSERT: .tags > li:nth-of-type(1) + li
INSERT: .tags > li:nth-of-type(2) + li
INSERT: .tags > li:nth-of-type(3) + li
INSERT: .tags > li:nth-of-type(4) + li
INSERT: .tags > li:nth-of-type(5) + li
INSERT: .tags > li:nth-of-type(6) + li
INSERT: .tags > li:nth-of-type(7) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update update frame 1 of 2

# Update `{"title":"T12","note":"H14","items":[{"id":"a","label":"e15"},{"id":"i1","label":"l1"},{"id":"i16","label":"l16"}],"tags":["x","y","h4","h5","h8","h9","h13","h14"],"$global":{"persisted":true,"persistedHeldRegions":true}}`
```html
<h1
  class="title"
>
  T12
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 3
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e15
  </li>
  <li
    class="item"
  >
    l1
  </li>
  <li
    class="item"
  >
    l16
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    H14
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
    <li
      class="tag"
    >
      h4
    </li>
    <li
      class="tag"
    >
      h5
    </li>
    <li
      class="tag"
    >
      h8
    </li>
    <li
      class="tag"
    >
      h9
    </li>
    <li
      class="tag"
    >
      h13
    </li>
    <li
      class="tag"
    >
      h14
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .items > :is(li, li, li)
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T12
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 3
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e15
  </li>
  <li
    class="item"
  >
    l1
  </li>
  <li
    class="item"
  >
    l16
  </li>
</ul>
```
## Change
```
REMOVE: .items + section
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update update frame 1 of 2

# Update `{"title":"T12","note":"H17","items":[{"id":"a","label":"e15"},{"id":"i1","label":"l1"},{"id":"i16","label":"l16"}],"tags":["x","y","h4","h5","h8","h9","h13","h14","h17"],"$global":{"persisted":true}}`
```html
<h1
  class="title"
>
  T12
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 3
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e15
  </li>
  <li
    class="item"
  >
    l1
  </li>
  <li
    class="item"
  >
    l16
  </li>
</ul>
```
## Change
```
INSERT: .items > :is(li, li, li)
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update update frame 1 of 2

# Update `{"title":"T12","note":"H18","items":[{"id":"a","label":"e15"},{"id":"i1","label":"l1"},{"id":"i16","label":"l16"}],"tags":["x","y","h4","h5","h8","h9","h13","h14","h17","h18"],"$global":{"persisted":true}}`
```html
<h1
  class="title"
>
  T12
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 3
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e15
  </li>
  <li
    class="item"
  >
    l1
  </li>
  <li
    class="item"
  >
    l16
  </li>
</ul>
```
## Change
```
INSERT: .items > :is(li, li, li)
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
REMOVE: .items > li:nth-of-type(3) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<h1
  class="title"
>
  T12
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 3
</button>
<ul
  class="items"
>
  <li
    class="item"
  >
    e15
  </li>
  <li
    class="item"
  >
    l1
  </li>
  <li
    class="item"
  >
    l16
  </li>
</ul>
<section
  class="details"
>
  <p
    class="note"
  >
    H18
  </p>
  <ol
    class="tags"
  >
    <li
      class="tag"
    >
      x
    </li>
    <li
      class="tag"
    >
      y
    </li>
    <li
      class="tag"
    >
      h4
    </li>
    <li
      class="tag"
    >
      h5
    </li>
    <li
      class="tag"
    >
      h8
    </li>
    <li
      class="tag"
    >
      h9
    </li>
    <li
      class="tag"
    >
      h13
    </li>
    <li
      class="tag"
    >
      h14
    </li>
    <li
      class="tag"
    >
      h17
    </li>
    <li
      class="tag"
    >
      h18
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .items + .details
UPDATE: .note::text " " => "H18"
INSERT: .tags > li
INSERT: .tags > li:nth-of-type(1) + li
INSERT: .tags > li:nth-of-type(2) + li
INSERT: .tags > li:nth-of-type(3) + li
INSERT: .tags > li:nth-of-type(4) + li
INSERT: .tags > li:nth-of-type(5) + li
INSERT: .tags > li:nth-of-type(6) + li
INSERT: .tags > li:nth-of-type(7) + li
INSERT: .tags > li:nth-of-type(8) + li
INSERT: .tags > li:nth-of-type(9) + li
```

# Update
```js
assert.deepEqual(
actual(document),
want,
`diverged at step ${at} (seed ${SEED})`,
);
```
