# Render `{"$global":{"data":{"q":"a","items":[{"id":"1"},{"id":"2"}]}}}`
```html
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
UPDATE: ul > li > a[href] "/?q=a&sel=1" => "/?q=b&sel=3"
UPDATE: ul > li > a::text "1" => "3"
REMOVE: ul > li + li
```
