# Render `{"$global":{"data":{"q":"a","items":[{"id":"1"},{"id":"2"}]}}}`
```html
<button>
  toggle
</button>
<ul>
  <li>
    <a
      href="/?q=a&sel=1"
    >
      1
    </a>
  </li>
  <li>
    <a
      href="/?q=a&sel=2"
    >
      2
    </a>
  </li>
</ul>
```

# Update `{"$global":{"data":{"q":"b","items":[{"id":"3"}]}}}`
```html
<button>
  toggle
</button>
<ul>
  <li>
    <a
      href="/?q=b&sel=3"
    >
      3
    </a>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li > a::text "1" => "3"
UPDATE: ul > li > a[href] "/?q=a&sel=1" => "/?q=b&sel=3"
REMOVE: ul > li + li
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<ul>
  <li>
    <a
      href="/?q=b&sel=3"
    >
      3
    </a>
  </li>
</ul>
<ul>
  <li>
    <a
      href="/?q=client&sel=c"
    >
      c
    </a>
  </li>
</ul>
```
## Change
```
INSERT: ul:nth-of-type(1) + ul
INSERT: ul:nth-of-type(2) > li
UPDATE: ul:nth-of-type(2) > li > a[href] null => "/?q=client&sel=c"
```
