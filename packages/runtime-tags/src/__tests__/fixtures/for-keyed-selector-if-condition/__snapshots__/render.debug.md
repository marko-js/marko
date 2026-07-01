# Render
```html
<ul>
  <li>
    <strong>
      *
    </strong>
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
  <li>
    <button
      class="select"
    >
      c
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
  <li>
    <button
      class="select"
    >
      b
    </button>
  </li>
  <li>
    <strong>
      *
    </strong>
    <button
      class="select"
    >
      c
    </button>
  </li>
</ul>
```
## Change
```
REMOVE: ul > li:nth-of-type(1) > strong
INSERT: ul > li:nth-of-type(3) > strong
```

# Update
```js
container.querySelectorAll("button.select")[n].click();
```
```html
<ul>
  <li>
    <strong>
      *
    </strong>
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
  <li>
    <button
      class="select"
    >
      c
    </button>
  </li>
</ul>
```
## Change
```
INSERT: ul > li:nth-of-type(1) > strong
REMOVE: ul > li:nth-of-type(3) > strong
```
