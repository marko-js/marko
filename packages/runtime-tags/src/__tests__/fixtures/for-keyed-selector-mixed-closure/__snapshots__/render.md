# Render
```html
<button
  class="flip"
>
  flip
</button>
<ul>
  <li>
    a
  </li>
  <li
    class="danger"
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
(document.querySelector("button.flip")).click();
```
```html
<button
  class="flip"
>
  flip
</button>
<ul>
  <li>
    a
  </li>
  <li
    class=""
  >
    b
  </li>
  <li>
    c
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(2)[class] "danger" => ""
```

# Update
```js
(document.querySelector("button.flip")).click();
```
```html
<button
  class="flip"
>
  flip
</button>
<ul>
  <li>
    a
  </li>
  <li
    class="danger"
  >
    b
  </li>
  <li>
    c
  </li>
</ul>
```
## Change
```
UPDATE: .danger[class] "" => "danger"
```
