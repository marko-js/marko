# Render `{"$global":{"persisted":true,"topic":"x","items":[{"id":1,"view":"a"},{"id":2,"view":"b"}]}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul>
  <em>
    ROW_MARKUP
  </em>
  <span
    class="a"
  >
    A
  </span>
  <em>
    ROW_MARKUP
  </em>
  <section
    class="b"
  >
    B
  </section>
</ul>
```

# Update `{"$global":{"persisted":true,"topic":"x","items":[{"id":1,"view":"b"},{"id":2,"view":"b"}]}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul>
  <em>
    ROW_MARKUP
  </em>
  <section
    class="b"
  >
    B
  </section>
  <em>
    ROW_MARKUP
  </em>
  <section
    class="b"
  >
    B
  </section>
</ul>
```
## Change
```
INSERT: ul > section
REMOVE: ul > em:nth-of-type(1) + span
INSERT: ul > section
REMOVE: ul > em:nth-of-type(2) + section
```

# Update
```js
assert.deepEqual(panels(document), ["b", "b"]);
```

# Update update frame 1 of 2

# Update `{"$global":{"persisted":true,"topic":"x","items":[{"id":2,"view":"b"},{"id":1,"view":"b"}]}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul>
  <em>
    ROW_MARKUP
  </em>
  <section
    class="b"
  >
    B
  </section>
  <em>
    ROW_MARKUP
  </em>
  <section
    class="b"
  >
    B
  </section>
</ul>
```
## Change
```
REMOVE: ul > section:nth-of-type(2) + em
REMOVE: ul > section:nth-of-type(2) + section
INSERT: ul > :is(em, section)
```

# Update
```js
assert.deepEqual(panels(document), ["b", "b"]);
```

# Update update frame 1 of 2

# Update `{"$global":{"persisted":true,"topic":"x","items":[{"id":1,"view":"a"},{"id":2,"view":"b"}]}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul>
  <em>
    ROW_MARKUP
  </em>
  <span
    class="a"
  >
    A
  </span>
  <em>
    ROW_MARKUP
  </em>
  <section
    class="b"
  >
    B
  </section>
</ul>
```
## Change
```
INSERT: .b + .a
REMOVE: ul > em:nth-of-type(1) + .b
REMOVE: .b + em
REMOVE: .b + .a
INSERT: ul > :is(em, .a)
```

# Update
```js
assert.deepEqual(panels(document), ["a", "b"]);
```
