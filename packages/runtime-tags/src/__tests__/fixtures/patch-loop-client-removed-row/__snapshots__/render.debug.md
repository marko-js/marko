# Render `{"label":"a"}`
```html
<button>
  drop
</button>
<ul>
  <li>
    1: a
  </li>
  <li>
    2: a
  </li>
  <li>
    3: a
  </li>
</ul>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  drop
</button>
<ul>
  <li>
    1: a
  </li>
  <li>
    3: a
  </li>
</ul>
```
## Change
```
REMOVE: ul > li:nth-of-type(1) + li
```

# Update `{"label":"b"}`
```html
<button>
  drop
</button>
<ul>
  <li>
    1: b
  </li>
  <li>
    3: b
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@3 "a" => "b"
UPDATE: ul > li:nth-of-type(2)::text@3 "a" => "b"
```
