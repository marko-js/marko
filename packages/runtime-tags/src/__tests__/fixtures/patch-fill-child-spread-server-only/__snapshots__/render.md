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
```html
<ul>
  <li
    class="hovered"
  >
    <a
      href="/?q=park&sel=1"
    >
      1
    </a>
  </li>
  <li>
    <a
      href="/?q=park&sel=2"
    >
      2
    </a>
  </li>
</ul>
```
## Change
```
UPDATE: .hovered > a[href] "/?q=cafe&sel=1" => "/?q=park&sel=1"
UPDATE: ul > li:nth-of-type(2) > a[href] "/?q=cafe&sel=2" => "/?q=park&sel=2"
```

# Update `{"$global":{"data":{"q":"","items":[{"id":"2"},{"id":"3"}]}}}`
```html
<ul>
  <li
    class=""
  >
    <a
      href="/?q=&sel=2"
    >
      2
    </a>
  </li>
  <li>
    <a
      href="/?q=&sel=3"
    >
      3
    </a>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1) > a[href] "/?q=park&sel=1" => "/?q=&sel=2"
UPDATE: ul > li:nth-of-type(1) > a::text "1" => "2"
UPDATE: ul > li:nth-of-type(2) > a[href] "/?q=park&sel=2" => "/?q=&sel=3"
UPDATE: ul > li:nth-of-type(2) > a::text "2" => "3"
UPDATE: ul > li:nth-of-type(1)[class] "hovered" => ""
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
      href="/?q=&sel=2"
    >
      2
    </a>
  </li>
  <li>
    <a
      href="/?q=&sel=3"
    >
      3
    </a>
  </li>
</ul>
```
## Change
```
UPDATE: .hovered[class] "" => "hovered"
```

# Update `{"$global":{"data":{"q":"cafe","items":[{"id":"1"},{"id":"2"}]}}}`
```html
<ul>
  <li
    class=""
  >
    <a
      href="/?q=cafe&sel=1"
    >
      1
    </a>
  </li>
  <li
    class="hovered"
  >
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
UPDATE: ul > li:nth-of-type(1) > a[href] "/?q=&sel=2" => "/?q=cafe&sel=1"
UPDATE: ul > li:nth-of-type(1) > a::text "2" => "1"
UPDATE: .hovered > a[href] "/?q=&sel=3" => "/?q=cafe&sel=2"
UPDATE: .hovered > a::text "3" => "2"
UPDATE: ul > li:nth-of-type(1)[class] "hovered" => ""
UPDATE: .hovered[class] null => "hovered"
```

# Update `{"$global":{"data":{"q":"park","items":[{"id":"1"}]}}}`
```html
<ul>
  <li
    class=""
  >
    <a
      href="/?q=park&sel=1"
    >
      1
    </a>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li > a[href] "/?q=cafe&sel=1" => "/?q=park&sel=1"
REMOVE: ul > li + li
```
