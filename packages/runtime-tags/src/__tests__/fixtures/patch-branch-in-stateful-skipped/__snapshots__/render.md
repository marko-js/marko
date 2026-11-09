# Render `{"label":"a","items":["x","y"]}`
```html
<p>
  a
</p>
<ul>
  <li>
    x
  </li>
  <li>
    y
  </li>
</ul>
<button>
  toggle
</button>
```

# Update `{"label":"","items":["y"]}`
```html
<ul>
  <li>
    y
  </li>
</ul>
<button>
  toggle
</button>
```
## Change
```
UPDATE: ul > li::text "x" => "y"
REMOVE: ul > li + li
REMOVE: p
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: ul
```

# Update
```js
document.querySelector("button").click();
```
```html
<ul>
  <li>
    y
  </li>
</ul>
<button>
  toggle
</button>
```
## Change
```
INSERT: ul
INSERT: ul > li
```

# Update `{"label":"b","items":["x","z"]}`
```html
<p>
  b
</p>
<ul>
  <li>
    x
  </li>
  <li>
    z
  </li>
</ul>
<button>
  toggle
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text "y" => "x"
INSERT: ul > li:nth-of-type(1) + li
INSERT: p
UPDATE: p::text " " => "b"
```
