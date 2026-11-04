# Render `{"selected":1}`
```html
<ul>
  <li>
    1*
  </li>
  <li>
    2
  </li>
  <li>
    3
  </li>
</ul>
<button>
  +
</button>
```

# Update `{"selected":2}`
```html
<ul>
  <li>
    1
  </li>
  <li>
    2*
  </li>
  <li>
    3
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text "*" => ""
UPDATE: ul > li:nth-of-type(2)::text@1 "" => "*"
```

# Update
```js
document.querySelector("button").click();
```
```html
<ul>
  <li>
    1
  </li>
  <li>
    2*
  </li>
  <li>
    3
  </li>
  <li>
    4
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
INSERT: ul > li:nth-of-type(3) + li
```

# Update `{"selected":4}`
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
  <li>
    4*
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(2)::text "*" => ""
UPDATE: ul > li:nth-of-type(4)::text@1 "" => "*"
```
