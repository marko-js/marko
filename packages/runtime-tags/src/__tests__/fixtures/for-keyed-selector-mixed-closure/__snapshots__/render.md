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

# Update `click("button.flip")`
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

# Update `click("button.flip")`
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
