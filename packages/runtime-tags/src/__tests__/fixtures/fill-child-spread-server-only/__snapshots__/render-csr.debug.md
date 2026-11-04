# Render `{"$global":{"data":{"q":"cafe","items":[{"id":"1"},{"id":"2"}]}}}`
```html
<ul>
  <li>
    <a
      href="/?q=cafe&sel=1"
    >
      1
    </a>
  </li>
  <li>
    <a
      href="/?q=cafe&sel=2"
    >
      2
    </a>
  </li>
</ul>
```

# Update
```js
document
.querySelector("li") 
.dispatchEvent(new (document.defaultView).MouseEvent("mouseenter"));
```
```html
<ul>
  <li
    class="hovered"
  >
    <a
      href="/?q=cafe&sel=1"
    >
      1
    </a>
  </li>
  <li>
    <a
      href="/?q=cafe&sel=2"
    >
      2
    </a>
  </li>
</ul>
```
## Change
```
UPDATE: .hovered[class] null => "hovered"
```

# Update `{"$global":{"data":{"q":"park","items":[{"id":"1"},{"id":"2"}]}}}`

# Update `{"$global":{"data":{"q":"","items":[{"id":"2"},{"id":"3"}]}}}`

# Update
```js
document
.querySelector("li") 
.dispatchEvent(new (document.defaultView).MouseEvent("mouseenter"));
```

# Update `{"$global":{"data":{"q":"cafe","items":[{"id":"1"},{"id":"2"}]}}}`

# Update `{"$global":{"data":{"q":"park","items":[{"id":"1"}]}}}`
