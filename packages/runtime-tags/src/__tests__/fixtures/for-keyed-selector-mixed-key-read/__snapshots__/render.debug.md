# Render
```html
<ul>
  <li
    class="danger"
  >
    <span>
      a
    </span>
    <button
      class="select"
    >
      x
    </button>
  </li>
  <li>
    <span />
    <button
      class="select"
    >
      x
    </button>
  </li>
</ul>
<button
  class="relabel"
>
  relabel
</button>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<ul>
  <li
    class="danger"
  >
    <span>
      a!
    </span>
    <button
      class="select"
    >
      x
    </button>
  </li>
  <li>
    <span />
    <button
      class="select"
    >
      x
    </button>
  </li>
</ul>
<button
  class="relabel"
>
  relabel
</button>
```
## Change
```
UPDATE: .danger > span::text "a" => "a!"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<ul>
  <li
    class="danger"
  >
    <span>
      a!!
    </span>
    <button
      class="select"
    >
      x
    </button>
  </li>
  <li>
    <span />
    <button
      class="select"
    >
      x
    </button>
  </li>
</ul>
<button
  class="relabel"
>
  relabel
</button>
```
## Change
```
UPDATE: .danger > span::text "a!" => "a!!"
```
