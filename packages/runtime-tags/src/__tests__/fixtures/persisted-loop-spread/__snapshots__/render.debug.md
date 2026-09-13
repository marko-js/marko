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
UPDATE: .b[class] "a" => "b"
UPDATE: .b::text "1" => "1"
INSERT: .b + li
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
UPDATE: ul > li[title] "two" => null
UPDATE: ul > li::text "2" => "2"
REMOVE: ul > li
```
