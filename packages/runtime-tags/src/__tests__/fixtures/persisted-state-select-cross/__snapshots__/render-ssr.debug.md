# Render `{"a":"note a v1","b":"note b v1","rowsA":[{"id":"r1","text":"a-one"},{"id":"r2","text":"a-two"}],"rowsB":[{"id":"r9","text":"b-one"}],"$global":{"persisted":true}}`
```html
<button
  class="a"
>
  A
</button>
<button
  class="b"
>
  B
</button>
<section
  class="pane-a"
>
  loading a
  <ol
    class="rows-a"
  >
    <li
      class="row-a"
    >
      a-one
    </li>
    <li
      class="row-a"
    >
      a-two
    </li>
  </ol>
</section>
```

# Update
```html
<button
  class="a"
>
  A
</button>
<button
  class="b"
>
  B
</button>
<section
  class="pane-a"
>
  <p
    class="note-a"
  >
    note a v1
  </p>
  <ol
    class="rows-a"
  >
    <li
      class="row-a"
    >
      a-one
    </li>
    <li
      class="row-a"
    >
      a-two
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .note-a::text("note a v1")
REMOVE: .pane-a::text("loading a")
INSERT: .pane-a > .note-a
```

# Update update frame 1 of 2
```html
<button
  class="a"
>
  A
</button>
<button
  class="b"
>
  B
</button>
<section
  class="pane-a"
>
  <p
    class="note-a"
  >
    note a v1
  </p>
  <ol
    class="rows-a"
  >
    <li
      class="row-a"
    >
      a-one
    </li>
    <li
      class="row-a"
    >
      a-two
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .rows-a > :is(li, li)
REMOVE: li + li
REMOVE: li + li
REMOVE: .rows-a > :is(li, li)
INSERT: .rows-a > li
INSERT: .rows-a > li:nth-of-type(1) + li
```

# Update `{"a":"note a v1","b":"note b v1","rowsA":[{"id":"r1","text":"a-one"},{"id":"r2","text":"a-two"}],"rowsB":[{"id":"r9","text":"b-one"}],"$global":{"persisted":true}}`
```html
<button
  class="a"
>
  A
</button>
<button
  class="b"
>
  B
</button>
<section
  class="pane-a"
>
  <p
    class="note-a"
  >
    note a v1
  </p>
  <ol
    class="rows-a"
  >
    <li
      class="row-a"
    >
      a-one
    </li>
    <li
      class="row-a"
    >
      a-two
    </li>
  </ol>
</section>
```
## Change
```
REMOVE: .rows-a > :is(li, li)
INSERT: .rows-a > :is(li, li)
REMOVE: .rows-a > :is(li, li)
INSERT: .rows-a > li
INSERT: .rows-a > li:nth-of-type(1) + li
```

# Update
```js
assert.deepEqual(text(document, "p.note-a"), ["note a v1"]);
assert.deepEqual(text(document, "li.row-a"), ["a-one", "a-two"]);
```

# Update
```js
document.querySelector("button.b").click();
```
```html
<button
  class="a"
>
  A
</button>
<button
  class="b"
>
  B
</button>
<section
  class="pane-b"
>
  <p
    class="note-b"
  >
    note b v1
  </p>
  <ol
    class="rows-b"
  >
    <li
      class="row-b"
    >
      b-one
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .b + .pane-b
REMOVE: .pane-b + section
INSERT: .rows-b > .row-b
INSERT: .pane-b > .note-b
UPDATE: .note-b::text " " => "note b v1"
```

# Update
```js
assert.deepEqual(text(document, "p.note-b"), ["note b v1"]);
assert.deepEqual(text(document, "li.row-b"), ["b-one"]);
assert.equal(document.querySelector("section.pane-a"), null);
```

# Update update frame 1 of 2

# Update `{"a":"note a v2","b":"note b v1","rowsA":[{"id":"r1","text":"a-one (edited)"},{"id":"r2","text":"a-two"}],"rowsB":[{"id":"r9","text":"b-one"}],"$global":{"persisted":true}}`

# Update
```js
assert.deepEqual(
text(document, "p.note-b"),
["note b v1"],
"visible branch's boundary took the hidden branch's fills",
  );
  assert.deepEqual(
text(document, "li.row-b"),
["b-one"],
"visible branch's loop took the hidden branch's rows",
  );
  assert.equal(document.querySelector("section.pane-a"), null);
```

# Update
```js
document.querySelector("button.a").click();
```
```html
<button
  class="a"
>
  A
</button>
<button
  class="b"
>
  B
</button>
<section
  class="pane-a"
>
  <p
    class="note-a"
  >
    note a v2
  </p>
  <ol
    class="rows-a"
  >
    <li
      class="row-a"
    >
      a-one (edited)
    </li>
    <li
      class="row-a"
    >
      a-two
    </li>
  </ol>
</section>
```
## Change
```
INSERT: .b + .pane-a
REMOVE: .pane-a + section
INSERT: .rows-a > li
INSERT: .rows-a > li:nth-of-type(1) + li
INSERT: .pane-a > .note-a
UPDATE: .note-a::text " " => "note a v2"
```

# Update
```js
assert.deepEqual(text(document, "li.row-a"), ["a-one (edited)", "a-two"]);
assert.deepEqual(text(document, "p.note-a"), ["note a v2"]);
```

# Update update frame 1 of 2

# Update `{"a":"note a v3","b":"note b v1","rowsA":[{"id":"r1","text":"a-one (again)"},{"id":"r2","text":"a-two"}],"rowsB":[{"id":"r9","text":"b-one"}],"$global":{"persisted":true}}`
```html
<button
  class="a"
>
  A
</button>
<button
  class="b"
>
  B
</button>
<section
  class="pane-a"
>
  <p
    class="note-a"
  >
    note a v3
  </p>
  <ol
    class="rows-a"
  >
    <li
      class="row-a"
    >
      a-one (again)
    </li>
    <li
      class="row-a"
    >
      a-two
    </li>
  </ol>
</section>
```
## Change
```
UPDATE: .note-a::text "note a v2" => "note a v3"
REMOVE: .rows-a > :is(li, li)
INSERT: .rows-a > :is(li, li)
REMOVE: .rows-a > :is(li, li)
INSERT: .rows-a > li
INSERT: .rows-a > li:nth-of-type(1) + li
```

# Update
```js
assert.deepEqual(text(document, "li.row-a"), ["a-one (again)", "a-two"]);
assert.deepEqual(text(document, "p.note-a"), ["note a v3"]);
```
