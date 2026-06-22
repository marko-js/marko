# Render
```html
<ul>
  <li
    class="danger"
  >
    <button
      class="toggle"
    >
      a
    </button>
  </li>
  <li>
    <button
      class="toggle"
    >
      b
    </button>
  </li>
</ul>
```

# Update
```js
container.querySelectorAll("button.toggle")[n].click();
```
```html
<ul>
  <li>
    <button
      class="toggle"
    >
      a
    </button>
  </li>
  <li>
    <button
      class="toggle"
    >
      b
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)[class] "danger" => null
```

# Update
```js
container.querySelectorAll("button.toggle")[n].click();
```
```html
<ul>
  <li>
    <button
      class="toggle"
    >
      a
    </button>
  </li>
  <li
    class="danger"
  >
    <button
      class="toggle"
    >
      b
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: .danger[class] null => "danger"
```
