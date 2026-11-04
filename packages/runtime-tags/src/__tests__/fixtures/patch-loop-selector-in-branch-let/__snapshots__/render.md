# Render `{"selected":1}`
```html
<ul>
  <li
    class="sel"
  >
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

# Update `{"selected":2}`

# Update
```js
document.querySelectorAll("li")[2].click();
```
```html
<ul>
  <li
    class=""
  >
    1
  </li>
  <li>
    2
  </li>
  <li
    class="sel"
  >
    3
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)[class] "sel" => ""
UPDATE: .sel[class] null => "sel"
```

# Update `{"selected":1}`
