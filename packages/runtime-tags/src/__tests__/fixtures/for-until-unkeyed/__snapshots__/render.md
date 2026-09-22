# Render
```html
<button
  class="more"
>
  more
</button>
<button
  class="none"
>
  none
</button>
<ul>
  <li>
    0
  </li>
  <li>
    1
  </li>
</ul>
<span>
  1
</span>
```

# Update
```js
document.querySelector(".more").click();
```
```html
<button
  class="more"
>
  more
</button>
<button
  class="none"
>
  none
</button>
<ul>
  <li>
    0
  </li>
  <li>
    1
  </li>
  <li>
    2
  </li>
</ul>
<span>
  1
</span>
<span>
  2
</span>
```
## Change
```
INSERT: ul > li:nth-of-type(2) + li
INSERT: span:nth-of-type(1) + span
UPDATE: ul > li:nth-of-type(3)::text " " => "2"
UPDATE: span:nth-of-type(2)::text " " => "2"
```

# Update
```js
document.querySelector(".none").click();
```
```html
<button
  class="more"
>
  more
</button>
<button
  class="none"
>
  none
</button>
<ul />
```
## Change
```
REMOVE: ul > :is(li, li, li)
REMOVE: ul + span
REMOVE: ul + span
```

# Update
```js
document.querySelector(".more").click();
```
```html
<button
  class="more"
>
  more
</button>
<button
  class="none"
>
  none
</button>
<ul>
  <li>
    0
  </li>
</ul>
```
## Change
```
INSERT: ul > li
UPDATE: ul > li::text " " => "0"
```
