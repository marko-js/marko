# Render `{"threads":[{"id":"t1","title":"THREAD-ALPHA","replies":[{"id":"r1","text":"reply one"},{"id":"r2","text":"reply two"}]},{"id":"t2","title":"THREAD-BETA","replies":[{"id":"r3","text":"reply three"}]}],"tags":["tag-perf","tag-infra"],"$global":{"persisted":true}}`
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
    <input
      class="draft"
    />
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
    <input
      class="draft"
    />
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
<ul
  class="tags"
>
  <li
    class="tag"
  >
    tag-perf
    <button
      class="star"
    >
      ☆
    </button>
  </li>
  <li
    class="tag"
  >
    tag-infra
    <button
      class="star"
    >
      ☆
    </button>
  </li>
</ul>
```

# Update `{"threads":[{"id":"t1","title":"THREAD-ALPHA","replies":[{"id":"r1","text":"reply one"},{"id":"r2","text":"reply two"}]},{"id":"t2","title":"THREAD-BETA","replies":[{"id":"r3","text":"reply three"}]}],"tags":["tag-perf","tag-infra"],"$global":{"persisted":true}}`
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
    <input
      class="draft"
    />
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
    <input
      class="draft"
    />
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
<ul
  class="tags"
>
  <li
    class="tag"
  >
    tag-perf
    <button
      class="star"
    >
      ☆
    </button>
  </li>
  <li
    class="tag"
  >
    tag-infra
    <button
      class="star"
    >
      ☆
    </button>
  </li>
</ul>
```
## Change
```
INSERT: .threads > li:nth-of-type(1) > ol > :is(li, li)
REMOVE: .threads > li:nth-of-type(1) > ol > li:nth-of-type(2) + li
REMOVE: .threads > li:nth-of-type(1) > ol > li:nth-of-type(2) + li
INSERT: .threads > li:nth-of-type(2) > ol > li
REMOVE: .threads > li:nth-of-type(2) > ol > li + li
```

# Update
```js
const draft = document.querySelector("input.draft");
const window = draft.ownerDocument.defaultView;
draft.value = value;
draft.dispatchEvent(new window.Event("input", { bubbles: true }));
```

# Update
```js
document.querySelectorAll("button.star")[1].click();
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
    <input
      class="draft"
      value="draft in progress"
    />
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
    <input
      class="draft"
    />
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
<ul
  class="tags"
>
  <li
    class="tag"
  >
    tag-perf
    <button
      class="star"
    >
      ☆
    </button>
  </li>
  <li
    class="tag"
  >
    tag-infra
    <button
      class="star"
    >
      ★
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: .tags > li:nth-of-type(2) > button::text "☆" => "★"
```

# Update update frame 1 of 2

# Update `{"threads":[{"id":"t1","title":"THREAD-ALPHA","replies":[{"id":"r1","text":"reply one (edited)"},{"id":"r2","text":"reply two"}]},{"id":"t2","title":"THREAD-BETA","replies":[{"id":"r3","text":"reply three"}]}],"tags":["tag-perf","tag-infra"],"$global":{"persisted":true}}`
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
    <input
      class="draft"
      value="draft in progress"
    />
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
    <input
      class="draft"
    />
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
<ul
  class="tags"
>
  <li
    class="tag"
  >
    tag-perf
    <button
      class="star"
    >
      ☆
    </button>
  </li>
  <li
    class="tag"
  >
    tag-infra
    <button
      class="star"
    >
      ★
    </button>
  </li>
</ul>
```
## Change
```
INSERT: .threads > li:nth-of-type(1) > ol > :is(li, li)
REMOVE: .threads > li:nth-of-type(1) > ol > li:nth-of-type(2) + li
REMOVE: .threads > li:nth-of-type(1) > ol > li:nth-of-type(2) + li
```

# Update
```js
assert.deepEqual(
[...document.querySelectorAll("li.reply")].map((el) => el.textContent),
["reply one (edited)", "reply two", "reply three"],
  );
  // Controllable + seed state inside the re-shipped thread survived
  // (matched scopes ignore server seeds).
  assert.equal(
document.querySelector("input.draft").value,
"draft in progress",
  );
  assert.deepEqual(
[...document.querySelectorAll("button.star")].map(
  (el) => el.textContent,
),
["☆", "★"],
  );
```

# Update update frame 1 of 2

# Update `{"threads":[{"id":"t2","title":"THREAD-BETA","replies":[{"id":"r3","text":"reply three (edited)"}]},{"id":"t1","title":"THREAD-ALPHA","replies":[{"id":"r1","text":"reply one (edited)"},{"id":"r2","text":"reply two"}]}],"tags":["tag-perf","tag-infra"],"$global":{"persisted":true}}`
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
      THREAD-BETA
    </h3>
    <button
      class="collapse"
    >
      collapse
    </button>
    <input
      class="draft"
    />
    <ol
      class="replies"
    >
      <li
        class="reply"
      >
        reply three (edited)
      </li>
    </ol>
  </li>
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
    <input
      class="draft"
      value="draft in progress"
    />
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
</ul>
<ul
  class="tags"
>
  <li
    class="tag"
  >
    tag-perf
    <button
      class="star"
    >
      ☆
    </button>
  </li>
  <li
    class="tag"
  >
    tag-infra
    <button
      class="star"
    >
      ★
    </button>
  </li>
</ul>
```
## Change
```
INSERT: .threads > li:nth-of-type(1) > ol > li
REMOVE: .threads > li:nth-of-type(1) > ol > li + li
REMOVE: .threads > li:nth-of-type(2) + li
INSERT: .threads > li
```

# Update
```js
assert.deepEqual(
[...document.querySelectorAll("h3.title")].map((el) => el.textContent),
["THREAD-BETA", "THREAD-ALPHA"],
  );
  assert.deepEqual(
[...document.querySelectorAll("li.reply")].map((el) => el.textContent),
["reply three (edited)", "reply one (edited)", "reply two"],
  );
  // The typed draft belongs to THREAD-ALPHA's row, now second.
  assert.deepEqual(
[...document.querySelectorAll("input.draft")].map(
  (el) => el.value,
),
["", "draft in progress"],
  );
  assert.deepEqual(
[...document.querySelectorAll("button.star")].map(
  (el) => el.textContent,
),
["☆", "★"],
  );
```
