# Render
```html
<button
  class="add"
>
  add
</button>
<ul>
  <li
    class="danger"
  >
    a
  </li>
  <li>
    b
  </li>
</ul>
```

# Update
```js
(document.querySelector("button.add")).click();
```
```html
<button
  class="add"
>
  add
</button>
<ul>
  <li
    class="danger"
  >
    new
  </li>
  <li
    class=""
  >
    a
  </li>
  <li>
    b
  </li>
</ul>
```
## Change
```
INSERT: ul > .danger
UPDATE: ul > li:nth-of-type(2)[class] "danger" => ""
UPDATE: .danger[class] null => "danger"
```

# Update
```js
(document.querySelector("button.add")).click();
```
```html
<button
  class="add"
>
  add
</button>
<ul>
  <li
    class="danger"
  >
    new
  </li>
  <li
    class=""
  >
    new
  </li>
  <li
    class=""
  >
    a
  </li>
  <li>
    b
  </li>
</ul>
```
## Change
```
INSERT: ul > .danger
UPDATE: ul > li:nth-of-type(2)[class] "danger" => ""
UPDATE: .danger[class] null => "danger"
```
