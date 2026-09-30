# Render
```html
<ul>
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
<button
  id="toggle"
>
  Toggle
</button>
<button
  id="reverse"
>
  Reverse
</button>
```

# Update `click("#toggle")`
```html
<ul
  hidden=""
>
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
<button
  id="toggle"
>
  Toggle
</button>
<button
  id="reverse"
>
  Reverse
</button>
```
## Change
```
UPDATE: ul[hidden] null => ""
```

# Update `click("#toggle")`
```html
<ul>
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
<button
  id="toggle"
>
  Toggle
</button>
<button
  id="reverse"
>
  Reverse
</button>
```
## Change
```
UPDATE: ul[hidden] "" => null
```

# Update `click("#reverse")`
```html
<ul>
  <li>
    3
  </li>
  <li>
    2
  </li>
  <li>
    1
  </li>
</ul>
<button
  id="toggle"
>
  Toggle
</button>
<button
  id="reverse"
>
  Reverse
</button>
```
## Change
```
REMOVE: ul > li:nth-of-type(3) + li
INSERT: ul > li
REMOVE: ul > li:nth-of-type(3) + li
INSERT: ul > li
```
