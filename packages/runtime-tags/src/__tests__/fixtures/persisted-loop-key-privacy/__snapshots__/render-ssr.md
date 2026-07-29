# Render `{"users":[{"email":"pr1v-alpha@example.test","name":"N4ME-ALPHA"},{"email":"pr1v-beta@example.test","name":"N4ME-BETA"}],"tags":["tag-one","tag-two"],"$global":{"persisted":true,"persistedToken":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="users"
>
  <li
    class="user"
  >
    <span
      class="name"
    >
      N4ME-ALPHA
    </span>
    <button
      class="toggle"
    >
      more
    </button>
  </li>
  <li
    class="user"
  >
    <span
      class="name"
    >
      N4ME-BETA
    </span>
    <button
      class="toggle"
    >
      more
    </button>
  </li>
</ul>
<ul
  class="tags"
>
  <li
    class="tag"
  >
    tag-one
    <button
      class="star"
    >
      ☆
    </button>
  </li>
  <li
    class="tag"
  >
    tag-two
    <button
      class="star"
    >
      ☆
    </button>
  </li>
</ul>
```

# Update `{"users":[{"email":"pr1v-alpha@example.test","name":"N4ME-ALPHA"},{"email":"pr1v-beta@example.test","name":"N4ME-BETA"}],"tags":["tag-one","tag-two"],"$global":{"persisted":true,"persistedToken":true}}`

# Update `{"users":[{"email":"pr1v-alpha@example.test","name":"N4ME-ALPHA"},{"email":"pr1v-beta@example.test","name":"N4ME-BETA"}],"tags":["tag-one","tag-two"],"$global":{"persisted":true,"persistedToken":true}}`

# Update
```js
assert.equal(
document.querySelector("li.user .name")?.textContent,
"N4ME-ALPHA",
  );
  // Guards the wire checks above against passing vacuously.
  if (!BASELINE) {
assert.ok(seenKeys > 0, "no loop group key was inspected");
assert.ok(seenFeedback > 0, "no feedback line was inspected");
assert.ok(seenEcho > 0, "no echo was inspected");
}
```
