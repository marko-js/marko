# Render
```html
<button
  class="select"
>
  select
</button>
<button
  class="hover"
>
  hover
</button>
<ul>
  <li
    class="sel"
  >
    a
  </li>
  <li
    class="hov"
  >
    b
  </li>
  <li>
    c
  </li>
</ul>
```

# Update
```js
(document.querySelector(sel)).click();
```
```html
<button
  class="select"
>
  select
</button>
<button
  class="hover"
>
  hover
</button>
<ul>
  <li
    class=""
  >
    a
  </li>
  <li
    class="hov"
  >
    b
  </li>
  <li
    class="sel"
  >
    c
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)[class] "sel" => ""
UPDATE: .sel[class] null => "sel"
```

# Update
```js
(document.querySelector(sel)).click();
```
```html
<button
  class="select"
>
  select
</button>
<button
  class="hover"
>
  hover
</button>
<ul>
  <li
    class=""
  >
    a
  </li>
  <li
    class=""
  >
    b
  </li>
  <li
    class="sel hov"
  >
    c
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(2)[class] "hov" => ""
UPDATE: .sel.hov[class] "sel" => "sel hov"
```
