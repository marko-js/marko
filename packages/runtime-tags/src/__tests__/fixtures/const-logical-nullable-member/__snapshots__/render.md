# Render
```html
<ul>
  <li>
    and
  </li>
  <li>
    ternary
  </li>
  <li>
    andassign
  </li>
</ul>
<button>
  toggle
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<ul>
  <li>
    none
  </li>
  <li>
    none
  </li>
  <li>
    none
  </li>
</ul>
<button>
  toggle
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text "and" => "none"
UPDATE: ul > li:nth-of-type(2)::text "ternary" => "none"
UPDATE: ul > li:nth-of-type(3)::text "andassign" => "none"
```
