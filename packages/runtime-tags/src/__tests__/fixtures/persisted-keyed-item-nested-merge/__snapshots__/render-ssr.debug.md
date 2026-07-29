# Render `{"rows":[{"id":"r1","label":"ROW ONE","cells":[{"id":"c1","text":"one-a"},{"id":"c2","text":"one-b"}]},{"id":"r2","label":"ROW TWO","cells":[{"id":"c3","text":"two-a"}]}],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="rows"
>
  <li
    class="row"
  >
    <span
      class="label"
    >
      ROW ONE
    </span>
    <input
      class="note"
    />
    <ol
      class="cells"
    >
      <li
        class="cell"
      >
        one-a
      </li>
      <li
        class="cell"
      >
        one-b
      </li>
    </ol>
  </li>
  <li
    class="row"
  >
    <span
      class="label"
    >
      ROW TWO
    </span>
    <input
      class="note"
    />
    <ol
      class="cells"
    >
      <li
        class="cell"
      >
        two-a
      </li>
    </ol>
  </li>
</ul>
```

# Update
```js
document.querySelectorAll("input.note")[0].value =
"kept";
  document
.querySelectorAll("input.note")[0] 
.dispatchEvent(new document.defaultView.Event("input"));
```

# Update `{"rows":[{"id":"r1","label":"ROW ONE","cells":[{"id":"c1","text":"one-a (edited)"},{"id":"c2","text":"one-b"}]},{"id":"r2","label":"ROW TWO","cells":[{"id":"c3","text":"two-a"}]}],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="rows"
>
  <li
    class="row"
  >
    <span
      class="label"
    >
      ROW ONE
    </span>
    <input
      class="note"
      value="kept"
    />
    <ol
      class="cells"
    >
      <li
        class="cell"
      >
        one-a (edited)
      </li>
      <li
        class="cell"
      >
        one-b
      </li>
    </ol>
  </li>
  <li
    class="row"
  >
    <span
      class="label"
    >
      ROW TWO
    </span>
    <input
      class="note"
    />
    <ol
      class="cells"
    >
      <li
        class="cell"
      >
        two-a
      </li>
    </ol>
  </li>
</ul>
```
## Change
```
INSERT: .rows > li:nth-of-type(1) > ol > :is(li, li)
REMOVE: .rows > li:nth-of-type(1) > ol > li:nth-of-type(2) + li
REMOVE: .rows > li:nth-of-type(1) > ol > li:nth-of-type(2) + li
INSERT: .rows > li:nth-of-type(2) > ol > li
REMOVE: .rows > li:nth-of-type(2) > ol > li + li
```

# Update
```js
assert.deepEqual(cells(document), ["one-a (edited)", "one-b", "two-a"]);
assert.deepEqual(notes(document), ["kept", ""]);
```

# Update update frame 1 of 2

# Update `{"rows":[{"id":"r1","label":"ROW ONE","cells":[{"id":"c1","text":"one-a (edited)"},{"id":"c4","text":"one-c"},{"id":"c2","text":"one-b"}]},{"id":"r2","label":"ROW TWO","cells":[{"id":"c3","text":"two-a"}]}],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="rows"
>
  <li
    class="row"
  >
    <span
      class="label"
    >
      ROW ONE
    </span>
    <input
      class="note"
      value="kept"
    />
    <ol
      class="cells"
    >
      <li
        class="cell"
      >
        one-a (edited)
      </li>
      <li
        class="cell"
      >
        one-c
      </li>
      <li
        class="cell"
      >
        one-b
      </li>
    </ol>
  </li>
  <li
    class="row"
  >
    <span
      class="label"
    >
      ROW TWO
    </span>
    <input
      class="note"
    />
    <ol
      class="cells"
    >
      <li
        class="cell"
      >
        two-a
      </li>
    </ol>
  </li>
</ul>
```
## Change
```
INSERT: .rows > li:nth-of-type(1) > ol > :is(li, li, li)
REMOVE: .rows > li:nth-of-type(1) > ol > li:nth-of-type(3) + li
REMOVE: .rows > li:nth-of-type(1) > ol > li:nth-of-type(3) + li
```

# Update
```js
assert.deepEqual(cells(document), [
"one-a (edited)",
"one-c",
"one-b",
"two-a",
  ]);
  assert.deepEqual(notes(document), ["kept", ""]);
```

# Update update frame 1 of 2

# Update `{"rows":[{"id":"r1","label":"ROW ONE","cells":[{"id":"c1","text":"one-a (edited)"},{"id":"c4","text":"one-c"},{"id":"c2","text":"one-b"}]},{"id":"r2","label":"ROW TWO","cells":[]}],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="rows"
>
  <li
    class="row"
  >
    <span
      class="label"
    >
      ROW ONE
    </span>
    <input
      class="note"
      value="kept"
    />
    <ol
      class="cells"
    >
      <li
        class="cell"
      >
        one-a (edited)
      </li>
      <li
        class="cell"
      >
        one-c
      </li>
      <li
        class="cell"
      >
        one-b
      </li>
    </ol>
  </li>
  <li
    class="row"
  >
    <span
      class="label"
    >
      ROW TWO
    </span>
    <input
      class="note"
    />
    <ol
      class="cells"
    />
  </li>
</ul>
```
## Change
```
REMOVE: .rows > li:nth-of-type(2) > ol > li
```

# Update
```js
assert.deepEqual(cells(document), ["one-a (edited)", "one-c", "one-b"]);
assert.deepEqual(notes(document), ["kept", ""]);
```
