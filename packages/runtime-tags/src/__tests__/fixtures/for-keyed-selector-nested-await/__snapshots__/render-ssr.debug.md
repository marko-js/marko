# Render

# Update
```html
<ul>
  <li
    class="danger"
  >
    <button
      class="select"
    >
      a
    </button>
  </li>
  <li>
    <button
      class="select"
    >
      b
    </button>
  </li>
  <li>
    <button
      class="select"
    >
      c
    </button>
  </li>
</ul>
```
## Change
```
INSERT: ul
INSERT: ul > .danger
INSERT: .danger > button
INSERT: .danger > button::text("a")
INSERT: .danger + li
INSERT: ul > li:nth-of-type(2) > button
INSERT: ul > li:nth-of-type(2) > button::text("b")
INSERT: ul > li:nth-of-type(2) + li
INSERT: ul > li:nth-of-type(3) > button
INSERT: ul > li:nth-of-type(3) > button::text("c")
```

# Update
```js
(document.querySelectorAll("button.select")[n]).click();
```
```html
<ul>
  <li
    class=""
  >
    <button
      class="select"
    >
      a
    </button>
  </li>
  <li
    class="danger"
  >
    <button
      class="select"
    >
      b
    </button>
  </li>
  <li>
    <button
      class="select"
    >
      c
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)[class] "danger" => ""
UPDATE: .danger[class] null => "danger"
```

# Update
```js
(document.querySelectorAll("button.select")[n]).click();
```
```html
<ul>
  <li
    class=""
  >
    <button
      class="select"
    >
      a
    </button>
  </li>
  <li
    class=""
  >
    <button
      class="select"
    >
      b
    </button>
  </li>
  <li
    class="danger"
  >
    <button
      class="select"
    >
      c
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(2)[class] "danger" => ""
UPDATE: .danger[class] null => "danger"
```
