# Render `{"items":[{"id":1,"attrs":{"class":"a"}}]}`
```html
<ul>
  <li
    class="a"
  >
    1
  </li>
</ul>
<button>
  0
</button>
```

# Update `{"items":[{"id":1,"attrs":{"class":"b"}},{"id":2,"attrs":{"title":"two"}}]}`
```html
<ul>
  <li
    class="b"
  >
    1
  </li>
  <li
    title="two"
  >
    2
  </li>
</ul>
<button>
  0
</button>
```
## Change
```
INSERT: .b + li
UPDATE: .b[class] "a" => "b"
UPDATE: ul > li:nth-of-type(2)[title] null => "two"
UPDATE: ul > li:nth-of-type(2)::text " " => "2"
```

# Update `{"items":[{"id":2,"attrs":{}}]}`
```html
<ul>
  <li>
    2
  </li>
</ul>
<button>
  0
</button>
```
## Change
```
REMOVE: ul > li
UPDATE: ul > li[title] "two" => null
```
