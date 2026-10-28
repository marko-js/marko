# Render `{"items":[{"id":"a"}],"show":true}`
```html
<ul>
  <li>
    <button>
      a01
    </button>
  </li>
</ul>
```

# Update `{"items":[{"id":"a"},{"id":"b"}],"show":true}`
```html
<ul>
  <li>
    <button>
      a01
    </button>
  </li>
  <li>
    <button>
      b01
    </button>
  </li>
</ul>
```
## Change
```
INSERT: ul > li:nth-of-type(1) + li
UPDATE: ul > li:nth-of-type(2) > button::text " " => "b01"
```
