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
container.querySelector("button.flip").click();
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
  <li>
    b
  </li>
  <li>
    c
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(2)[class] "danger" => null
```

# Update
```js
container.querySelector("button.flip").click();
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
UPDATE: .danger[class] null => "danger"
```
