# Render
```html
<button>
  change
</button>
<ul>
  <li>
    a=1
  </li>
  <li>
    b=2
  </li>
</ul>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  change
</button>
<ul>
  <li>
    b=2
  </li>
  <li>
    a=3
  </li>
  <li>
    c=1
  </li>
</ul>
```
## Change
```
REMOVE: ul > li
INSERT: ul > li:nth-of-type(1)
INSERT: ul > li:nth-of-type(2)
UPDATE: ul > li:nth-of-type(3)::text@0 "a" => "c"
```
