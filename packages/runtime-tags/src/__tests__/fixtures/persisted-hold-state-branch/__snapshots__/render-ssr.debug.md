# Render `{"threads":[{"id":"t1","title":"THREAD-ALPHA","note":"note alpha v1","replies":[{"id":"r1","text":"reply one"},{"id":"r2","text":"reply two"}]},{"id":"t2","title":"THREAD-BETA","note":"note beta v1","replies":[{"id":"r3","text":"reply three"}]}],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="threads"
>
  <li
    class="thread"
  >
    <h3
      class="title"
    >
      THREAD-ALPHA
    </h3>
    <button
      class="collapse"
    >
      collapse
    </button>
    <p
      class="loading"
    >
      loading…
    </p>
    <ol
      class="replies"
    >
      <li
        class="reply"
      >
        reply one
      </li>
      <li
        class="reply"
      >
        reply two
      </li>
    </ol>
  </li>
  <li
    class="thread"
  >
    <h3
      class="title"
    >
      THREAD-BETA
    </h3>
    <button
      class="collapse"
    >
      collapse
    </button>
    <p
      class="loading"
    >
      loading…
    </p>
    <ol
      class="replies"
    >
      <li
        class="reply"
      >
        reply three
      </li>
    </ol>
  </li>
</ul>
```

# Update
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="threads"
>
  <li
    class="thread"
  >
    <h3
      class="title"
    >
      THREAD-ALPHA
    </h3>
    <button
      class="collapse"
    >
      collapse
    </button>
    <p
      class="note"
    >
      note alpha v1
    </p>
    <ol
      class="replies"
    >
      <li
        class="reply"
      >
        reply one
      </li>
      <li
        class="reply"
      >
        reply two
      </li>
    </ol>
  </li>
  <li
    class="thread"
  >
    <h3
      class="title"
    >
      THREAD-BETA
    </h3>
    <button
      class="collapse"
    >
      collapse
    </button>
    <p
      class="note"
    >
      note beta v1
    </p>
    <ol
      class="replies"
    >
      <li
        class="reply"
      >
        reply three
      </li>
    </ol>
  </li>
</ul>
```
## Change
```
INSERT: .threads > li:nth-of-type(1) > p::text("note alpha v1")
INSERT: .threads > li:nth-of-type(2) > p::text("note beta v1")
REMOVE: .threads > li:nth-of-type(1) > p
INSERT: .threads > li:nth-of-type(1) > button + p
REMOVE: .threads > li:nth-of-type(2) > p
INSERT: .threads > li:nth-of-type(2) > button + p
```

# Update update frame 1 of 2
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="threads"
>
  <li
    class="thread"
  >
    <h3
      class="title"
    >
      THREAD-ALPHA
    </h3>
    <button
      class="collapse"
    >
      collapse
    </button>
    <p
      class="note"
    >
      note alpha v1
    </p>
    <ol
      class="replies"
    >
      <li
        class="reply"
      >
        reply one
      </li>
      <li
        class="reply"
      >
        reply two
      </li>
    </ol>
  </li>
  <li
    class="thread"
  >
    <h3
      class="title"
    >
      THREAD-BETA
    </h3>
    <button
      class="collapse"
    >
      collapse
    </button>
    <p
      class="note"
    >
      note beta v1
    </p>
    <ol
      class="replies"
    >
      <li
        class="reply"
      >
        reply three
      </li>
    </ol>
  </li>
</ul>
```
## Change
```
INSERT: .threads > li:nth-of-type(1) > ol > :is(li, li)
REMOVE: li + li
REMOVE: li + li
INSERT: .threads > li:nth-of-type(2) > ol > li
REMOVE: li + li
REMOVE: .threads > li:nth-of-type(1) > ol > :is(li, li)
INSERT: .threads > li:nth-of-type(1) > ol > li
INSERT: .threads > li:nth-of-type(1) > ol > li:nth-of-type(1) + li
REMOVE: .threads > li:nth-of-type(2) > ol > li
INSERT: .threads > li:nth-of-type(2) > ol > li
```

# Update `{"threads":[{"id":"t1","title":"THREAD-ALPHA","note":"note alpha v1","replies":[{"id":"r1","text":"reply one"},{"id":"r2","text":"reply two"}]},{"id":"t2","title":"THREAD-BETA","note":"note beta v1","replies":[{"id":"r3","text":"reply three"}]}],"$global":{"persisted":true}}`

# Update update frame 1 of 2

# Update `{"threads":[{"id":"t1","title":"THREAD-ALPHA","note":"note alpha v2","replies":[{"id":"r1","text":"reply one (edited)"},{"id":"r2","text":"reply two"}]},{"id":"t2","title":"THREAD-BETA","note":"note beta v1","replies":[{"id":"r3","text":"reply three"}]}],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="threads"
>
  <li
    class="thread"
  >
    <h3
      class="title"
    >
      THREAD-ALPHA
    </h3>
    <button
      class="collapse"
    >
      collapse
    </button>
    <p
      class="note"
    >
      note alpha v2
    </p>
    <ol
      class="replies"
    >
      <li
        class="reply"
      >
        reply one (edited)
      </li>
      <li
        class="reply"
      >
        reply two
      </li>
    </ol>
  </li>
  <li
    class="thread"
  >
    <h3
      class="title"
    >
      THREAD-BETA
    </h3>
    <button
      class="collapse"
    >
      collapse
    </button>
    <p
      class="note"
    >
      note beta v1
    </p>
    <ol
      class="replies"
    >
      <li
        class="reply"
      >
        reply three
      </li>
    </ol>
  </li>
</ul>
```
## Change
```
UPDATE: .threads > li:nth-of-type(1) > p::text "note alpha v1" => "note alpha v2"
REMOVE: .threads > li:nth-of-type(1) > ol > :is(li, li)
INSERT: .threads > li:nth-of-type(1) > ol > :is(li, li)
REMOVE: .threads > li:nth-of-type(1) > ol > :is(li, li)
INSERT: .threads > li:nth-of-type(1) > ol > li
INSERT: .threads > li:nth-of-type(1) > ol > li:nth-of-type(1) + li
```

# Update
```js
assert.deepEqual(replies(document), [
"reply one (edited)",
"reply two",
"reply three",
  ]);
  assert.deepEqual(notes(document), ["note alpha v2", "note beta v1"]);
```

# Update
```js
document;
.querySelectorAll("button.collapse")[0] 
.click()
```
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="threads"
>
  <li
    class="thread"
  >
    <h3
      class="title"
    >
      THREAD-ALPHA
    </h3>
    <button
      class="collapse"
    >
      expand
    </button>
  </li>
  <li
    class="thread"
  >
    <h3
      class="title"
    >
      THREAD-BETA
    </h3>
    <button
      class="collapse"
    >
      collapse
    </button>
    <p
      class="note"
    >
      note beta v1
    </p>
    <ol
      class="replies"
    >
      <li
        class="reply"
      >
        reply three
      </li>
    </ol>
  </li>
</ul>
```
## Change
```
UPDATE: .threads > li:nth-of-type(1) > button::text "collapse" => "expand"
REMOVE: .threads > li:nth-of-type(1) > button + .note
REMOVE: .threads > li:nth-of-type(1) > button + .replies
```

# Update update frame 1 of 2

# Update `{"threads":[{"id":"t1","title":"THREAD-ALPHA","note":"note alpha v3","replies":[{"id":"r1","text":"reply one (patched hidden)"},{"id":"r2","text":"reply two"}]},{"id":"t2","title":"THREAD-BETA","note":"note beta v1","replies":[{"id":"r3","text":"reply three"}]}],"$global":{"persisted":true}}`

# Update
```js
// t1 collapsed: only t2's content visible.
assert.deepEqual(replies(document), ["reply three"]);
assert.deepEqual(notes(document), ["note beta v1"]);
```

# Update
```js
document;
.querySelectorAll("button.collapse")[0] 
.click()
```
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="threads"
>
  <li
    class="thread"
  >
    <h3
      class="title"
    >
      THREAD-ALPHA
    </h3>
    <button
      class="collapse"
    >
      collapse
    </button>
    <p
      class="note"
    >
      note alpha v3
    </p>
    <ol
      class="replies"
    >
      <li
        class="reply"
      >
        reply one (patched hidden)
      </li>
      <li
        class="reply"
      >
        reply two
      </li>
    </ol>
  </li>
  <li
    class="thread"
  >
    <h3
      class="title"
    >
      THREAD-BETA
    </h3>
    <button
      class="collapse"
    >
      collapse
    </button>
    <p
      class="note"
    >
      note beta v1
    </p>
    <ol
      class="replies"
    >
      <li
        class="reply"
      >
        reply three
      </li>
    </ol>
  </li>
</ul>
```
## Change
```
UPDATE: .threads > li:nth-of-type(1) > button::text "expand" => "collapse"
INSERT: .threads > li:nth-of-type(1) > button + ol
INSERT: .threads > li:nth-of-type(1) > ol > li
INSERT: .threads > li:nth-of-type(1) > ol > li:nth-of-type(1) + li
INSERT: .threads > li:nth-of-type(1) > button + p
UPDATE: .threads > li:nth-of-type(1) > p::text " " => "note alpha v3"
```

# Update
```js
assert.deepEqual(replies(document), [
"reply one (patched hidden)",
"reply two",
"reply three",
  ]);
  assert.deepEqual(notes(document), ["note alpha v3", "note beta v1"]);
```
