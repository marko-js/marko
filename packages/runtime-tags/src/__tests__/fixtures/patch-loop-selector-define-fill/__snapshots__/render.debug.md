# Render `{"sel":1}`
```html
<ul>
  <li
    class="sel"
  >
    1
  </li>
  <li
    class=""
  >
    2
  </li>
  <li
    class=""
  >
    3
  </li>
</ul>
<button
  class="add"
>
  +
</button>
<button
  class="toggle"
>
  toggle
</button>
```

# Update `{"sel":2}`
```html
<ul>
  <li
    class=""
  >
    1
  </li>
  <li
    class="sel"
  >
    2
  </li>
  <li
    class=""
  >
    3
  </li>
</ul>
<button
  class="add"
>
  +
</button>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)[class] "sel" => ""
UPDATE: .sel[class] "" => "sel"
UPDATE: ul > li:nth-of-type(3)[class] "" => ""
```

# Update
```js
document.querySelector("button.add").click();
```
```html
<ul>
  <li
    class=""
  >
    1
  </li>
  <li
    class="sel"
  >
    2
  </li>
  <li
    class=""
  >
    3
  </li>
  <li
    class=""
  >
    4
  </li>
</ul>
<button
  class="add"
>
  +
</button>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
INSERT: ul > li:nth-of-type(3) + li
UPDATE: ul > li:nth-of-type(4)[class] null => ""
```

# Update `{"sel":4}`
```html
<ul>
  <li
    class=""
  >
    1
  </li>
  <li
    class=""
  >
    2
  </li>
  <li
    class=""
  >
    3
  </li>
  <li
    class="sel"
  >
    4
  </li>
</ul>
<button
  class="add"
>
  +
</button>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)[class] "" => ""
UPDATE: ul > li:nth-of-type(2)[class] "sel" => ""
UPDATE: ul > li:nth-of-type(3)[class] "" => ""
UPDATE: .sel[class] "" => "sel"
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<ul>
  <li
    class=""
  >
    1
  </li>
  <li
    class=""
  >
    2
  </li>
  <li
    class=""
  >
    3
  </li>
  <li
    class=""
  >
    4
  </li>
</ul>
<button
  class="add"
>
  +
</button>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)[class] "" => ""
UPDATE: ul > li:nth-of-type(2)[class] "" => ""
UPDATE: ul > li:nth-of-type(3)[class] "" => ""
UPDATE: ul > li:nth-of-type(4)[class] "sel" => ""
```

# Update `{"sel":3}`
```html
<ul>
  <li
    class=""
  >
    1
  </li>
  <li
    class=""
  >
    2
  </li>
  <li
    class=""
  >
    3
  </li>
  <li
    class=""
  >
    4
  </li>
</ul>
<button
  class="add"
>
  +
</button>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)[class] "" => ""
UPDATE: ul > li:nth-of-type(2)[class] "" => ""
UPDATE: ul > li:nth-of-type(3)[class] "" => ""
UPDATE: ul > li:nth-of-type(4)[class] "" => ""
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<ul>
  <li
    class=""
  >
    1
  </li>
  <li
    class=""
  >
    2
  </li>
  <li
    class="sel"
  >
    3
  </li>
  <li
    class=""
  >
    4
  </li>
</ul>
<button
  class="add"
>
  +
</button>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)[class] "" => ""
UPDATE: ul > li:nth-of-type(2)[class] "" => ""
UPDATE: .sel[class] "" => "sel"
UPDATE: ul > li:nth-of-type(4)[class] "" => ""
```
