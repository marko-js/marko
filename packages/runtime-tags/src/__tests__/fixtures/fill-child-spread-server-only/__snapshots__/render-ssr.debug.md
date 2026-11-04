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
