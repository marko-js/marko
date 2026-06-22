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
container.querySelector(sel).click();
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
  <li>
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
UPDATE: ul > li:nth-of-type(1)[class] "sel" => null
UPDATE: .sel[class] null => "sel"
```

# Update
```js
container.querySelector(sel).click();
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
  <li>
    a
  </li>
  <li>
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
UPDATE: ul > li:nth-of-type(2)[class] "hov" => null
UPDATE: .sel.hov[class] "sel" => "sel hov"
```
