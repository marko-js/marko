# Render
```html
<button
  id="add"
>
  add
</button>
<button
  id="grow"
>
  grow
</button>
<ul>
  <li>
    bb
  </li>
</ul>
```

# Update
```js
document.querySelector("#add").click();
```
```html
<button
  id="add"
>
  add
</button>
<button
  id="grow"
>
  grow
</button>
<ul>
  <li>
    bb
  </li>
  <li>
    dd
  </li>
</ul>
```
## Change
```
INSERT: ul > li:nth-of-type(1) + li
```

# Update
```js
document.querySelector("#grow").click();
```
```html
<button
  id="add"
>
  add
</button>
<button
  id="grow"
>
  grow
</button>
<ul>
  <li>
    aa
  </li>
  <li>
    bbbb
  </li>
  <li>
    cc
  </li>
  <li>
    dddd
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text "a" => "aa"
INSERT: ul > li
UPDATE: ul > li:nth-of-type(2)::text "bb" => "bbbb"
UPDATE: ul > li:nth-of-type(3)::text "c" => "cc"
INSERT: ul > li:nth-of-type(2) + li
UPDATE: ul > li:nth-of-type(4)::text "dd" => "dddd"
```
