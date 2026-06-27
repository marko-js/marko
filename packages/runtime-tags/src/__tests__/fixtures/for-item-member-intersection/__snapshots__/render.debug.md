# Render
```html
<ul>
  <li>
    3
  </li>
  <li>
    7
  </li>
</ul>
<button>
  rev
</button>
```

# Update
```js
c.querySelector("button").click();
```
```html
<ul>
  <li>
    7
  </li>
  <li>
    3
  </li>
</ul>
<button>
  rev
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text "3" => "7"
UPDATE: ul > li:nth-of-type(2)::text "7" => "3"
```
