# Render `{"rows":[{"id":"x","text":"ROW-EX v1"},{"id":"y","text":"ROW-WHY v1"}],"$global":{"persisted":true}}`
```html
<ul
  class="rows"
>
  <li
    class="row"
  >
    <button
      class="pick"
    >
      +0
    </button>
    <span
      class="text"
    >
      ROW-EX v1
    </span>
  </li>
  <li
    class="row"
  >
    <button
      class="pick"
    >
      +0
    </button>
    <span
      class="text"
    >
      ROW-WHY v1
    </span>
  </li>
</ul>
```

# Update `{"rows":[{"id":"x","text":"ROW-EX v1"},{"id":"y","text":"ROW-WHY v1"}],"$global":{"persisted":true}}`

# Update `{"rows":[{"id":"x","text":"ROW-EX v1"},{"id":"y","text":"ROW-WHY v1"}],"$global":{"persisted":true}}`

# Update update frame 1 of 2

# Update `{"rows":[{"id":"y","text":"ROW-WHY v1"}],"$global":{"persisted":true}}`
```html
<ul
  class="rows"
>
  <li
    class="row"
  >
    <button
      class="pick"
    >
      +0
    </button>
    <span
      class="text"
    >
      ROW-WHY v1
    </span>
  </li>
</ul>
```
## Change
```
REMOVE: .rows > .row
```

# Update
```js
assert.deepEqual(texts(document), ["ROW-WHY v1"]);
```

# Update update frame 1 of 2

# Update `{"rows":[{"id":"x","text":"ROW-EX v1"},{"id":"y","text":"ROW-WHY v1"}],"$global":{"persisted":true}}`
```html
<ul
  class="rows"
>
  <li
    class="row"
  >
    <button
      class="pick"
    >
      +0
    </button>
    <span
      class="text"
    >
      ROW-EX v1
    </span>
  </li>
  <li
    class="row"
  >
    <button
      class="pick"
    >
      +0
    </button>
    <span
      class="text"
    >
      ROW-WHY v1
    </span>
  </li>
</ul>
```
## Change
```
INSERT: .rows > li
```

# Update
```js
assert.deepEqual(texts(document), ["ROW-EX v1", "ROW-WHY v1"]);
```
