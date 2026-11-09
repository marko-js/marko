# Render `{"first":[1,2],"second":[3,4]}`
```html
<ul>
  <li>
    a1
  </li>
  <li>
    a2
  </li>
</ul>
<ol>
  <li>
    a3!
  </li>
  <li>
    a4!
  </li>
</ol>
<button>
  go
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<ul>
  <li>
    b1
  </li>
  <li>
    b2
  </li>
</ul>
<ol>
  <li>
    b3?
  </li>
  <li>
    b4?
  </li>
</ol>
<button>
  go
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@0 "a" => "b"
UPDATE: ul > li:nth-of-type(2)::text@0 "a" => "b"
UPDATE: ol > li:nth-of-type(1)::text@0 "a" => "b"
UPDATE: ol > li:nth-of-type(2)::text@0 "a" => "b"
UPDATE: ol > li:nth-of-type(1)::text@2 "!" => "?"
UPDATE: ol > li:nth-of-type(2)::text@2 "!" => "?"
```
