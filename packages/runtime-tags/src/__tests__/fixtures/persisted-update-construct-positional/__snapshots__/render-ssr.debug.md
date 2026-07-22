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
INSERT: ul > li:nth-of-type(2) > span
REMOVE: ul > li:nth-of-type(2) > .b
UPDATE: ul > li:nth-of-type(2) > span::text@3 "" => "x"
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
INSERT: ul > li > .b
REMOVE: ul > li > span
UPDATE: .b::text@3 "" => "x"
REMOVE: ul > li + li
REMOVE: ul > li + li
```
