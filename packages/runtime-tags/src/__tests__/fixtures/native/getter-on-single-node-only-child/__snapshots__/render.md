# Render
```html
<button />
<ul
  class="attached"
>
  <li>
    0
  </li>
  <li>
    1
  </li>
</ul>
```

# Update `click("button")`
```html
<button />
<ul
  class="attached"
>
  <li>
    0
  </li>
  <li>
    1
  </li>
  <li>
    2
  </li>
</ul>
```
## Change
```
INSERT: .attached > li:nth-of-type(2) + li
```

# Update `click("button")`
```html
<button />
<ul
  class="attached"
>
  <li>
    0
  </li>
  <li>
    1
  </li>
  <li>
    2
  </li>
  <li>
    3
  </li>
</ul>
```
## Change
```
INSERT: .attached > li:nth-of-type(3) + li
```

# Update `click("button")`
```html
<button />
<ul
  class="attached"
>
  <li>
    0
  </li>
  <li>
    1
  </li>
  <li>
    2
  </li>
  <li>
    3
  </li>
  <li>
    4
  </li>
</ul>
```
## Change
```
INSERT: .attached > li:nth-of-type(4) + li
```
