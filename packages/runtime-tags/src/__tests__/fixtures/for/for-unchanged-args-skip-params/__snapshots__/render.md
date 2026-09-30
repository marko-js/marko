# Render
```html
<ul>
  <li>
    0:a=1
  </li>
  <li>
    1:b=2
  </li>
  <li>
    2:c=3
  </li>
</ul>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="bump"
>
  Bump b
</button>
<button
  class="resettle"
>
  Same items
</button>
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<ul>
  <li>
    0:b=2
  </li>
  <li>
    1:c=3
  </li>
  <li>
    2:a=1
  </li>
</ul>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="bump"
>
  Bump b
</button>
<button
  class="resettle"
>
  Same items
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@0 "1" => "0"
UPDATE: ul > li:nth-of-type(2)::text@0 "2" => "1"
UPDATE: ul > li:nth-of-type(3)::text@0 "0" => "2"
REMOVE: ul > li
INSERT: ul > li:nth-of-type(2) + li
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<ul>
  <li>
    0:b=12
  </li>
  <li>
    1:c=3
  </li>
  <li>
    2:a=1
  </li>
</ul>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="bump"
>
  Bump b
</button>
<button
  class="resettle"
>
  Same items
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@4 "2" => "12"
```

# Update
```js
(document.querySelector(selector)).click();
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<ul>
  <li>
    0:c=3
  </li>
  <li>
    1:a=1
  </li>
  <li>
    2:b=12
  </li>
</ul>
<button
  class="rotate"
>
  Rotate
</button>
<button
  class="bump"
>
  Bump b
</button>
<button
  class="resettle"
>
  Same items
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@0 "1" => "0"
UPDATE: ul > li:nth-of-type(2)::text@0 "2" => "1"
UPDATE: ul > li:nth-of-type(3)::text@0 "0" => "2"
REMOVE: ul > li
INSERT: ul > li:nth-of-type(2) + li
```
