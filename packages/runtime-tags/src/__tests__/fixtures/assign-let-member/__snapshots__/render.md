# Render
```html
<ul>
  <li>
    dark
  </li>
  <li>
    1
  </li>
  <li>
    kept
  </li>
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
</ul>
<button
  class="mutate"
>
  mutate
</button>
<button
  class="apply"
>
  apply
</button>
```

# Update
```js
document.querySelector(".mutate").click();
```

# Update
```js
document.querySelector(".apply").click();
```
```html
<ul>
  <li>
    light
  </li>
  <li>
    4
  </li>
  <li>
    deleted
  </li>
  <li>
    number
  </li>
  <li>
    x
  </li>
  <li>
    3
  </li>
  <li>
    4
  </li>
  <li>
    y,z
  </li>
  <li>
    2
  </li>
  <li>
    h
  </li>
  <li>
    z
  </li>
  <li>
    3
  </li>
</ul>
<button
  class="mutate"
>
  mutate
</button>
<button
  class="apply"
>
  apply
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text "dark" => "light"
UPDATE: ul > li:nth-of-type(2)::text "1" => "4"
UPDATE: ul > li:nth-of-type(3)::text "kept" => "deleted"
UPDATE: ul > li:nth-of-type(4)::text "" => "number"
UPDATE: ul > li:nth-of-type(5)::text "" => "x"
UPDATE: ul > li:nth-of-type(6)::text "" => "3"
UPDATE: ul > li:nth-of-type(7)::text "" => "4"
UPDATE: ul > li:nth-of-type(8)::text "" => "y,z"
UPDATE: ul > li:nth-of-type(9)::text "" => "2"
UPDATE: ul > li:nth-of-type(10)::text "" => "h"
UPDATE: ul > li:nth-of-type(11)::text "" => "z"
UPDATE: ul > li:nth-of-type(12)::text "" => "3"
```
