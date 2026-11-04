# Render `{"items":[{"id":"SHOWN_a1"},{"id":"SHOWN_b1"}],"data":{"q":"SHOWN_q1","token":"SECRET_token1"}}`
```html
<button
  class="toggle"
>
  closed
</button>
<ul>
  <li>
    <a
      href="/?q=SHOWN_q1&sel=SHOWN_a1"
    >
      SHOWN_a1
    </a>
  </li>
  <li>
    <a
      href="/?q=SHOWN_q1&sel=SHOWN_b1"
    >
      SHOWN_b1
    </a>
  </li>
</ul>
```

# Update
```js
document.querySelector("li").click();
```
```html
<button
  class="toggle"
>
  closed
</button>
<ul>
  <li
    class="hovered"
  >
    <a
      href="/?q=SHOWN_q1&sel=SHOWN_a1"
    >
      SHOWN_a1
    </a>
  </li>
  <li>
    <a
      href="/?q=SHOWN_q1&sel=SHOWN_b1"
    >
      SHOWN_b1
    </a>
  </li>
</ul>
```
## Change
```
UPDATE: .hovered[class] null => "hovered"
```

# Update `{"items":[{"id":"SHOWN_a2"},{"id":"SHOWN_b2"}],"data":{"q":"SHOWN_q2","token":"SECRET_token2"}}`
```html
<button
  class="toggle"
>
  closed
</button>
<ul>
  <li
    class=""
  >
    <a
      href="/?q=SHOWN_q2&sel=SHOWN_a2"
    >
      SHOWN_a2
    </a>
  </li>
  <li>
    <a
      href="/?q=SHOWN_q2&sel=SHOWN_b2"
    >
      SHOWN_b2
    </a>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1) > a[href] "/?q=SHOWN_q1&sel=SHOWN_a1" => "/?q=SHOWN_q2&sel=SHOWN_a2"
UPDATE: ul > li:nth-of-type(1) > a::text "SHOWN_a1" => "SHOWN_a2"
UPDATE: ul > li:nth-of-type(2) > a[href] "/?q=SHOWN_q1&sel=SHOWN_b1" => "/?q=SHOWN_q2&sel=SHOWN_b2"
UPDATE: ul > li:nth-of-type(2) > a::text "SHOWN_b1" => "SHOWN_b2"
UPDATE: ul > li:nth-of-type(1)[class] "hovered" => ""
```
