# Render
```html
<button
  class="add"
>
  add
</button>
<ul>
  <li
    class="danger"
  >
    a
  </li>
  <li>
    b
  </li>
</ul>
```

# Update
```js
container.querySelector("button.add").click();
```
```html
<button
  class="add"
>
  add
</button>
<ul>
  <li
    class="danger"
  >
    new
  </li>
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
INSERT: ul > .danger
UPDATE: .danger[class] null => "danger"
UPDATE: ul > li:nth-of-type(2)[class] "danger" => null
```

# Update
```js
container.querySelector("button.add").click();
```
```html
<button
  class="add"
>
  add
</button>
<ul>
  <li
    class="danger"
  >
    new
  </li>
  <li>
    new
  </li>
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
INSERT: ul > .danger
UPDATE: .danger[class] null => "danger"
UPDATE: ul > li:nth-of-type(2)[class] "danger" => null
```
