# Render `{"on":true,"as":["x"],"bs":[1,2],"note":"n"}`
```html
<button
  class="inc"
>
  0
</button>
<ul>
  <li>
    x:1:n
  </li>
  <li>
    x:2:n
  </li>
</ul>
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  class="inc"
>
  1
</button>
<ul>
  <li>
    x:1:n
  </li>
  <li>
    x:2:n
  </li>
</ul>
```
## Change
```
UPDATE: .inc::text "0" => "1"
```
