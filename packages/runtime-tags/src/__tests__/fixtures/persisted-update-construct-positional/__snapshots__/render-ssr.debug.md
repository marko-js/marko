# Render `{"$global":{"persisted":true,"topic":"x","items":[{"view":"a"},{"view":"b"}]}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul>
  <li>
    <span
      class="a"
    >
      A: x
    </span>
  </li>
  <li>
    <section
      class="b"
    >
      B: x
    </section>
  </li>
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
  <li>
    <span
      class="a"
    >
      A: x
    </span>
  </li>
  <li>
    <section
      class="b"
    >
      B: x
    </section>
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"topic":"x","items":[{"view":"a"},{"view":"a"},{"view":"b"}]}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<ul>
  <li>
    <span
      class="a"
    >
      A: x
    </span>
  </li>
  <li>
    <span
      class="a"
    >
      A: x
    </span>
  </li>
  <li>
    <section
      class="b"
    >
      B: x
    </section>
  </li>
</ul>
```
## Change
```
INSERT: ul > li:nth-of-type(1) > span
REMOVE: ul > li:nth-of-type(1) > span
INSERT: ul > li:nth-of-type(2) > span
REMOVE: ul > li:nth-of-type(2) > .b
INSERT: ul > li:nth-of-type(2) + li
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
  <li>
    <span
      class="a"
    >
      A: x
    </span>
  </li>
  <li>
    <span
      class="a"
    >
      A: x
    </span>
  </li>
  <li>
    <section
      class="b"
    >
      B: x
    </section>
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update update frame 1 of 2

# Update `{"$global":{"persisted":true,"topic":"x","items":[{"view":"b"}]}}`
```html
<button
  class="count"
>
  clicked 2
</button>
<ul>
  <li>
    <section
      class="b"
    >
      B: x
    </section>
  </li>
</ul>
```
## Change
```
INSERT: span + .b
REMOVE: ul > li > span
REMOVE: ul > li + li
REMOVE: ul > li + li
```
