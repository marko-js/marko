# Render `{"$global":{"persisted":true,"topic":"x","items":[{"id":1,"view":"a"},{"id":2,"view":"b"}]}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul>
  <span
    class="a"
  >
    A: x
  </span>
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
  <span
    class="a"
  >
    A: x
  </span>
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

# Update `{"$global":{"persisted":true,"topic":"x","items":[{"id":1,"view":"b"},{"id":2,"view":"a"}]}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<ul>
  <section
    class="b"
  >
    B: x
  </section>
  <span
    class="a"
  >
    A: x
  </span>
</ul>
```
## Change
```
INSERT: ul > .b
REMOVE: ul > .a
UPDATE: .b::text@3 "" => "x"
INSERT: ul > .a
REMOVE: .b + .b
UPDATE: .a::text@3 "" => "x"
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
  <section
    class="b"
  >
    B: x
  </section>
  <span
    class="a"
  >
    A: x
  </span>
</ul>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"$global":{"persisted":true,"topic":"x","items":[{"id":1,"view":"a"},{"id":2,"view":"b"}]}}`
```html
<button
  class="count"
>
  clicked 2
</button>
<ul>
  <span
    class="a"
  >
    A: x
  </span>
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
REMOVE: ul > .b
UPDATE: .a::text@3 "" => "x"
INSERT: .a + .b
REMOVE: .a + .a
UPDATE: .b::text@3 "" => "x"
```
