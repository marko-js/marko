# Render
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
<button
  class="add"
>
  add
</button>
<button
  class="clear"
>
  clear
</button>
```
## Console
```
LOG "row 1"
LOG "row 2"
LOG "row 3"
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
<button
  class="add"
>
  add
</button>
<button
  class="clear"
>
  clear
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)[class] "danger" => ""
UPDATE: .danger[class] null => "danger"
```
## Console
```
LOG "row 1"
LOG "row 2"
LOG "row 3"
```

# Update
```js
(document.querySelector(selector)).click();
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
  <li>
    <button
      class="select"
    >
      n
    </button>
  </li>
</ul>
<button
  class="add"
>
  add
</button>
<button
  class="clear"
>
  clear
</button>
```
## Change
```
INSERT: ul > li:nth-of-type(3) + li
```
## Console
```
LOG "row 4"
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
  <li>
    <button
      class="select"
    >
      c
    </button>
  </li>
  <li
    class="danger"
  >
    <button
      class="select"
    >
      n
    </button>
  </li>
</ul>
<button
  class="add"
>
  add
</button>
<button
  class="clear"
>
  clear
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(2)[class] "danger" => ""
UPDATE: .danger[class] null => "danger"
```
## Console
```
LOG "row 2"
LOG "row 4"
```

# Update
```js
(document.querySelectorAll("button.select")[n]).click();
```
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
  <li
    class=""
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
  <li
    class=""
  >
    <button
      class="select"
    >
      n
    </button>
  </li>
</ul>
<button
  class="add"
>
  add
</button>
<button
  class="clear"
>
  clear
</button>
```
## Change
```
UPDATE: .danger[class] "" => "danger"
UPDATE: ul > li:nth-of-type(4)[class] "danger" => ""
```
## Console
```
LOG "row 1"
LOG "row 4"
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<button
  class="add"
>
  add
</button>
<button
  class="clear"
>
  clear
</button>
```
## Change
```
REMOVE: ul
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<ul>
  <li
    class="danger"
  >
    <button
      class="select"
    >
      n
    </button>
  </li>
</ul>
<button
  class="add"
>
  add
</button>
<button
  class="clear"
>
  clear
</button>
```
## Change
```
INSERT: ul
INSERT: ul > .danger
UPDATE: .danger[class] null => "danger"
```
## Console
```
LOG "row 1"
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<ul>
  <li
    class="danger"
  >
    <button
      class="select"
    >
      n
    </button>
  </li>
  <li>
    <button
      class="select"
    >
      n
    </button>
  </li>
</ul>
<button
  class="add"
>
  add
</button>
<button
  class="clear"
>
  clear
</button>
```
## Change
```
INSERT: .danger + li
```
## Console
```
LOG "row 2"
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
      n
    </button>
  </li>
  <li
    class="danger"
  >
    <button
      class="select"
    >
      n
    </button>
  </li>
</ul>
<button
  class="add"
>
  add
</button>
<button
  class="clear"
>
  clear
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)[class] "danger" => ""
UPDATE: .danger[class] null => "danger"
```
## Console
```
LOG "row 1"
LOG "row 2"
```
