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
</ul>
<ol>
  <li>
    a: 1
  </li>
  <li>
    b: 1
  </li>
</ol>
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
</ul>
<ol>
  <li>
    a: 2
  </li>
  <li>
    b: 2
  </li>
</ol>
```
## Change
```
UPDATE: ol > li:nth-of-type(1)::text@3 "1" => "2"
UPDATE: ol > li:nth-of-type(2)::text@3 "1" => "2"
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
</ul>
<ol>
  <li>
    a: 1
  </li>
  <li>
    b: 1
  </li>
</ol>
```
## Change
```
UPDATE: ol > li:nth-of-type(1)::text@3 "2" => "1"
UPDATE: ol > li:nth-of-type(2)::text@3 "2" => "1"
UPDATE: .danger[class] "" => "danger"
UPDATE: ul > li:nth-of-type(2)[class] "danger" => ""
```
