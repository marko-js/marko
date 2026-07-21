# Render `{"$global":{"persisted":true,"topic":"x","items":[{"id":1,"view":"a"},{"id":2,"view":"b"}]}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <span
    class="a"
  >
    A: x
  </span>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <section
    class="b"
  >
    B: x
  </section>
</ul>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<ul>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <span
    class="a"
  >
    A: x
  </span>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <section
    class="b"
  >
    B: x
  </section>
</ul>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"topic":"x","items":[{"id":1,"view":"b"},{"id":2,"view":"b"}]}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<ul>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <section
    class="b"
  >
    B: x
  </section>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <section
    class="b"
  >
    B: x
  </section>
</ul>
```
## Change
```
INSERT: ul > section
REMOVE: ul::text@0 + span
UPDATE: ul > section:nth-of-type(1)::text@3 "" => "x"
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<ul>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <section
    class="b"
  >
    B: x
  </section>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <section
    class="b"
  >
    B: x
  </section>
</ul>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"$global":{"persisted":true,"topic":"x","items":[{"id":2,"view":"a"},{"id":3,"view":"a"},{"id":1,"view":"b"}]}}`
```html
<button
  class="count"
>
  clicked 2
</button>
<ul>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <span
    class="a"
  >
    A: x
  </span>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <span
    class="a"
  >
    A: x
  </span>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <section
    class="b"
  >
    B: x
  </section>
</ul>
```
## Change
```
INSERT: ul > span
REMOVE: ul::text@0 + .b
UPDATE: ul > span:nth-of-type(1)::text@3 "" => "x"
REMOVE: .b + em
REMOVE: .b + ::text("server-only loop sentinel")
REMOVE: .b + span
INSERT: ul > :is(em, ::text("server-only loop sentinel"), span)
INSERT: ul > span:nth-of-type(1) + :is(em, ::text("server-only loop sentinel"), span)
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 3
</button>
<ul>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <span
    class="a"
  >
    A: x
  </span>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <span
    class="a"
  >
    A: x
  </span>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <section
    class="b"
  >
    B: x
  </section>
</ul>
```
## Change
```
UPDATE: .count::text@8 "2" => "3"
```

# Update `{"$global":{"persisted":true,"topic":"x","items":[{"id":1,"view":"a"},{"id":2,"view":"b"}]}}`
```html
<button
  class="count"
>
  clicked 3
</button>
<ul>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <span
    class="a"
  >
    A: x
  </span>
  <em>
    LOOP_ONLY_MARKUP
  </em>
  server-only loop sentinel
  <section
    class="b"
  >
    B: x
  </section>
</ul>
```
## Change
```
INSERT: .b + .a
REMOVE: ul::text@0 + .b
UPDATE: .a::text@3 "" => "x"
INSERT: .a + .b
REMOVE: ul::text@25 + .a
UPDATE: .b::text@3 "" => "x"
REMOVE: .b + em
REMOVE: .b + ::text("server-only loop sentinel")
REMOVE: .b + .a
REMOVE: .b + em
REMOVE: .b + ::text("server-only loop sentinel")
REMOVE: .b + .a
INSERT: ul > :is(em, ::text("server-only loop sentinel"), .a)
```
