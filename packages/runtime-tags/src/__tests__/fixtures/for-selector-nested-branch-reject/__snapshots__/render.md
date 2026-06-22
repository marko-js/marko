# Render `{"show":true}`
```html
<ul>
  <li
    class="danger"
  >
    <button
      class="select"
    >
      a
    </button>
  </li>
  <li>
    <button
      class="select"
    >
      b
    </button>
  </li>
</ul>
```

# Update
```js
container.querySelectorAll("button.select")[n].click();
```
```html
<ul>
  <li>
    <button
      class="select"
    >
      a
    </button>
  </li>
  <li
    class="danger"
  >
    <button
      class="select"
    >
      b
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)[class] "danger" => null
UPDATE: .danger[class] null => "danger"
```

# Update
```js
container.querySelectorAll("button.select")[n].click();
```
```html
<ul>
  <li
    class="danger"
  >
    <button
      class="select"
    >
      a
    </button>
  </li>
  <li>
    <button
      class="select"
    >
      b
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: .danger[class] null => "danger"
UPDATE: ul > li:nth-of-type(2)[class] "danger" => null
```
