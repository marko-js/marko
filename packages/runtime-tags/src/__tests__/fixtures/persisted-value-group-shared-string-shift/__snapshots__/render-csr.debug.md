# Render `{"posts":[{"id":"OLDPOST-A1","tag":"BOILERPLATE-SHARED-TAG-STRING","flair":"FOUNDING-MEMBER-FLAIR-RIBBON","body":"body OLDPOST-A1"},{"id":"OLDPOST-B2","tag":"BOILERPLATE-SHARED-TAG-STRING","body":"body OLDPOST-B2"}],"$global":{"persisted":true}}`
```html
<ul
  class="posts"
>
  <li
    class="post"
  >
    <span
      class="tag"
    >
      BOILERPLATE-SHARED-TAG-STRING
    </span>
    <span
      class="flair"
    >
      FOUNDING-MEMBER-FLAIR-RIBBON
    </span>
    <span
      class="body"
    >
      body OLDPOST-A1
    </span>
    <button
      class="fave"
    >
      fave
    </button>
  </li>
  <li
    class="post"
  >
    <span
      class="tag"
    >
      BOILERPLATE-SHARED-TAG-STRING
    </span>
    <span
      class="body"
    >
      body OLDPOST-B2
    </span>
    <button
      class="fave"
    >
      fave
    </button>
  </li>
</ul>
```

# Update `{"posts":[{"id":"OLDPOST-A1","tag":"BOILERPLATE-SHARED-TAG-STRING","flair":"FOUNDING-MEMBER-FLAIR-RIBBON","body":"body OLDPOST-A1"},{"id":"OLDPOST-B2","tag":"BOILERPLATE-SHARED-TAG-STRING","body":"body OLDPOST-B2"}],"$global":{"persisted":true}}`

# Update `{"posts":[{"id":"OLDPOST-A1","tag":"BOILERPLATE-SHARED-TAG-STRING","flair":"FOUNDING-MEMBER-FLAIR-RIBBON","body":"body OLDPOST-A1"},{"id":"OLDPOST-B2","tag":"BOILERPLATE-SHARED-TAG-STRING","body":"body OLDPOST-B2"}],"$global":{"persisted":true}}`

# Update `{"posts":[{"id":"OLDPOST-A1","tag":"BOILERPLATE-SHARED-TAG-STRING","flair":"FOUNDING-MEMBER-FLAIR-RIBBON","body":"body OLDPOST-A1"},{"id":"OLDPOST-B2","tag":"BOILERPLATE-SHARED-TAG-STRING","body":"body OLDPOST-B2"}],"$global":{"persisted":true}}`

# Update `{"posts":[{"id":"OLDPOST-A1","tag":"BOILERPLATE-SHARED-TAG-STRING","flair":"FOUNDING-MEMBER-FLAIR-RIBBON","body":"body OLDPOST-A1"},{"id":"OLDPOST-B2","tag":"BOILERPLATE-SHARED-TAG-STRING","body":"body OLDPOST-B2"}],"$global":{"persisted":true}}`

# Update
```js
document.querySelectorAll("button.fave")[1].click();
```
```html
<ul
  class="posts"
>
  <li
    class="post"
  >
    <span
      class="tag"
    >
      BOILERPLATE-SHARED-TAG-STRING
    </span>
    <span
      class="flair"
    >
      FOUNDING-MEMBER-FLAIR-RIBBON
    </span>
    <span
      class="body"
    >
      body OLDPOST-A1
    </span>
    <button
      class="fave"
    >
      fave
    </button>
  </li>
  <li
    class="post"
  >
    <span
      class="tag"
    >
      BOILERPLATE-SHARED-TAG-STRING
    </span>
    <span
      class="body"
    >
      body OLDPOST-B2
    </span>
    <button
      class="fave"
    >
      faved
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: .posts > li:nth-of-type(2) > button::text "fave" => "faved"
```

# Update `{"posts":[{"id":"NEWPOST-C3","tag":"BOILERPLATE-SHARED-TAG-STRING","body":"body NEWPOST-C3"},{"id":"OLDPOST-A1","tag":"BOILERPLATE-SHARED-TAG-STRING","flair":"FOUNDING-MEMBER-FLAIR-RIBBON","body":"body OLDPOST-A1"},{"id":"OLDPOST-B2","tag":"BOILERPLATE-SHARED-TAG-STRING","body":"body OLDPOST-B2"}],"$global":{"persisted":true}}`
```html
<ul
  class="posts"
>
  <li
    class="post"
  >
    <span
      class="tag"
    >
      BOILERPLATE-SHARED-TAG-STRING
    </span>
    <span
      class="body"
    >
      body NEWPOST-C3
    </span>
    <button
      class="fave"
    >
      fave
    </button>
  </li>
  <li
    class="post"
  >
    <span
      class="tag"
    >
      BOILERPLATE-SHARED-TAG-STRING
    </span>
    <span
      class="flair"
    >
      FOUNDING-MEMBER-FLAIR-RIBBON
    </span>
    <span
      class="body"
    >
      body OLDPOST-A1
    </span>
    <button
      class="fave"
    >
      fave
    </button>
  </li>
  <li
    class="post"
  >
    <span
      class="tag"
    >
      BOILERPLATE-SHARED-TAG-STRING
    </span>
    <span
      class="body"
    >
      body OLDPOST-B2
    </span>
    <button
      class="fave"
    >
      faved
    </button>
  </li>
</ul>
```
## Change
```
INSERT: .posts > li
UPDATE: .posts > li:nth-of-type(1) > button::text " " => "fave"
```

# Update `{"posts":[{"id":"NEWPOST-C3","tag":"BOILERPLATE-SHARED-TAG-STRING","body":"body NEWPOST-C3"},{"id":"OLDPOST-A1","tag":"BOILERPLATE-SHARED-TAG-STRING","flair":"FOUNDING-MEMBER-FLAIR-RIBBON","body":"body OLDPOST-A1"},{"id":"OLDPOST-B2","tag":"BOILERPLATE-SHARED-TAG-STRING","body":"body OLDPOST-B2"}],"$global":{"persisted":true}}`

# Update `{"posts":[{"id":"NEWPOST-D4","tag":"BOILERPLATE-SHARED-TAG-STRING","flair":"FOUNDING-MEMBER-FLAIR-RIBBON","body":"body NEWPOST-D4"},{"id":"NEWPOST-C3","tag":"BOILERPLATE-SHARED-TAG-STRING","body":"body NEWPOST-C3"},{"id":"OLDPOST-A1","tag":"BOILERPLATE-SHARED-TAG-STRING","flair":"FOUNDING-MEMBER-FLAIR-RIBBON","body":"body OLDPOST-A1"},{"id":"OLDPOST-B2","tag":"BOILERPLATE-SHARED-TAG-STRING","body":"body OLDPOST-B2"}],"$global":{"persisted":true}}`
```html
<ul
  class="posts"
>
  <li
    class="post"
  >
    <span
      class="tag"
    >
      BOILERPLATE-SHARED-TAG-STRING
    </span>
    <span
      class="flair"
    >
      FOUNDING-MEMBER-FLAIR-RIBBON
    </span>
    <span
      class="body"
    >
      body NEWPOST-D4
    </span>
    <button
      class="fave"
    >
      fave
    </button>
  </li>
  <li
    class="post"
  >
    <span
      class="tag"
    >
      BOILERPLATE-SHARED-TAG-STRING
    </span>
    <span
      class="body"
    >
      body NEWPOST-C3
    </span>
    <button
      class="fave"
    >
      fave
    </button>
  </li>
  <li
    class="post"
  >
    <span
      class="tag"
    >
      BOILERPLATE-SHARED-TAG-STRING
    </span>
    <span
      class="flair"
    >
      FOUNDING-MEMBER-FLAIR-RIBBON
    </span>
    <span
      class="body"
    >
      body OLDPOST-A1
    </span>
    <button
      class="fave"
    >
      fave
    </button>
  </li>
  <li
    class="post"
  >
    <span
      class="tag"
    >
      BOILERPLATE-SHARED-TAG-STRING
    </span>
    <span
      class="body"
    >
      body OLDPOST-B2
    </span>
    <button
      class="fave"
    >
      faved
    </button>
  </li>
</ul>
```
## Change
```
INSERT: .posts > li
UPDATE: .posts > li:nth-of-type(1) > button::text " " => "fave"
UPDATE: .posts > li:nth-of-type(1) > span:nth-of-type(2)::text " " => "FOUNDING-MEMBER-FLAIR-RIBBON"
```

# Update `{"posts":[{"id":"NEWPOST-D4","tag":"BOILERPLATE-SHARED-TAG-STRING","flair":"FOUNDING-MEMBER-FLAIR-RIBBON","body":"body NEWPOST-D4"},{"id":"NEWPOST-C3","tag":"BOILERPLATE-SHARED-TAG-STRING","body":"body NEWPOST-C3"},{"id":"OLDPOST-A1","tag":"BOILERPLATE-SHARED-TAG-STRING","flair":"FOUNDING-MEMBER-FLAIR-RIBBON","body":"body OLDPOST-A1"},{"id":"OLDPOST-B2","tag":"BOILERPLATE-SHARED-TAG-STRING","body":"body OLDPOST-B2"}],"$global":{"persisted":true}}`

# Update
```js
assert.deepEqual(
[...document.querySelectorAll("span.body")].map((el) => el.textContent),
[
  "body NEWPOST-D4",
  "body NEWPOST-C3",
  "body OLDPOST-A1",
  "body OLDPOST-B2",
],
  );
  assert.deepEqual(
[...document.querySelectorAll("span.flair")].map(
  (el) => el.textContent,
),
[FLAIR, FLAIR],
  );
  assert.deepEqual(
[...document.querySelectorAll("button.fave")].map(
  (el) => el.textContent,
),
["fave", "fave", "fave", "faved"],
  );
```
