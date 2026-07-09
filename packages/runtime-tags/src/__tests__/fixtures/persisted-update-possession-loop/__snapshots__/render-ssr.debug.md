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
container.querySelector("button.count").click();
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

# Update `{"$global":{"persisted":true,"topic":"x","items":[{"id":1,"view":"b"},{"id":2,"view":"b"}]}}`
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
REMOVE: ul > span
```

# Update
```js
container.querySelector("button.count").click();
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

# Update `{"$global":{"persisted":true,"topic":"x","items":[{"id":1,"view":"b"},{"id":2,"view":"a"}]}}`
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
INSERT: ul > .a
REMOVE: .b + .b
```
