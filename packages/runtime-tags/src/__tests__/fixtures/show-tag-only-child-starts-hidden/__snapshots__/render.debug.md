# Render
```html
<button
  id="t"
>
  t
</button>
<button
  id="i"
>
  i
</button>
<ul
  id="c"
/>
```

# Update
```js
document.getElementById("t").click();
```
```html
<button
  id="t"
>
  t
</button>
<button
  id="i"
>
  i
</button>
<ul
  id="c"
>
  <li>
    a
  </li>
  <li>
    b
  </li>
</ul>
```
## Change
```
INSERT: #c > :is(li, li)
```

# Update
```js
document.getElementById("i").click();
```
```html
<button
  id="t"
>
  t
</button>
<button
  id="i"
>
  i
</button>
<ul
  id="c"
>
  <li>
    c
  </li>
</ul>
```
## Change
```
UPDATE: #c > li::text "a" => "c"
REMOVE: #c > li + li
```

# Update
```js
document.getElementById("t").click();
```
```html
<button
  id="t"
>
  t
</button>
<button
  id="i"
>
  i
</button>
<ul
  id="c"
/>
```
## Change
```
REMOVE: #c > li
```

# Update
```js
document.getElementById("i").click();
```

# Update
```js
document.getElementById("t").click();
```
```html
<button
  id="t"
>
  t
</button>
<button
  id="i"
>
  i
</button>
<ul
  id="c"
>
  <li>
    d
  </li>
  <li>
    e
  </li>
</ul>
```
## Change
```
INSERT: #c > :is(li, li)
```
